import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    username: string
    role: 'ADMIN' | 'USER'
    avatarUrl: string | null
    bio?: string | null
    emailVerified: Date | null
  }

  interface Session {
    user: {
      id: string
      username: string
      role: 'ADMIN' | 'USER'
      avatarUrl: string | null
    } & DefaultSession['user']
  }
}
