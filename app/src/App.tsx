import 'react-native-gesture-handler'
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Progress } from 'src/components'
import { createClient } from 'src/gql/client'
import { AuthProvider } from 'src/hooks/useAuthentication'
import { SignIn } from 'src/screens/SignIn'
import theme from 'src/theme'

export const App = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  const loadSession = async () => {
    let accessToken = ''

    const tokens = await AsyncStorage.getItem('@GoPizza:tokens')

    if (tokens) {
      const tokensObj = JSON.parse(tokens)
      accessToken = tokensObj.accessToken
    }

    setClient(createClient(accessToken))
  }

  useEffect(() => {
    loadSession()
  }, [])

  if (!client) {
    return <Progress />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />

      <ApolloProvider client={client}>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}
