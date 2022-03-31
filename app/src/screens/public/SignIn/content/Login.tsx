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
  password: string
}

const defaultValues: FormData = {
  email: '',
  password: '',
}

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4),
  })
)

export const Login = () => {
  const { changeContent } = useSignIn()
  const { login, loading } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, defaultValues, mode: 'onBlur' })

  const onSubmit = handleSubmit(async ({ email, password }: FormData) => {
    await login(email, password)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Login</S.Title>

      <Input
        name="email"
        control={control}
        error={errors.email}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
      />

      <Input
        name="password"
        control={control}
        error={errors.password}
        placeholder="Senha"
        secureTextEntry
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
