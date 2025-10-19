'use client'
import {
  useForm as useReactHookForm,
  UseFormReturn,
  UseFormProps,
  FieldValues,
} from 'react-hook-form'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface UseFormOptions<T extends FieldValues> extends UseFormProps<T> {
  schema: ZodType<T>
}

export function useForm<T extends FieldValues>({
  schema,
  ...rest
}: UseFormOptions<T>): UseFormReturn<T> {
  const methods = useReactHookForm<T>({
    ...rest,
    resolver: zodResolver(schema as any),
  })

  return methods
}
