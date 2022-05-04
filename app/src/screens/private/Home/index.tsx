import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import happyEmoji from 'src/assets/happy.png'
import { Button, InputSearch, Progress } from 'src/components'
import { Product, useProductsLazyQuery } from 'src/gql/genApiDocs'
import { useAuth } from 'src/hooks/useAuthentication'

import { ProductCard } from './ProductCard'
import * as S from './styles'

export const Home = () => {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()
  const { user, logout, loading: authLoading } = useAuth()
  const isAdmin = user && user.isAdmin

  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const limit = 10

  const [productsQuery, { data, loading: dataLoading }] = useProductsLazyQuery()
  const loadingProducts = !data || dataLoading

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

  const handleNavigate = (product?: Product) => {
    const route = isAdmin ? 'product' : 'order'
    navigate(route, { product })
  }

  const flatListContentStyle = {
    paddingTop: 20,
    paddingBottom: 120,
  }

  const ButtonNewProduct = () =>
    isAdmin ? (
      <Button
        title="Cadastrar um produto"
        onPress={() => handleNavigate()}
        enabled={!loadingProducts}
      />
    ) : null

  return (
    <S.Wrapper>
      <S.Header>
        <S.Greeting>
          <S.GreetingEmoji source={happyEmoji} />
          <S.GreetingText>Olá, Admin</S.GreetingText>
        </S.Greeting>

        <TouchableOpacity onPress={logout} disabled={authLoading}>
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
        {!products.length || !data ? (
          loadingProducts ? (
            <Progress />
          ) : (
            <>
              <S.Title>Nenhum produto encontrado</S.Title>
              <ButtonNewProduct />
            </>
          )
        ) : (
          <>
            <S.MenuHeader>
              <ButtonNewProduct />
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
                  onPress={() => handleNavigate(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              onEndReached={onEndReached}
              ListFooterComponent={loadingProducts ? <Progress /> : null}
              contentContainerStyle={flatListContentStyle}
            />
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
