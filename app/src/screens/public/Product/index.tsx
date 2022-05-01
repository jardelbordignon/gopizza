import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import {
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler'

import { ProductNavigationProps } from 'src/@types/navigation'
import { Button, ButtonBack, Input, InputPrice, Picture } from 'src/components'
import { Flex } from 'src/components/Flex'
import {
  CreateProductMutationVariables,
  UpdateProductMutationVariables,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from 'src/gql/genApiDocs'
import { YupType, useHookForm } from 'src/hooks/useHookForm'
import { useImagePicker } from 'src/hooks/useImagePicker'
import { textCounter } from 'src/utils/textCounter'

import * as S from './styles'

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    description: yup.string().required(),
    name: yup.string().required(),
    priceSizeL: yup.number().required(),
    priceSizeM: yup.number().required(),
    priceSizeS: yup.number().required(),
    // imageFile: yup.mixed().required(),
    // .test('fileFormat', 'Image only', value => {
    //   return value && ['image/*'].includes(value.type)
    // }),
  })

export const Product = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined

  const { openCamera, openLibrary, files, deleteFile } = useImagePicker()

  const { navigate, goBack } = useNavigation()
  const route = useRoute()
  const params = route.params as ProductNavigationProps
  const product = params ? params.product : null

  const dirs = product && product.imageDirs ? product.imageDirs : []
  const [imageDirs, setImageDirs] = useState(dirs)

  const { register, isSubmitting, handleSubmit, watch } =
    useHookForm<CreateProductMutationVariables>({
      defaultValues: product,
      yupSchema,
    })

  const [createProductMutation] = useCreateProductMutation()
  const [updateProductMutation] = useUpdateProductMutation()
  const [deleteProductMutation] = useDeleteProductMutation()

  const onCreate = async (vars: CreateProductMutationVariables) => {
    createProductMutation({
      variables: { ...vars, imageFiles: files },
      onCompleted: () => navigate('home'),
      onError: error => console.log(error),
    })
  }

  const onUpdate = async (vars: UpdateProductMutationVariables) => {
    updateProductMutation({
      variables: { ...vars, imageFiles: files, id: product!.id },
      onCompleted: () => navigate('home'),
      onError: error => console.log(error),
    })
  }

  const onDelete = async (id: string, isSoft?: boolean) => {
    deleteProductMutation({
      variables: { id, isSoft },
      onCompleted: () => navigate('home'),
      onError: error => console.log(error),
    })
  }

  const onPress = handleSubmit(product ? onUpdate : onCreate)

  return (
    <S.Wrapper behavior={behavior}>
      <ScrollView>
        <S.Header>
          <ButtonBack onPress={goBack} />

          <S.Title>{product ? 'Editar' : 'Registrar'}</S.Title>

          {product ? (
            <TouchableOpacity onPress={() => onDelete(product.id)}>
              <S.DeleteLabel>Deletar</S.DeleteLabel>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 20 }} />
          )}
        </S.Header>

        <Flex py={10} px={20}>
          <Flex dir="row">
            {files ? (
              files.map((file, idx) => (
                <GestureHandlerRootView key={idx}>
                  <RectButton onPress={() => deleteFile(file)}>
                    <Picture uri={file.uri} />
                  </RectButton>
                </GestureHandlerRootView>
              ))
            ) : (
              <Picture uri={''} />
            )}
          </Flex>
          <Flex dir="row">
            {imageDirs ? (
              imageDirs.map((imageDir, idx) => (
                <GestureHandlerRootView key={idx}>
                  <RectButton
                    onPress={() =>
                      setImageDirs(imageDirs.filter(dir => dir !== imageDir))
                    }>
                    <Picture uri={`${imageDir}/s.jpg`} />
                  </RectButton>
                </GestureHandlerRootView>
              ))
            ) : (
              <Picture uri={''} />
            )}
          </Flex>
          <Flex dir="row" justify="space-evenly">
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
          </Flex>
        </Flex>

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
            <InputPrice Label="P" {...register('priceSizeS')} />
            <InputPrice Label="M" {...register('priceSizeM')} />
            <InputPrice Label="G" {...register('priceSizeL')} />
          </S.InputGroup>

          <S.SubmitButton
            title={product ? 'Salvar alterações na pizza' : 'Cadastrar pizza'}
            onPress={onPress as any}
            loading={isSubmitting}
          />
        </S.Form>
      </ScrollView>
    </S.Wrapper>
  )
}
