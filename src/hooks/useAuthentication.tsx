import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from 'react-native-dotenv'

type AuthContextProps = {
  signIn(email: string, password: string): Promise<void>
  isLogging: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setIsLogging] = useState(false)

  const signIn = async (email: string, password: string): Promise<void> => {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe o login e a senha')
    }

    setIsLogging(true)

    const firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
      appId: FIREBASE_APP_ID,
    }

    initializeApp(firebaseConfig)

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('user', userCredential)
      })
      .catch(error => {
        console.error(error)
        const { code } = error

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'Senha e/ou e-mail inválido.')
        } else {
          return Alert.alert('Login', 'Não foi possível realizar o login.')
        }
      })
      .finally(() => {
        setIsLogging(false)
      })
  }

  return (
    <AuthContext.Provider value={{ signIn, isLogging }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
