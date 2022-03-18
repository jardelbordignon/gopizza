import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'

import { LoginMutation } from 'src/gql/generated/endpointTypes'
import { LOGIN_MUTATION } from 'src/gql/modules/account/mutations'

type UserType = LoginMutation['login']['user']

type AuthContextProps = {
  auth(email: string, password: string): Promise<void>
  loading: boolean
  user?: UserType
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<UserType>()

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

  const auth = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Autenticação', 'Informe o login e a senha')
    }

    setLoading(true)
    await loginMutation({ variables: { email, password } })
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ auth, loading, user }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
