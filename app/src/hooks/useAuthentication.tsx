import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'

import { LoginMutation } from 'src/gql/generated/endpointTypes'
import { LOGIN_MUTATION } from 'src/gql/modules/account/mutations'

type AuthContextProps = {
  auth(email: string, password: string): Promise<void>
  loading: boolean
  user?: LoginMutation['login']['user']
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false)

  const [login] = useMutation<LoginMutation>(LOGIN_MUTATION, {
    onCompleted(res) {
      const { user, tokens } = res.login
      AsyncStorage.setItem('@GoPizza:user', JSON.stringify(user))
      AsyncStorage.setItem('@GoPizza:tokens', JSON.stringify(tokens))
    },
    onError(err) {
      Alert.alert('Login', `${err.message}`)
    },
  })

  const auth = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Autenticação', 'Informe o login e a senha')
    }

    setLoading(true)
    await login({ variables: { email, password } })
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ auth, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
