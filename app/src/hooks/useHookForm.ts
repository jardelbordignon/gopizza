import { yupResolver } from '@hookform/resolvers/yup'
import { FieldError, ValidationMode, useForm } from 'react-hook-form'
import * as yup from 'yup'

export type YupType = typeof yup

type UseHookFormProps = {
  yupSchema: (yup: YupType) => yup.ObjectSchema<any>
  mode?: keyof ValidationMode
}

export const useHookForm = <Type extends { [key: string]: any }>({
  yupSchema,
  mode = 'onBlur',
}: UseHookFormProps) => {
  const resolver = yupResolver(yupSchema(yup))

  const { control, handleSubmit, formState, getValues, watch } = useForm<Type>({
    mode,
    resolver,
  })
  const { errors, isSubmitting } = formState

  const register = (name: string) => ({
    name,
    control,
    error: errors[name] as FieldError,
  })

  return { register, isSubmitting, handleSubmit, getValues, watch }
}
