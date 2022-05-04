import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Platform } from 'react-native'

import { OrderNavigationProps } from 'src/@types/navigation'
import { Button, ButtonBack, Input, Picture, RadioButton } from 'src/components'
import { YupType, useHookForm } from 'src/hooks/useHookForm'
import { PIZZA_SIZES } from 'src/utils/pizzaSizes'

import * as S from './styles'

type FormData = {
  table: number
  quantity: number
}

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    table: yup.number().required(),
    quantity: yup.number().required(),
  })

export const OrderForm = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined
  const [size, setSize] = useState('')

  const route = useRoute()
  const { product } = route.params as OrderNavigationProps

  const { register } = useHookForm<FormData>({
    defaultValues: product,
    yupSchema,
  })

  return (
    <S.Wrapper behavior={behavior}>
      <S.Container>
        <S.Header>
          <ButtonBack />
        </S.Header>

        <S.Content>
          <Picture
            uri={product.imageDirs ? `${product.imageDirs[0]}/s.jpg` : null}
            size={240}
            rounded
          />

          <S.Title>{product.name}</S.Title>
          <S.Label>Tamanhos</S.Label>

          <S.SizesContainer>
            {PIZZA_SIZES.map(pizzaSize => (
              <RadioButton
                key={pizzaSize.id}
                title={pizzaSize.name}
                selected={size === pizzaSize.id}
                onPress={() => setSize(pizzaSize.id)}
              />
            ))}
          </S.SizesContainer>

          <S.FormRow>
            <S.InputGroup>
              <S.Label>Número da mesa</S.Label>
              <Input {...register('table')} keyboardType="numeric" />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Quantidade</S.Label>
              <Input {...register('quantity')} keyboardType="numeric" />
            </S.InputGroup>
          </S.FormRow>

          <S.Price>Total R$ 0,00</S.Price>

          <Button title="Confirmar pedido" />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
