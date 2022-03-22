import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

type ContentType = 'ForgotPassword' | 'Login' | 'ResetPassword'

type SignInContextProps = {
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  refreshToken: string
  setRefreshToken: (refreshToken: string) => void
  currentContent: string
  changeContent: (contentType: ContentType) => void
}

type SignInProviderProps = {
  children: ReactNode
}

const SignInContext = createContext({} as SignInContextProps)

const SignInProvider = ({ children }: SignInProviderProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  const [currentContent, setCurrentContent] = useState<ContentType>('Login')

  const changeContent = useCallback((contentType: ContentType) => {
    setCurrentContent(contentType)
  }, [])

  return (
    <SignInContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        refreshToken,
        setRefreshToken,
        currentContent,
        changeContent,
      }}>
      {children}
    </SignInContext.Provider>
  )
}

const useSignIn = () => useContext(SignInContext)

export { SignInProvider, useSignIn }
