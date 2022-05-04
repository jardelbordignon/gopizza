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
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useSendPasswordResetEmailMutation,
} from 'src/gql/genApiDocs'

type UserType = LoginMutation['login']['user'] | null

type AuthContextProps = {
  login(email: string, password: string): Promise<void>
  logout(): Promise<void>
  sendPasswordResetEmail(email: string): Promise<void>
  resetPassword(refreshToken: string, password: string): Promise<void>
  loading: boolean
  keepingAuth: boolean
  user: UserType
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [keepingAuth, setKeepingAuth] = useState(false)
  const [user, setUser] = useState<UserType>(null)

  const [loginMutation] = useLoginMutation()
  const [logoutMutation] = useLogoutMutation()

  const [sendPasswordResetEmailMutation] = useSendPasswordResetEmailMutation({
    onCompleted: () => {
      console.log('Email enviado, redirecionar para a screen de nova senha')
    },
    onError: (err: Error) => {
      Alert.alert('Recuperação de senha', `${err.message}`)
    },
  })

  const [resetPasswordMutation] = useResetPasswordMutation()

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true)
    try {
      const res = await loginMutation({ variables: { email, password } })

      if (res.data) {
        setKeepingAuth(true)
        const { user: _user, tokens } = res.data.login
        await AsyncStorage.multiSet([
          ['@GoPizza:user', JSON.stringify(_user)],
          ['@GoPizza:tokens', JSON.stringify(tokens)],
        ])
        setUser(_user)
        setKeepingAuth(false)
      }
    } catch (error: any) {
      Alert.alert('Erro ao efetuar login', error.message)
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    if (!user) return
    setLoading(true)
    const res = await logoutMutation({ variables: { userId: user.id } })
    if (res.data && res.data.logout) {
      await AsyncStorage.multiRemove(['@GoPizza:user', '@GoPizza:tokens'])
      setUser(null)
    }
    setLoading(false)
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
        keepingAuth,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
