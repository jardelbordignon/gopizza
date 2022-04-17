import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'
import * as yup from 'yup'

import * as S from './styles'

type Props = S.InputStylesProps &
  TextInputProps & {
    onSearch: () => void
    onClear: () => void
  }

const resolver = yupResolver(
  yup.object().shape({
    text: yup.string().required(),
  })
)

export const InputSearch = ({ variant, onSearch, onClear, ...rest }: Props) => {
  const { COLORS } = useTheme()

  const { control, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    resolver,
  })
  const { errors } = formState

  const onPress = () => handleSubmit(onSearch)

  return (
    <S.Wrapper>
      <S.InputArea>
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, value, onBlur } }) => (
            <S.Input
              value={value}
              onBlur={onBlur}
              onChangeText={text => onChange(text)}
              isErrored={!!errors.search}
              isFilled={!!value}
              {...rest}
            />
          )}
        />

        {errors && (
          <S.ErrorMessage variant={variant}>{errors[0]}</S.ErrorMessage>
        )}

        <S.ButtonClear onPress={onClear}>
          <Icons name="close" size={16} />
        </S.ButtonClear>
      </S.InputArea>

      <S.SearchButton onPress={onPress}>
        <Icons name="magnify" size={16} color={COLORS.TITLE} />
      </S.SearchButton>
    </S.Wrapper>
  )
}
