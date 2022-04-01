import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'
import { YupType, useHookForm } from 'src/hooks/useHookForm'

type FormData = {
  email: string
  password: string
}

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4),
  })

export const Login = () => {
  const { changeContent } = useSignIn()
  const { login, loading } = useAuth()
  const { register, handleSubmit } = useHookForm<FormData>({ yupSchema })

  const onSubmit = handleSubmit(async ({ email, password }: FormData) => {
    await login(email, password)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Login</S.Title>

      <Input
        {...register('email')}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
        variant="secondary"
      />

      <Input
        {...register('password')}
        placeholder="Senha"
        secureTextEntry
        variant="secondary"
      />
      <S.AuxiliaryButton onPress={() => changeContent('ForgotPassword')}>
        <S.AuxiliaryButtonLabel>Esqueci minha senha</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <Button
        title="Entrar"
        variant="secondary"
        icon="login-variant"
        loading={loading}
        onPress={onSubmit as any}
      />
    </KeyboardAvoidingView>
  )
}
