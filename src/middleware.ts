// middleware.ts
import { auth } from '@/lib/auth/auth'
import { NextResponse } from 'next/server'

export default auth(async function middleware(req) {
  const { pathname } = req.nextUrl
  const session = await auth()

  if (!session && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  if (session && pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*'],
}
