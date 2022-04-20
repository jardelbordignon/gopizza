import React from 'react'
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import { Picture } from '../Picture'

import { Box } from 'src/styles/CommonStyles'

import * as S from './styles'

export type ProductProps = {
  id: string
  imageUrl?: string | null
  name: string
  description: string
}

type Props = RectButtonProps & {
  product: ProductProps
}

export const ProductCard = ({ product, ...rest }: Props) => {
  const { COLORS } = useTheme()

  return (
    <S.Wrapper>
      <GestureHandlerRootView>
        <S.Content {...rest}>
          <Picture uri={product.imageUrl} size="104px" />

          <S.Details>
            <Box>
              <S.Name>{product.name}</S.Name>
              <Icons name="chevron-right" size={18} color={COLORS.SHAPE} />
            </Box>

            <S.Description>{product.description}</S.Description>
          </S.Details>
        </S.Content>

        <S.Line />
      </GestureHandlerRootView>
    </S.Wrapper>
  )
}
