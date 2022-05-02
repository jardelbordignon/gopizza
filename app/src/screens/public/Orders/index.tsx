import React from 'react'
import { FlatList } from 'react-native'

import { OrderCard } from './OrderCard'
import * as S from './styles'

export const Orders = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Pedidos feitos</S.Title>
      </S.Header>

      <FlatList
        data={['1', '2', '3', '4', '5']}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <OrderCard index={index} status="Ready" />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 125, paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <S.ItemSeparator />}
      />
    </S.Wrapper>
  )
}
