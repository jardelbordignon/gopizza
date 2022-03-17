import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'

type InputProps = {
  variant?: VariantType
}

export const StyledTextInput = styled(TextInput).attrs<InputProps>(
  ({ theme, variant }) => ({
    placeholderTextColor:
      theme.COLORS[variant === 'primary' ? 'SECONDARY_900' : 'PRIMARY_50'],
  })
)<InputProps>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0 7px 20px;
  margin-bottom: 16px;

  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${theme.COLORS[variant === 'primary' ? 'SECONDARY_900' : 'TITLE']};
  `}
`
