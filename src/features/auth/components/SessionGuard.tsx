'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/app/config/env'

export function SessionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch(`${API_URL}/users/me`, {
          credentials: 'include',
        })
        const user = await response.json()
        if (!response.ok) {
          router.replace('/login')
          return
        }

        setLoading(false)
      } catch {
        router.replace('/login')
      }
    }
    verifySession()
  }, [])
  if (loading) {
    return <div>Loading session...</div>
  }

  return children
}
