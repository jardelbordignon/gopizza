import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import { useSignIn } from '../SignInContext'
import * as S from '../styles'

import { Button, Input } from 'src/components'
import { useAuth } from 'src/hooks/useAuthentication'
import { YupType, useHookForm } from 'src/hooks/useHookForm'

type FormData = {
  token: string
  password: string
  passwordConfirmation: string
}

const yupSchema = (yup: YupType) =>
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

export const ResetPassword = () => {
  const { changeContent } = useSignIn()
  const { resetPassword, loading } = useAuth()
  const { register, handleSubmit } = useHookForm<FormData>({ yupSchema })

  const onSubmit = handleSubmit(async ({ token, password }: FormData) => {
    await resetPassword(token, password)
  })

  return (
    <KeyboardAvoidingView>
      <S.Title>Cadastrar nova senha</S.Title>

      <Input
        {...register('token')}
        placeholder="Token"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input
        {...register('password')}
        placeholder="Senha"
        variant="secondary"
        secureTextEntry
      />

      <Input
        {...register('passwordConfirmation')}
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
