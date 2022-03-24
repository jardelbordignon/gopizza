import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'

type ButtonProps = {
  variant: VariantType
}

export const Container = styled(RectButton)<ButtonProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: ${({ theme, variant }) =>
    theme.COLORS[variant === 'primary' ? 'SUCCESS_900' : 'PRIMARY_800']};
`
export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``
