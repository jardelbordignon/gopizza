import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps & {
  name: string
  control: Control<any, any>
  error?: FieldError
  variant?: S.VariantType
  size: string
}

export const InputPrice = ({
  size,
  name,
  control,
  error,
  variant = 'primary',
  ...rest
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.InputGroup variant={variant} isErrored={!!error}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <S.Size>
                <S.Label>{size}</S.Label>
              </S.Size>

              <S.Label>R$</S.Label>
              <S.Input
                keyboardType="numeric"
                value={value}
                onBlur={onBlur}
                onChangeText={text => onChange(text)}
                {...rest}
              />
            </>
          )}
        />
      </S.InputGroup>
      {error && (
        <S.ErrorMessage variant={variant}>{error.message}</S.ErrorMessage>
      )}
    </S.Wrapper>
  )
}
