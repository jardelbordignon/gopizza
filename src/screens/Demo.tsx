import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`

export const Demo = () => (
  <StyledView>
    <Text>Styled View</Text>
  </StyledView>
)
