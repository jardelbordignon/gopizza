import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'

import {
  LoginMutation,
  ResetPasswordMutation,
  SendPasswordResetEmailMutation,
} from 'src/gql/generated/endpointTypes'
import {
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  RESET_PASSWORD_MUTATION,
  SEND_PASSWORD_RESET_EMAIL_MUTATION,
} from 'src/gql/modules/account/mutations'

type UserType = LoginMutation['login']['user'] | null

type AuthContextProps = {
  login(email: string, password: string): Promise<void>
  logout(userId: string): void
  sendPasswordResetEmail(email: string): void
  resetPassword(refreshToken: string, password: string): void
  loading: boolean
  user: UserType
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<UserType>(null)

  const [loginMutation] = useMutation<LoginMutation>(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      const { user: loggedUser, tokens } = login
      setUser(loggedUser)
      AsyncStorage.setItem('@GoPizza:user', JSON.stringify(loggedUser))
      AsyncStorage.setItem('@GoPizza:tokens', JSON.stringify(tokens))
    },
    onError: (err: Error) => {
      Alert.alert('Login', `${err.message}`)
    },
  })

  const [logoutMutation] = useMutation(LOGOUT_MUTATION)

  const [sendPasswordResetEmailMutation] =
    useMutation<SendPasswordResetEmailMutation>(
      SEND_PASSWORD_RESET_EMAIL_MUTATION,
      {
        onCompleted: () => {
          console.log('Email enviado, redirecionar para a screen de nova senha')
        },
        onError: (err: Error) => {
          Alert.alert('Recuperação de senha', `${err.message}`)
        },
      }
    )

  const [resetPasswordMutation] = useMutation<ResetPasswordMutation>(
    RESET_PASSWORD_MUTATION,
    {}
  )

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Autenticação', 'Informe o e-mail e a senha')
    }

    setLoading(true)
    await loginMutation({ variables: { email, password } })
    setLoading(false)
  }

  const logout = (userId: string): void => {
    logoutMutation({ variables: { userId } })
    AsyncStorage.removeItem('@GoPizza:user')
    AsyncStorage.removeItem('@GoPizza:tokens')
    setUser(null)
  }

  const sendPasswordResetEmail = async (email: string) => {
    if (!email) {
      return Alert.alert('Recuperação de senha', 'Informe o e-mail')
    }

    setLoading(true)
    await sendPasswordResetEmailMutation({ variables: { email } })
    setLoading(false)
  }

  const resetPassword = async (refreshToken: string, password: string) => {
    if (!refreshToken || !password) {
      return Alert.alert('Alteração de senha', 'Informe token e a senha')
    }

    setLoading(true)
    await resetPasswordMutation({ variables: { refreshToken, password } })
    setLoading(false)
  }

  const loadStoredUser = async () => {
    setLoading(true)

    const storedUser = await AsyncStorage.getItem('@GoPizza:user')

    if (storedUser) {
      const parsedUser: UserType = JSON.parse(storedUser)
      setUser(parsedUser)
    }

    setLoading(false)
  }

  useEffect(() => {
    loadStoredUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        sendPasswordResetEmail,
        resetPassword,
        loading,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
