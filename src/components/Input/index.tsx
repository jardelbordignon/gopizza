import React from 'react'
import { TextInputProps } from 'react-native'

import { StyledTextInput, VariantType } from './styles'

type InputProps = TextInputProps & {
  variant?: VariantType
}

export const Input = ({ variant = 'primary', ...rest }: InputProps) => (
  <StyledTextInput variant={variant} {...rest} />
)
