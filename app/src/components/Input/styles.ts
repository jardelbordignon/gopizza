import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'

type InputProps = {
  variant?: VariantType
}

export const Wrapper = styled.View`
  margin-bottom: 16px;
`

export const StyledTextInput = styled(TextInput).attrs<InputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.COLORS.PRIMARY_50,
  })
)<InputProps>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0 7px 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${theme.COLORS.TITLE};
  `}
`

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-style: italic;
    color: ${theme.COLORS.TITLE};
    margin-left: 15px;
  `}
`
