import styled, { css } from 'styled-components/native'

type PictureProps = {
  size?: string
}

export const Image = styled.Image<PictureProps>`
  ${({ size }) => css`
    width: ${size || '160px'};
    height: ${size || '160px'};
    border-radius: ${size || '160px'};
  `}
`
export const PlaceholderWrapper = styled.View<PictureProps>`
  justify-content: center;
  align-items: center;

  ${({ theme, size }) => css`
    width: ${size || '160px'};
    height: ${size || '160px'};
    border-radius: ${size || '160px'};
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
