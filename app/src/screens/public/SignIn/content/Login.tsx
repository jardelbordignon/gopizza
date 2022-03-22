import React from 'react'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

export const Login = () => {
  const { login, loading } = useAuth()
  const { email, setEmail, password, setPassword, changeContent } = useSignIn()

  const handleLogin = () => {
    login(email, password)
  }

  return (
    <>
      <S.Title>Login</S.Title>

      <Input
        placeholder="E-mail"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        variant="secondary"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <S.AuxiliaryButton onPress={() => changeContent('ForgotPassword')}>
        <S.AuxiliaryButtonLabel>Esqueci minha senha</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <Button
        title="Entrar"
        variant="secondary"
        isLoading={loading}
        onPress={handleLogin}
      />
    </>
  )
}
