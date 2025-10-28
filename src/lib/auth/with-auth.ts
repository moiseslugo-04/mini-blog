// lib/auth/with-auth.ts
'use server'

import { auth } from '@/lib/auth/auth'
interface AuthState<T> {
  success: boolean
  data: T | null
  error: null | string
}
export async function withAuth<T>(
  action: (user: { id: string; email: string }) => Promise<T>
): Promise<AuthState<T>> {
  const session = await auth()

  if (!session?.user) {
    return { success: false, data: null, error: 'Unauthorized' }
  }

  try {
    const data = await action({
      id: session.user.id,
      email: session.user.email || '',
    })
    return { success: true, data, error: null }
  } catch (error) {
    console.error('Action error:', error)
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : 'Action failed',
    }
  }
}
