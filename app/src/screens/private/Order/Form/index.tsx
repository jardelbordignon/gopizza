import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Platform } from 'react-native'

import { OrderNavigationProps } from 'src/@types/navigation'
import { Button, ButtonBack, Input, Picture, RadioButton } from 'src/components'
import {
  CreateOrderMutationVariables,
  useCreateOrderMutation,
} from 'src/gql/genApiDocs'
import { useAuth } from 'src/hooks/useAuthentication'
import { YupType, useHookForm } from 'src/hooks/useHookForm'
import { PIZZA_SIZES } from 'src/utils/pizzaSizes'

import * as S from './styles'

type FormData = {
  table: number
  quantity: number
}

type PizzaSizeType = keyof typeof PIZZA_SIZES

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    table: yup.number().required(),
    quantity: yup.number().required(),
  })

export const OrderForm = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined
  const [size, setSize] = useState<PizzaSizeType>()
  const { user } = useAuth()

  const { navigate } = useNavigation()
  const route = useRoute()
  const { product } = route.params as OrderNavigationProps

  const { register, isSubmitting, handleSubmit, watch } = useHookForm<FormData>(
    {
      defaultValues: { quantity: '1' },
      yupSchema,
    }
  )

  const [createOrderMutation] = useCreateOrderMutation()

  const amount = size ? product[`priceSize${size}`] * watch('quantity') : 0.0

  const onCreate = async (vars: CreateOrderMutationVariables) => {
    if (!size) return

    const variables = {
      ...vars,
      userId: user!.id,
      amount,
      image: product.imageDirs ? `${product.imageDirs[0]}s.jpg` : '',
      pizza: product.name,
      status: 'Preparing',
      size,
    }

    createOrderMutation({
      variables,
      onCompleted: () => navigate('home'),
      onError: error => console.log(error),
    })
  }

  const onPress = handleSubmit(onCreate)

  return (
    <S.Wrapper behavior={behavior}>
      <S.Container>
        <S.Header>
          <ButtonBack />
        </S.Header>

        <S.Content>
          <Picture
            uri={product.imageDirs ? `${product.imageDirs[0]}s.jpg` : null}
            size={240}
            rounded
          />

          <S.Title>{product.name}</S.Title>
          <S.Label>Tamanhos</S.Label>

          <S.SizesContainer>
            {Object.entries(PIZZA_SIZES).map(pizzaSize => (
              <RadioButton
                key={pizzaSize[0]}
                title={pizzaSize[1]}
                selected={size === pizzaSize[0]}
                onPress={() => setSize(pizzaSize[0] as PizzaSizeType)}
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

          <S.Price>Total R$ {amount}</S.Price>

          <Button
            title="Confirmar pedido"
            onPress={onPress as any}
            enabled={!isSubmitting}
          />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}
