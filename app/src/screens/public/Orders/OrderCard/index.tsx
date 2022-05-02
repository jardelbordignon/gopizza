import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Picture, Txt } from 'src/components'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  index: number
  status: S.StatusTypesProps
}

export const OrderCard = ({ index, status, ...rest }: Props) => {
  return (
    <S.Touchable index={index} {...rest}>
      <Picture
        uri={'https://github.com/jardelbordignon.png'}
        size={104}
        rounded
      />

      <Txt color="SECONDARY_900" size={20} mt={8}>
        Pizza Dog
      </Txt>
      <Txt color="SECONDARY_400" size={14}>
        Mesa 5 - Qtd: 1
      </Txt>

      <S.StatusContainer status={status}>
        <Txt>{status}</Txt>
      </S.StatusContainer>
    </S.Touchable>
  )
}
