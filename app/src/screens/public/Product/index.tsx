import { useMutation } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert, Platform, ScrollView, TouchableOpacity } from 'react-native'

import { ProductNavigationProps } from 'src/@types/navigation'
import { Button, ButtonBack, Input, InputPrice, Picture } from 'src/components'
import {
  CustomCreateOneProductMutation,
  CustomCreateOneProductMutationOptions,
  CustomCreateOneProductMutationVariables,
  CustomUpdateOneProductMutation,
  CustomUpdateOneProductMutationOptions,
} from 'src/gql/generated/endpointTypes'
import {
  CUSTOM_CREATE_ONE_PRODUCT_MUTATION,
  CUSTOM_UPDATE_ONE_PRODUCT_MUTATION,
} from 'src/gql/modules/product/mutations'
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

  const { assets, assetsToRNFiles, openCamera, openLibrary } = useImagePicker()

  const route = useRoute()
  const { product } = route.params as ProductNavigationProps

  const { register, isSubmitting, handleSubmit, watch } =
    useHookForm<CustomCreateOneProductMutationVariables>({
      defaultValues: product,
      yupSchema,
    })

  const [customCreateOneProduct] = useMutation<CustomCreateOneProductMutation>(
    CUSTOM_CREATE_ONE_PRODUCT_MUTATION
  )
  const [customUpdateOneProduct] = useMutation<CustomUpdateOneProductMutation>(
    CUSTOM_UPDATE_ONE_PRODUCT_MUTATION
  )

  const onCreate = async (data: CustomCreateOneProductMutationOptions) => {
    try {
      const imageFile = assetsToRNFiles()[0]
      customCreateOneProduct({ variables: { ...data, imageFile } })
    } catch (err) {
      console.log('error creating product:', err)
    }
  }

  const onUpdate = async (data: CustomUpdateOneProductMutationOptions) => {
    try {
      // const imageFile = assetsToRNFiles()[0]
      customUpdateOneProduct({ variables: { ...data } })
    } catch (err) {
      console.log('error updating product:', err)
    }
  }

  const onPress = handleSubmit(product ? onUpdate : onCreate)

  const pictureUri = assets.length
    ? assets[0].path
    : product
    ? product.imageUrl
    : null

  return (
    <S.Wrapper behavior={behavior}>
      <ScrollView>
        <S.Header>
          <ButtonBack onPress={() => Alert.alert('Ok')} />

          <S.Title>{product ? 'Editar' : 'Registrar'}</S.Title>

          <TouchableOpacity>
            <S.DeleteLabel>Deletar</S.DeleteLabel>
          </TouchableOpacity>
        </S.Header>

        <S.Upload>
          <Picture uri={pictureUri} />

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
            <InputPrice Label="P" {...register('priceSizeP')} />
            <InputPrice Label="M" {...register('priceSizeM')} />
            <InputPrice Label="G" {...register('priceSizeG')} />
          </S.InputGroup>

          <Button
            title={product ? 'Salvar alterações na pizza' : 'Cadastrar pizza'}
            onPress={onPress as any}
            loading={isSubmitting}
          />
        </S.Form>
      </ScrollView>
    </S.Wrapper>
  )
}
