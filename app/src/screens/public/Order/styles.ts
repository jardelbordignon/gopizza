import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + 34}px 24px 0;
  height: 200px;
`

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  top: -120px;
`

export const SizesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 24px;
`
