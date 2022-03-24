import React from 'react'
import { Alert, Platform, TouchableOpacity } from 'react-native'

import { ButtonBack, Picture } from 'src/components'

import * as S from './styles'

export const Product = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <S.Wrapper behavior={behavior}>
      <S.Header>
        <ButtonBack onPress={() => Alert.alert('Ok')} />

        <S.Title>Cadastrar</S.Title>

        <TouchableOpacity>
          <S.DeleteLabel>Deletar</S.DeleteLabel>
        </TouchableOpacity>
      </S.Header>

      <S.Upload>
        <Picture uri="" />
        <S.PickImageButton title="Carregar" variant="secondary" />
      </S.Upload>
    </S.Wrapper>
  )
}
