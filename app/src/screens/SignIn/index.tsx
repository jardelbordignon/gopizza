import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import brandImg from 'src/assets/brand.png'
import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

import * as S from './styles'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, logging } = useAuth()

  const ios = Platform.OS === 'ios'

  const handleLogin = () => {
    login(email, password)
  }

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
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            variant="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <S.ForgotPasswordButton>
            <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
          </S.ForgotPasswordButton>

          <Button
            title="Entrar"
            variant="secondary"
            isLoading={logging}
            onPress={handleLogin}
          />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
