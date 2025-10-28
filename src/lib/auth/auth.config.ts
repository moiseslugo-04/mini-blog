import { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import prisma from '@lib/prisma'
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        identifier: {
          label: 'Email or Username',
          type: 'text',
          placeholder: 'user or user@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials) {
        const { password, identifier } = credentials

        if (!password || !identifier) {
          throw new Error('Missing credentials')
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: identifier as string },
              { username: identifier as string },
            ],
          },
        })
        if (!user) throw new Error('User not found')
        const matchPassword = await bcrypt.compare(
          password as string,
          user.password
        )
        console.log(matchPassword)
        if (!matchPassword) throw new Error('Invalid password')

        return {
          id: user.id,
          email: user.email,
          role: user.role as 'ADMIN' | 'USER',
          username: user.username as string,
          avatarUrl: user.avatarUrl,
          bio: user.bio,
          emailVerified: null,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.role = user.role
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          username: token.username as string,
          avatarUrl: token.avatarUrl as string,
          role: token.role as 'ADMIN' | 'USER',
          emailVerified: null,
        }
        return session
      }
      return session
    },
  },
}
