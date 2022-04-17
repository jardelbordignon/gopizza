import { TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

type VariantType = 'primary' | 'secondary'

export type InputStylesProps = {
  variant?: VariantType
  isFocused?: boolean
  isErrored?: boolean
  isFilled?: boolean
}

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.TITLE};
    border: 1px solid ${theme.COLORS.SHAPE};
  `}
`

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`

export const SearchButton = styled(RectButton)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: 18px;
  margin-left: 7px;
`

export const ErrorMessage = styled.Text<InputStylesProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-style: italic;
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'PRIMARY_800']};
    margin-left: 15px;
  `}
`
