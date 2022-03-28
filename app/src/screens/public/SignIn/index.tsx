import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import brandImg from 'src/assets/brand.png'

import { SignInProvider } from './SignInContext'
import { SignInContent } from './content'
import * as S from './styles'

export const SignIn = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <S.Container>
      <KeyboardAvoidingView behavior={behavior}>
        <S.Content>
          <S.Brand source={brandImg} />

          <SignInProvider>
            <SignInContent />
          </SignInProvider>
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
