'use client'
import {
  SubmitHandler,
  useForm as useReactHookForm,
  UseFormReturn,
} from 'react-hook-form'
import { z, ZodType } from 'zod'
interface UseFormOptions<T extends ZodType<any, any>> {
  schema: ZodType<any>
  defaultValues: z.infer<T>
}
export function useForm<T extends ZodType<any, any>>({
  schema,
  defaultValues,
}: UseFormOptions<T>): UseFormReturn<z.infer<T>> {
  const form = useReactHookForm<z.infer<T>>({
    resolver: (values) => {
      try {
        const parsed = schema.parse(values)
        return { values: parsed, errors: {} }
      } catch (err: any) {
        return { values: {}, errors: err.formErrors?.fieldErrors || {} }
      }
    },
    defaultValues,
  })
  return { ...form }
}
