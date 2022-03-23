import styled, { css } from 'styled-components/native'

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`

export const PlaceholderWrapper = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  border: 1px dashed ${({ theme }) => theme.COLORS.ALERT_900};
`

export const Placeholder = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`
