import styled, { css } from 'styled-components/native'

export type PictureStyleProps = {
  size?: number
  rounded?: boolean
}

export const Image = styled.Image<PictureStyleProps>`
  ${({ size, rounded }) => css`
    width: ${size || 100}px;
    height: ${size || 100}px;
    border-radius: ${rounded ? size || 100 : 10}px;
  `}
`
export const PlaceholderWrapper = styled.View<PictureStyleProps>`
  justify-content: center;
  align-items: center;

  ${({ theme, size, rounded }) => css`
    width: ${size || 100}px;
    height: ${size || 100}px;
    border-radius: ${rounded ? size || 100 : 10}px;
    border: 1px dashed ${theme.COLORS.ALERT_900};
  `}
`

export const Placeholder = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`
