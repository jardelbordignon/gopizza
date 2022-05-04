import { useNavigation } from '@react-navigation/native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import { Wrapper } from './styles'

export const ButtonBack = ({ ...rest }) => {
  const { goBack } = useNavigation()
  const { COLORS } = useTheme()

  return (
    <Wrapper onPress={rest.onPress || goBack} {...rest}>
      <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
    </Wrapper>
  )
}
