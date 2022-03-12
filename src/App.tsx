import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Demo } from 'src/screens/Demo'
import theme from 'src/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />

      <Demo />
    </ThemeProvider>
  )
}
