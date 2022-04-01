import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'
import { YupType, useHookForm } from 'src/hooks/useHookForm'

type FormData = {
  email: string
}

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    email: yup.string().required().email(),
  })

export const ForgotPassword = () => {
  const { sendPasswordResetEmail, loading } = useAuth()
  const { changeContent } = useSignIn()
  const { register, handleSubmit } = useHookForm<FormData>({ yupSchema })

  const onSubmit = handleSubmit(async ({ email }: FormData) => {
    await sendPasswordResetEmail(email)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Esqueci minha senha</S.Title>

      <Input
        {...register('email')}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
        variant="secondary"
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
        loading={loading}
        onPress={onSubmit as any}
      />
    </KeyboardAvoidingView>
  )
}
