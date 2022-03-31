import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView } from 'react-native'
import * as yup from 'yup'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'

type FormData = {
  email: string
}

const defaultValues: FormData = {
  email: '',
}

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().required().email(),
  })
)

export const ForgotPassword = () => {
  const { sendPasswordResetEmail, loading } = useAuth()
  const { changeContent } = useSignIn()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, defaultValues, mode: 'onBlur' })

  const onSendPasswordResetEmail = handleSubmit(async ({ email }: FormData) => {
    await sendPasswordResetEmail(email)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Esqueci minha senha</S.Title>

      <Input
        name="email"
        control={control}
        error={errors.email}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
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
        onPress={onSendPasswordResetEmail as any}
      />
    </KeyboardAvoidingView>
  )
}
