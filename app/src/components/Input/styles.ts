import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'

type InputProps = {
  variant?: VariantType
  isFocused?: boolean
  isErrored?: boolean
  isFilled?: boolean
}

export const Wrapper = styled.View<InputProps>`
  margin-bottom: 16px;
`

export const StyledTextInput = styled(TextInput).attrs<InputProps>(
  ({ theme, variant }) => ({
    placeholderTextColor:
      theme.COLORS[variant === 'secondary' ? 'TITLE' : 'SECONDARY_900'],
  })
)<InputProps>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0 7px 20px;

  ${({ theme, variant, isErrored }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS[isErrored ? 'PRIMARY_800' : 'SHAPE']};
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'SECONDARY_900']};
  `}
`

export const ErrorMessage = styled.Text<InputProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-style: italic;
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'PRIMARY_800']};
    margin-left: 15px;
  `}
`
