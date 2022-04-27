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
import { LoginMutation } from 'src/gql/genApiDocs'
import { AuthProvider } from 'src/hooks/useAuthentication'
import { Routes } from 'src/routes'
import theme from 'src/theme'
import 'src/config/yupLocales'

type TokensType = LoginMutation['login']['tokens']

// let renderCount = 0

export const App = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  // renderCount++
  // console.log(`${renderCount} renders`)

  const loadSession = async () => {
    let accessToken = ''

    const tokens = await AsyncStorage.getItem('@GoPizza:tokens')

    if (tokens) {
      const parsedTokens: TokensType = JSON.parse(tokens)
      accessToken = parsedTokens.accessToken
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
          <Routes />
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}
