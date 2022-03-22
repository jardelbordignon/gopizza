import React from 'react'

import { useSignIn } from '../SignInContext'

import { ForgotPassword } from './ForgotPassword'
import { Login } from './Login'
import { ResetPassword } from './ResetPassword'

export const SignInContent = () => {
  const { currentContent } = useSignIn()

  if (currentContent === 'ForgotPassword') return <ForgotPassword />
  if (currentContent === 'ResetPassword') return <ResetPassword />
  return <Login />
}
