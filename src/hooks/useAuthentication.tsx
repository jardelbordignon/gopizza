import React, { ReactNode, createContext, useContext } from 'react'

type AuthContextProps = {}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
