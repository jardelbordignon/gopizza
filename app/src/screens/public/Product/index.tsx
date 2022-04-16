/* eslint-disable react-native/no-inline-styles */
import { useMutation } from '@apollo/client'
import React from 'react'
import { Alert, Platform, ScrollView, TouchableOpacity } from 'react-native'

import { Button, ButtonBack, Input, InputPrice, Picture } from 'src/components'
import {
  CustomCreateOneProductMutation,
  CustomCreateOneProductMutationOptions,
  CustomCreateOneProductMutationVariables,
} from 'src/gql/generated/endpointTypes'
import { CUSTOM_CREATE_ONE_PRODUCT_MUTATION } from 'src/gql/modules/product/mutations'
import { YupType, useHookForm } from 'src/hooks/useHookForm'
import { useImagePicker } from 'src/hooks/useImagePicker'
import { textCounter } from 'src/utils/textCounter'

import * as S from './styles'

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    priceSizeP: yup.number().required(),
    priceSizeM: yup.number().required(),
    priceSizeG: yup.number().required(),
    // imageFile: yup.mixed().required(),
    // .test('fileFormat', 'Image only', value => {
    //   return value && ['image/*'].includes(value.type)
    // }),
  })

export const Product = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined
  const { assets, openCamera, openLibrary, assetsToRNFiles } = useImagePicker()
  const { register, isSubmitting, handleSubmit, watch } =
    useHookForm<CustomCreateOneProductMutationVariables>({ yupSchema })

  const [customCreateOneProduct] = useMutation<CustomCreateOneProductMutation>(
    CUSTOM_CREATE_ONE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        console.log('Produto cadastrado')
      },
      onError: (err: Error) => {
        Alert.alert('Cadastro de Produto', `${err.message}`)
      },
    }
  )

  const onSubmit = async (data: CustomCreateOneProductMutationOptions) => {
    try {
      const imageFile = assetsToRNFiles()[0]
      customCreateOneProduct({ variables: { ...data, imageFile, a: 'b' } })
    } catch (err) {
      console.log('error creating product:', err)
    }
  }

  const onPress = handleSubmit<FormData>(onSubmit)

  return (
    <S.Wrapper behavior={behavior}>
      <ScrollView>
        <S.Header>
          <ButtonBack onPress={() => Alert.alert('Ok')} />

          <S.Title>Cadastrar</S.Title>

          <TouchableOpacity>
            <S.DeleteLabel>Deletar</S.DeleteLabel>
          </TouchableOpacity>
        </S.Header>

        <S.Upload>
          <Picture uri={assets.length ? assets[0].path : null} />

          <Button
            onPress={openCamera}
            icon="camera"
            title="Câmera"
            variant="secondary"
            flexDir="column"
          />

          <Button
            onPress={openLibrary}
            icon="image-multiple"
            title="Galeria"
            variant="secondary"
            flexDir="column"
          />
        </S.Upload>

        <S.Form>
          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <Input {...register('name')} />
          </S.InputGroup>

          <S.InputGroup>
            <S.InputGroupHeader>
              <S.Label>Descrição</S.Label>
              <S.MaxCharacters>
                {textCounter(watch('description'), 150)}
              </S.MaxCharacters>
            </S.InputGroupHeader>
            <Input
              {...register('description')}
              multiline
              maxLength={150}
              style={{ height: 60 }}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Tamanhos e preços</S.Label>
            <InputPrice size="P" {...register('priceSizeP')} />
            <InputPrice size="M" {...register('priceSizeM')} />
            <InputPrice size="G" {...register('priceSizeG')} />
          </S.InputGroup>

          <Button
            title="Cadastrar pizza"
            onPress={onPress as any}
            loading={isSubmitting}
          />
        </S.Form>
      </ScrollView>
    </S.Wrapper>
  )
}
