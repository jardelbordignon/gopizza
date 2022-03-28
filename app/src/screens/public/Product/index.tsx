/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Alert, Platform, ScrollView, TouchableOpacity } from 'react-native'

import { Button, ButtonBack, Input, InputPrice, Picture } from 'src/components'
import { useImageCropPicker } from 'src/hooks/useImageCropPicker'
import * as CS from 'src/styles/CommonStyles'

import * as S from './styles'

export const Product = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined
  const { media, openCamera, openPicker } = useImageCropPicker()

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
          <Picture uri={media ? media.path : null} />

          <CS.Spacer width="30px" />
          <Button
            onPress={openCamera}
            icon="camera"
            title="Câmera"
            variant="secondary"
            flexDir="column"
          />

          <CS.Spacer width="5px" />
          <Button
            onPress={openPicker}
            icon="image-multiple"
            title="Galeria"
            variant="secondary"
            flexDir="column"
          />
        </S.Upload>

        <S.Form>
          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <Input />
          </S.InputGroup>

          <S.InputGroup>
            <S.InputGroupHeader>
              <S.Label>Descrição</S.Label>
              <S.MaxCharacters>0 de 60 caracteres</S.MaxCharacters>
            </S.InputGroupHeader>
            <Input multiline maxLength={60} style={{ height: 80 }} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Tamanhos e preços</S.Label>
            <InputPrice size="P" />
            <InputPrice size="M" />
            <InputPrice size="G" />
          </S.InputGroup>

          <Button title="Cadastrar pizza" />
        </S.Form>
      </ScrollView>
    </S.Wrapper>
  )
}
