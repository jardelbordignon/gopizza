import React from 'react'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

export const ResetPassword = () => {
  const { resetPassword, loading } = useAuth()
  const {
    refreshToken,
    setRefreshToken,
    password,
    setPassword,
    changeContent,
  } = useSignIn()

  const handleResetPassword = () => {
    resetPassword(refreshToken, password)
  }

  return (
    <>
      <S.Title>Cadastrar nova senha</S.Title>

      <Input
        placeholder="Token"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setRefreshToken}
      />

      <Input
        placeholder="Senha"
        variant="secondary"
        secureTextEntry
        onChangeText={setPassword}
      />

      <S.AuxiliaryButton onPress={() => changeContent('Login')}>
        <S.AuxiliaryButtonLabel>Voltar para Login</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <Button
        title="Alterar senha"
        variant="secondary"
        isLoading={loading}
        onPress={handleResetPassword}
      />
    </>
  )
}
