import React from 'react'
import { ActivityIndicator } from 'react-native'

import theme from 'src/theme'

import { Wrapper } from './styles'

export const Progress = () => (
  <Wrapper>
    <ActivityIndicator size="large" color={theme.COLORS.SHAPE} />
  </Wrapper>
)
