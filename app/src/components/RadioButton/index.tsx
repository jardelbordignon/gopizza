import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type RadioButtonProps = S.RadioButtonStyleProps &
  TouchableOpacityProps & {
    title: string
  }

export const RadioButton = ({
  title,
  selected = false,
  ...rest
}: RadioButtonProps) => (
  <S.Wrapper selected={selected} {...rest}>
    <S.Radio>{selected && <S.Selected />}</S.Radio>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)
