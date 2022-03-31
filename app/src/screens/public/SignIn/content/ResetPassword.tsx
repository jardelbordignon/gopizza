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
  token: string
  password: string
  passwordConfirmation: string
}

const defaultValues: FormData = {
  token: '',
  password: '',
  passwordConfirmation: '',
}

const resolver = yupResolver(
  yup.object().shape({
    token: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um caracter especial.'
      ),
    passwordConfirmation: yup
      .string()
      .min(8)
      .required()
      .when('password', {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], 'Senha e confirmação diferentes'),
      }),
  })
)

export const ResetPassword = () => {
  const { changeContent } = useSignIn()
  const { resetPassword, loading } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, defaultValues, mode: 'onBlur' })

  const onSubmit = handleSubmit(async ({ token, password }: FormData) => {
    await resetPassword(token, password)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Cadastrar nova senha</S.Title>

      <Input
        name="token"
        control={control}
        error={errors.token}
        placeholder="Token"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input
        name="password"
        control={control}
        error={errors.password}
        placeholder="Senha"
        variant="secondary"
        secureTextEntry
      />

      <Input
        name="passwordConfirmation"
        control={control}
        error={errors.passwordConfirmation}
        placeholder="Confirmação da senha"
        variant="secondary"
        secureTextEntry
      />

      <S.AuxiliaryButton onPress={() => changeContent('Login')}>
        <S.AuxiliaryButtonLabel>Voltar para Login</S.AuxiliaryButtonLabel>
      </S.AuxiliaryButton>

      <Button
        title="Alterar senha"
        variant="secondary"
        loading={loading}
        onPress={onSubmit as any}
      />
    </KeyboardAvoidingView>
  )
}
