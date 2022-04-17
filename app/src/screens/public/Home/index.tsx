import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import happyEmoji from 'src/assets/happy.png'
import { InputSearch, ProductCard } from 'src/components'

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

      <InputSearch
        placeholder="Pesquisar"
        onSearch={() => {}}
        onClear={() => {}}
      />

      <S.MenuHeader>
        <S.Title>Cardápio</S.Title>
        <S.MenuItemsNumber>123 pizzas</S.MenuItemsNumber>
      </S.MenuHeader>

      <ProductCard
        product={{
          id: 'abc',
          name: 'Pizza de Batata',
          description: 'Uma descrição',
          imageUrl: 'https://github.com/jardelbordignon.png',
        }}
      />
    </S.Wrapper>
  )
}
