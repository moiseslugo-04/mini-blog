import NextAuth from 'next-auth'
import { prisma } from '@lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { authConfig } from './auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  pages: {
    signIn: '/login',
  },
  session: { strategy: 'jwt', maxAge: 7 * 24 * 60 * 60 },
  jwt: { maxAge: 7 * 24 * 60 * 60 },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
})
