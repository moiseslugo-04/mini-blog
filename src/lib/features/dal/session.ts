import 'server-only'
import { auth } from '../auth/auth'
import { cache } from 'react'
import { redirect } from 'next/navigation'

export const verifySession = cache(async () => {
  const session = await auth()
  if (!session?.user.id) redirect('/login')
  return { isAuth: true, userId: session.user.id, role: session.user.role }
})
