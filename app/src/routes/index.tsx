import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { useAuth } from 'src/hooks/useAuthentication'

import { PrivateStackRoutes } from './private.stack'
// import { PublicStackRoutes } from './public.stack'
import { PublicTabRoutes } from './public.tab'

export const Routes = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <PrivateStackRoutes /> : <PublicTabRoutes />}
    </NavigationContainer>
  )
}
