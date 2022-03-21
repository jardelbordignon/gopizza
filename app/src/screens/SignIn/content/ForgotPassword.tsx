import React from 'react'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

export const ForgotPassword = () => {
  const { sendPasswordResetEmail, loading } = useAuth()
  const { email, setEmail, changeContent } = useSignIn()

  const handleSendPasswordResetEmail = () => {
    sendPasswordResetEmail(email)
  }

  return (
    <>
      <S.Title>Esqueci minha senha</S.Title>

      <Input
        placeholder="E-mail"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <S.AuxiliaryButton onPress={() => changeContent('Login')}>
        <S.AuxiliaryButtonLabel>Voltar para Login</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <S.AuxiliaryButton onPress={() => changeContent('ResetPassword')}>
        <S.AuxiliaryButtonLabel>Nova senha</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <Button
        title="Enviar"
        variant="secondary"
        isLoading={loading}
        onPress={handleSendPasswordResetEmail}
      />
    </>
  )
}
