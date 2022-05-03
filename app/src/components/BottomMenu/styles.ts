import styled, { css } from 'styled-components/native'

type TitleStyleProps = {
  color: string
}

type NotificationStyleProps = {
  hasNotifications: boolean
}

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Title = styled.Text<TitleStyleProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${color};
  `}
`

export const Notification = styled.View<NotificationStyleProps>`
  height: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 8px;

  ${({ hasNotifications, theme }) =>
    hasNotifications
      ? css`
          background-color: ${theme.COLORS.SUCCESS_900};
        `
      : css`
          background-color: transparent;
          border: 1px solid ${theme.COLORS.SHAPE};
        `}
  }
`

export const Quantity = styled.Text<NotificationStyleProps>`
  font-size: 12px;

  ${({ hasNotifications, theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS[hasNotifications ? 'TITLE' : 'SECONDARY_500']};
  `}
`
