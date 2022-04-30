import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'
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

  padding: ${getStatusBarHeight() + 33}px 20px 56px;
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

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`

export const Content = styled.View`
  padding: 30px 26px ${getBottomSpace() + 100}px;
`

export const MenuItemsNumber = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Title = styled.Text`
  font-size: 20px;
  line-height: 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
