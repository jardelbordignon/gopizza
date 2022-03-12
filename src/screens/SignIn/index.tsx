import React from 'react'

import { Button, Input } from 'src/components'

import * as S from './styles'

export const SignIn = () => {
  return (
    <S.Container>
      <Input
        placeholder="E-mail"
        variant="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input placeholder="Senha" variant="secondary" secureTextEntry />

      <Button variant="secondary" isLoading={false}>
        Entrar
      </Button>
    </S.Container>
  )
}
