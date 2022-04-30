import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import { Wrapper } from './styles'

interface IButtonBack {
  onPress(): void
}

export const ButtonBack = ({ ...rest }: IButtonBack) => {
  const { COLORS } = useTheme()

  return (
    <Wrapper {...rest}>
      <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
    </Wrapper>
  )
}
