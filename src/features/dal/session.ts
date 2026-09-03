import { API_URL } from '@/app/config/env'
type User = { id: string; name: string; email: string; username: string }
type AuthResponse = { isAuth: false; user: null } | { isAuth: true; user: User }
export const verifySession = async (): Promise<AuthResponse> => {
  const response = await fetch(API_URL + '/users/me', {
    credentials: 'include',
  })

  if (!response.ok) return { isAuth: false, user: null }

  const user = (await response.json()) as User

  return { isAuth: true, user }
}
