import React from 'react'

import { Input } from 'src/components'

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
    </S.Container>
  )
}
