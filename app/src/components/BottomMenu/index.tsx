import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  color: string
  notifications?: string
}

export const BottomMenu = ({ title, color, notifications }: Props) => {
  const hasNotifications = !!notifications && notifications !== '0'

  return (
    <S.Wrapper>
      <S.Title color={color}>{title}</S.Title>

      {notifications && (
        <S.Notification hasNotifications={hasNotifications}>
          <S.Quantity hasNotifications={hasNotifications}>
            {notifications}
          </S.Quantity>
        </S.Notification>
      )}
    </S.Wrapper>
  )
}
