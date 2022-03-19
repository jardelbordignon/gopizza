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

import { LoginMutation } from 'src/gql/generated/endpointTypes'
import {
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
} from 'src/gql/modules/account/mutations'

type UserType = LoginMutation['login']['user'] | null

type AuthContextProps = {
  login(email: string, password: string): Promise<void>
  logout(userId: string): void
  logging: boolean
  user: UserType
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logging, setLogging] = useState(false)
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

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Autenticação', 'Informe o login e a senha')
    }

    setLogging(true)
    await loginMutation({ variables: { email, password } })
    setLogging(false)
  }

  const logout = (userId: string): void => {
    logoutMutation({ variables: { userId } })
    AsyncStorage.removeItem('@GoPizza:user')
    AsyncStorage.removeItem('@GoPizza:tokens')
    setUser(null)
  }

  const loadStoredUser = async () => {
    setLogging(true)

    const storedUser = await AsyncStorage.getItem('@GoPizza:user')

    if (storedUser) {
      const parsedUser: UserType = JSON.parse(storedUser)
      setUser(parsedUser)
    }

    setLogging(false)
  }

  useEffect(() => {
    loadStoredUser()
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, logging, user }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
