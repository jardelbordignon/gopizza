import styled, { css } from 'styled-components/native'

type WrapperProps = {
  index: number
}

export type StatusTypesProps = 'Preparing' | 'Ready' | 'Delivered'

type StatusProps = {
  status: StatusTypesProps
}

export const Touchable = styled.TouchableOpacity<WrapperProps>`
  width: 50%;
  align-items: center;
  padding: 16px 0;

  ${({ theme, index }) => css`
    border-right-width: ${index % 2 > 0 ? 0 : 1}px;
    border-right-color: ${theme.COLORS.SHAPE};
  `}
`

export const StatusContainer = styled.View<StatusProps>`
  padding: 4px 16px;
  border-radius: 12px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;

  background-color: ${({ status, theme }) =>
    theme.COLORS[
      status === 'Ready'
        ? 'SUCCESS_900'
        : status === 'Delivered'
        ? 'SECONDARY_900'
        : 'ALERT_900'
    ]};
`

export const StatusLabel = styled.Text<StatusProps>`
  font-size: 12px;
  line-height: 20px;

  ${({ status, theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS[status === 'Preparing' ? 'ALERT_900' : 'TITLE']};
  `}
`
