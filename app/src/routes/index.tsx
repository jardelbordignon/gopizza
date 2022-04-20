import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { useAuth } from 'src/hooks/useAuthentication'

import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

export const Routes = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
