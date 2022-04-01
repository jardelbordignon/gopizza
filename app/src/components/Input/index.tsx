import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps & {
  name: string
  control: Control<any, any>
  error?: FieldError
  variant?: S.VariantType
}

export const Input = ({
  name,
  control,
  error,
  variant = 'primary',
  ...rest
}: InputProps) => (
  <S.Wrapper>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => (
        <S.StyledTextInput
          value={value}
          onBlur={onBlur}
          onChangeText={text => onChange(text)}
          variant={variant}
          isErrored={!!error}
          isFilled={!!value}
          {...rest}
        />
      )}
    />
    {error && (
      <S.ErrorMessage variant={variant}>{error.message}</S.ErrorMessage>
    )}
  </S.Wrapper>
)
