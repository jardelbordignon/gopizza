import styled, { css } from 'styled-components/native'

type SpacerProps = {
  width?: string
  height?: string
}

export const Spacer = styled.View<SpacerProps>`
  ${({ height, width }) => css`
    height: ${height || '10px'};
    width: ${width || '10px'};
  `}
`
