import React from 'react'
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

type Props = RectButtonProps & {
  icon?: string
  title?: string
  variant?: S.VariantType
  flexDir?: S.FlexDirType
  loading?: boolean
}

export const Button = ({
  icon,
  title,
  variant = 'primary',
  loading = false,
  ...rest
}: Props) => {
  const { COLORS } = useTheme()

  return (
    <GestureHandlerRootView>
      <S.Container variant={variant} enabled={!loading} {...rest}>
        {title ? (
          <>
            {icon && <Icons name={icon} size={22} color={COLORS.TITLE} />}
            {<S.Title>{title}</S.Title>}
            {loading ? <S.Load /> : icon ? <S.Space /> : null}
          </>
        ) : loading ? (
          <S.Load />
        ) : icon ? (
          <Icons name={icon} size={22} color={COLORS.TITLE} />
        ) : null}
      </S.Container>
    </GestureHandlerRootView>
  )
}
