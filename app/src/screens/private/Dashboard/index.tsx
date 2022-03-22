import React from 'react'
import { Button } from 'react-native'

import { useAuth } from 'src/hooks/useAuthentication'

import * as S from './styles'

export const Dashboard = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout(user!.id)
  }

  return (
    <S.Wrapper>
      <S.Title>Dashboard {user!.name}</S.Title>
      <Button title="Sair" onPress={handleLogout} />
    </S.Wrapper>
  )
}
