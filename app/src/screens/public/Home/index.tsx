import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import happyEmoji from 'src/assets/happy.png'
import { Button, InputSearch, Progress } from 'src/components'
import { Product, useProductsLazyQuery } from 'src/gql/genApiDocs'

import { ProductCard } from './ProductCard'
import * as S from './styles'

export const Home = () => {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const limit = 10

  const [productsQuery, { data, loading }] = useProductsLazyQuery()
  const isLoading = loading || !data
  const hasNoData = !products.length || !data

  const loadProducts = async (currentPage = 0, filter = '%%') => {
    setPage(currentPage)

    const offset = currentPage * limit
    const res = await productsQuery({ variables: { limit, offset, filter } })

    if (res.data) {
      const { nodes } = res.data.products
      setProducts(currentPage === 0 ? nodes : [...products, ...nodes])
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadProducts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  )

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

  const navToProduct = (product?: Product) => {
    navigate('product', { product })
  }

  const flatListContentStyle = {
    paddingTop: 20,
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

      <S.Content>
        {hasNoData ? (
          isLoading ? (
            <Progress />
          ) : (
            <>
              <S.Title>Nenhum produto encontrado</S.Title>
              <Button
                title="Cadastrar um produto"
                onPress={() => navToProduct()}
              />
            </>
          )
        ) : (
          <>
            <S.MenuHeader>
              <Button icon="plus" onPress={() => navToProduct()} />
              <S.Title>Cardápio</S.Title>
              <S.MenuItemsNumber>
                {data.products.totalCount} pizzas
              </S.MenuItemsNumber>
            </S.MenuHeader>

            <FlatList
              data={products}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ProductCard
                  product={item}
                  onPress={() => navToProduct(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              onEndReached={onEndReached}
              ListFooterComponent={isLoading ? <Progress /> : null}
              contentContainerStyle={flatListContentStyle}
            />
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
