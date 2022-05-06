import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import { Progress } from 'src/components'
import { Order, useOrdersLazyQuery } from 'src/gql/genApiDocs'

import { OrderCard } from './OrderCard'
import * as S from './styles'

export const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [search] = useState('')
  const [page, setPage] = useState(0)
  const limit = 10

  const [ordersQuery, { data, loading: dataLoading }] = useOrdersLazyQuery()
  const loadingOrders = !data || dataLoading

  const loadOrders = async (currentPage = 0, filter = '%%') => {
    setPage(currentPage)

    const offset = currentPage * limit
    const res = await ordersQuery({ variables: { limit, offset, filter } })

    if (res.data) {
      const { nodes } = res.data.orders
      setOrders(currentPage === 0 ? nodes : [...orders, ...nodes])
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadOrders()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  )

  const onEndReached = () => {
    if (data && data.orders.pageInfo.hasNextPage) {
      loadOrders(page + 1, `%${search}%`)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Pedidos feitos</S.Title>
      </S.Header>

      {!orders.length || !data ? (
        loadingOrders ? (
          <Progress />
        ) : (
          <>
            <S.Title>Nenhum produto encontrado</S.Title>
          </>
        )
      ) : (
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <OrderCard order={item} index={index} />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 125, paddingHorizontal: 24 }}
          ItemSeparatorComponent={() => <S.ItemSeparator />}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          ListFooterComponent={loadingOrders ? <Progress /> : null}
        />
      )}
    </S.Wrapper>
  )
}
