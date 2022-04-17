import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type VariantType = 'primary' | 'secondary'

export type InputStylesProps = {
  variant?: VariantType
  isFocused?: boolean
  isErrored?: boolean
  isFilled?: boolean
  width?: string
  height?: string
}

export const Wrapper = styled.View<InputStylesProps>`
  margin-bottom: 16px;
`

export const StyledTextInput = styled(TextInput).attrs<InputStylesProps>(
  ({ theme, variant }) => ({
    placeholderTextColor:
      theme.COLORS[variant === 'secondary' ? 'TITLE' : 'SECONDARY_900'],
  })
)<InputStylesProps>`
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0 7px 20px;

  ${({ theme, variant, isErrored, width, height }) => css`
    width: ${width || '100%'};
    height: ${height || '56px'};
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid
      ${theme.COLORS[
        isErrored
          ? variant === 'secondary'
            ? 'PRIMARY_50'
            : 'PRIMARY_800'
          : 'SHAPE'
      ]};
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'SECONDARY_900']};
  `}
`

export const ErrorMessage = styled.Text<InputStylesProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-style: italic;
    color: ${theme.COLORS[variant === 'secondary' ? 'TITLE' : 'PRIMARY_800']};
    margin-left: 15px;
  `}
`
