import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type ButtonProps = RectButtonProps & {
  children: string
  variant?: S.VariantType
  isLoading?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  ...rest
}: ButtonProps) => (
  <S.Container variant={variant} enabled={!isLoading} {...rest}>
    {isLoading ? <S.Load /> : <S.Title>{children}</S.Title>}
  </S.Container>
)
