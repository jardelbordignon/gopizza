import { useLazyQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import happyEmoji from 'src/assets/happy.png'
import { InputSearch, ProductCard, Progress } from 'src/components'
import { Product } from 'src/gql/generated/endpointTypes'
import { PRODUCTS_QUERY } from 'src/gql/modules/product/queries'

import * as S from './styles'

type QueryResponse = {
  products: {
    nodes: Product[]
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    totalCount: number
  }
}

export const Home = () => {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  const [products, setProducts] = useState<Product[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const limit = 10

  const [productsQuery, { data, loading }] =
    useLazyQuery<QueryResponse>(PRODUCTS_QUERY)

  const loadProducts = async (currentPage = 0, filter = '%%') => {
    setPage(currentPage)

    const offset = currentPage * limit
    const res = await productsQuery({ variables: { limit, offset, filter } })

    if (res.data) {
      setTotalCount(res.data.products.totalCount)
      setProducts(
        currentPage === 0
          ? res.data.products.nodes
          : [...products, ...res.data.products.nodes]
      )
    }
  }

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSearch = () => {
    if (search.length) loadProducts(0, `%${search}%`)
  }

  const onClear = () => {
    if (search.length) {
      setSearch('')
      loadProducts(0)
    }
  }

  const onEndReached = () => {
    if (data && data.products.pageInfo.hasNextPage) {
      loadProducts(page + 1, `%${search}%`)
    }
  }

  const handleOpen = (product: Product) => {
    navigate('product', { product })
  }

  const flatListContentStyle = {
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 120,
  }

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
        value={search}
        onChangeText={setSearch}
        onSearch={onSearch}
        onClear={onClear}
      />

      {!products.length ? (
        loading ? (
          <Progress />
        ) : (
          <S.Title>Nenhum produto encontrado</S.Title>
        )
      ) : (
        <>
          <S.MenuHeader>
            <S.Title>Cardápio</S.Title>
            <S.MenuItemsNumber>{totalCount} pizzas</S.MenuItemsNumber>
          </S.MenuHeader>

          <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={() => handleOpen(item)} />
            )}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
            ListFooterComponent={loading ? <Progress /> : null}
            contentContainerStyle={flatListContentStyle}
          />
        </>
      )}
    </S.Wrapper>
  )
}
