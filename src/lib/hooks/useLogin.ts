'use client'

import { useState } from 'react'
import { useForm } from '@lib/hooks/useForm'
import { loginSchema, LoginSchema } from '@/lib/schemas/auth'
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
      const response = await signIn('credentials', {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      })
      if (response?.error) throw new Error(response.error)
      if (response) return router.push('/dashboard')
      throw new Error('Login failed')
    } catch (error) {
      return error instanceof Error
        ? setError('Invalid Credentials')
        : setError('Login failed Please try again')
    } finally {
      setLoading(false)
    }
  })

  return { loading, form, error, handleSubmit }
}
