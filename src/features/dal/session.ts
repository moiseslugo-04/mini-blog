import 'server-only'
import { cookies } from 'next/headers'
import { API_URL } from '@/app/config/env'
type User = { id: string; name: string; email: string; username: string }
type AuthResponse = { isAuth: false; user: null } | { isAuth: true; user: User }
export const verifySession = async (): Promise<AuthResponse> => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')

  console.log(accessToken, 'accessToken')
  const response = await fetch(API_URL + '/users/me', {
    credentials: 'include',
    headers: {
      Cookie: `access_token=${accessToken?.value ?? ''}`,
    },
  })

  console.log(response, 'session')
  if (!response.ok) return { isAuth: false, user: null }
  const user = (await response.json()) as User
  return { isAuth: true, user }
}
