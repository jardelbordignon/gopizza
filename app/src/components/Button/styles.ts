import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export type VariantType = 'primary' | 'secondary'
export type FlexDirType = 'row' | 'column'

type ButtonProps = {
  variant: VariantType
  flexDir?: FlexDirType
  icon?: string
}

export const Container = styled(RectButton)<ButtonProps>`
  flex: 1;
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  justify-content: ${({ flexDir, icon }) =>
    flexDir === 'column' || !icon ? 'center' : 'space-between'};
  align-items: center;
  width: 100%;
  max-width: 100%;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
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

export const Space = styled.View`
  width: 20px;
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``
