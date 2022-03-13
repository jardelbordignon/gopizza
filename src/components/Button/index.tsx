import 'react-native-gesture-handler'
import React from 'react'
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler'

import * as S from './styles'

type Props = RectButtonProps & {
  title: string
  variant?: S.VariantType
  isLoading?: boolean
}

export const Button = ({
  title,
  variant = 'primary',
  isLoading = false,
  ...rest
}: Props) => (
  <GestureHandlerRootView>
    <S.Container variant={variant} enabled={!isLoading} {...rest}>
      {isLoading ? <S.Load /> : <S.Title>{title}</S.Title>}
    </S.Container>
  </GestureHandlerRootView>
)
