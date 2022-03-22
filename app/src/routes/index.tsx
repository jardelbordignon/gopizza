import React from 'react'

import { useAuth } from 'src/hooks/useAuthentication'

import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

export const Routes = () => {
  const { user } = useAuth()

  return user ? <PrivateRoutes /> : <PublicRoutes />
}
