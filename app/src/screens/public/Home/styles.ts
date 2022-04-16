import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`

export const GreetingEmoji = styled.Image`
  height: 32px;
  width: 32px;
  margin-right: 12px;
`

export const GreetingText = styled.Text`
  font-size: 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
`
