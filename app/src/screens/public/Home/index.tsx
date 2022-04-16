import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import happyEmoji from 'src/assets/happy.png'

import * as S from './styles'

export const Home = () => {
  const { COLORS } = useTheme()

  return (
    <S.Wrapper>
      <S.Header>
        <S.Greeting>
          <S.GreetingEmoji source={happyEmoji} />
          <S.GreetingText>Olá, Admin</S.GreetingText>
        </S.Greeting>

        <TouchableOpacity>
          <Icons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>
      </S.Header>
    </S.Wrapper>
  )
}
