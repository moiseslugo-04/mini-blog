'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@features/dal/session'
import { useSessionStore } from './sessionStore'

export function SessionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const setSession = useSessionStore((state) => state.setSession)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getCurrentUser()

        if (!session.isAuth) {
          router.replace('/login')
          return
        }

        setSession(session.user)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }

    checkSession()
  }, [router, setSession])

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center gap-3'>
          <div className='size-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary' />
          <p className='text-sm text-muted-foreground'>Verificando sesión...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-lg font-semibold'>
            No pudimos verificar tu sesión
          </h2>

          <p className='mt-2 text-sm text-muted-foreground'>
            Ocurrió un error al conectar con el servidor.
          </p>
        </div>
      </div>
    )
  }

  return children
}
