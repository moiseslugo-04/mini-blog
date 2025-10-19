'use client'

import { useForm } from '@lib/hooks/useForm'
import { loginSchema, LoginSchema } from '@/lib/schemas/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const form = useForm<LoginSchema>({
    schema: loginSchema,
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    setLoading(true)
    setError(null)
    try {
      const res = await signIn('credentials', {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      })

      if (res.error) throw new Error(res?.error || 'Unknown error')
      router.replace('/dashboard')
    } catch (error) {
      if (error instanceof Error) {
        setError('Invalid username or password')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  })

  return { loading, form, error, handleSubmit }
}
