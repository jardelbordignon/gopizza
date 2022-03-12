import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { AuthProvider } from 'src/hooks/useAuthentication'
import { SignIn } from 'src/screens/SignIn'
import theme from 'src/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  )
}
