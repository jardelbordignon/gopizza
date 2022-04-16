import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'

type InputProps = {
  variant?: VariantType
  isFocused?: boolean
  isErrored?: boolean
  isFilled?: boolean
}

export const Wrapper = styled.View`
  margin-bottom: 16px;
`

export const InputGroup = styled.View<InputProps>`
  width: 100%;
  height: 56px;
  border: 1px solid
    ${({ theme, isErrored, variant }) =>
      theme.COLORS[
        isErrored
          ? variant === 'secondary'
            ? 'PRIMARY_50'
            : 'PRIMARY_800'
          : 'SHAPE'
      ]};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`

export const Size = styled.View`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-right: 18px;
`

export const Label = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`

export const ErrorMessage = styled.Text<InputProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-style: italic;
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'PRIMARY_800']};
    margin-left: 15px;
  `}
`
