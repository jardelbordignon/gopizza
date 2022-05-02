import React, { useState } from 'react'
import { Platform } from 'react-native'

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

export const Order = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined
  const [size, setSize] = useState('')

  const { register } = useHookForm<FormData>({
    yupSchema,
  })

  return (
    <S.Wrapper behavior={behavior}>
      <S.Container>
        <S.Header>
          <ButtonBack onPress={() => {}} />
        </S.Header>

        <S.Content>
          <Picture
            uri={'https://github.com/jardelbordignon.png'}
            size={240}
            rounded
          />

          <S.Title>Nome da Pizza</S.Title>
          <S.Label>Selecione um tamanho</S.Label>

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
