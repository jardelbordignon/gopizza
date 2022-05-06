import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Picture, Txt } from 'src/components'
import { Order } from 'src/gql/genApiDocs'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  index: number
  order: Order
}

export const OrderCard = ({ index, order, ...rest }: Props) => {
  return (
    <S.Touchable index={index} {...rest}>
      <Picture uri={order.image} size={104} rounded />

      <Txt color="SECONDARY_900" size={20} mt={8}>
        Pizza Dog
      </Txt>
      <Txt color="SECONDARY_400" size={14}>
        Mesa 5 - Qtd: 1
      </Txt>

      <S.StatusContainer status={order.status as S.StatusTypesProps}>
        <Txt>{order.status}</Txt>
      </S.StatusContainer>
    </S.Touchable>
  )
}
