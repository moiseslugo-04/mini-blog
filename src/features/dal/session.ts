import { API_URL } from '@/app/config/env'
import { SessionResponse, ProfileDTO } from './types'

export async function getCurrentUser(): Promise<SessionResponse> {
  const url = `${API_URL}/users/me`

  const response = await fetch(url, { credentials: 'include' })
  const user = (await response.json()) as ProfileDTO

  if (!response.ok) return { isAuth: false, user: null }

  return { isAuth: true, user: user }
}
