import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import brandImg from 'src/assets/brand.png'
import { Button, Input } from 'src/components'

import * as S from './styles'

export const SignIn = () => {
  const ios = Platform.OS === 'ios'

  return (
    <S.Container>
      <KeyboardAvoidingView behavior={ios ? 'padding' : undefined}>
        <S.Content>
          <S.Brand source={brandImg} />

          <S.Title>Login</S.Title>

          <Input
            placeholder="E-mail"
            variant="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Senha" variant="secondary" secureTextEntry />

          <S.ForgotPasswordButton>
            <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>

          <Button variant="secondary" isLoading={false}>
            Entrar
          </Button>
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
