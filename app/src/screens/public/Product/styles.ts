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

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
`

export const DeleteLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
  `}
`
