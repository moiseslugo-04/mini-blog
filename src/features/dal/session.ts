import { API_URL } from '@/app/config/env'
import { SessionResponse, User } from './types'

export async function getCurrentUser(): Promise<SessionResponse> {
  const url = `${API_URL}/users/me`

  const response = await fetch(url, { credentials: 'include' })
  const user = (await response.json()) as User

  if (!response.ok) return { isAuth: false, user: null }

  return { isAuth: true, user: user }
}
