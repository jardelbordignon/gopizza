import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
})`
  flex: 1;
  margin-bottom: -100px;
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + 32}px 24px 0;
  height: 200px;
`

export const Content = styled.View`
  width: 100%;
  align-items: center;
  top: -120px;
  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: 32px;
  margin: 32px 0;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const SizesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const FormRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const InputGroup = styled.View`
  width: 48%;
`

export const Price = styled.Text`
  font-size: 14px;
  margin: 24px 0;
  align-self: flex-end;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
