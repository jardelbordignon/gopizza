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

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
