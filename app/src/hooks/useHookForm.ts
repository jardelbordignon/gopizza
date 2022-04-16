import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationMode, useForm } from 'react-hook-form'
import * as yup from 'yup'

export type YupType = typeof yup

type UseHookFormType = {
  yupSchema: (yup: YupType) => yup.ObjectSchema<any>
  mode?: keyof ValidationMode
}

export const useHookForm = <T extends { [key: string]: any }>({
  yupSchema,
  mode = 'onBlur',
}: UseHookFormType) => {
  const resolver = yupResolver(yupSchema(yup))

  const { control, handleSubmit, formState, getValues, watch } = useForm({
    mode,
    resolver,
  })
  const { errors, isSubmitting } = formState

  const register = (name: keyof T) => ({
    name,
    control,
    error: errors[`${name}`],
  })

  return { register, isSubmitting, handleSubmit, getValues, watch }
}
