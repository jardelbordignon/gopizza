import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Progress } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

import { PrivateStackRoutes } from './private.stack'
import { PublicStackRoutes } from './public.stack'

export const Routes = () => {
  const { user, keepingAuth } = useAuth()

  if (keepingAuth) return <Progress />

  return (
    <NavigationContainer>
      {user ? <PrivateStackRoutes /> : <PublicStackRoutes />}
    </NavigationContainer>
  )
}
