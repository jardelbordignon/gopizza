import React from 'react'
import { Platform } from 'react-native'

import { ButtonBack, Picture } from 'src/components'

import * as S from './styles'

export const Order = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  return (
    <S.Wrapper behavior={behavior}>
      <S.Header>
        <ButtonBack onPress={() => {}} />
      </S.Header>

      <S.ImageContainer>
        <Picture
          uri={'https://github.com/jardelbordignon.png'}
          size={240}
          rounded
        />
      </S.ImageContainer>
    </S.Wrapper>
  )
}
