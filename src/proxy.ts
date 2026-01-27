// middleware.ts
import { auth } from '@features/auth/auth'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/admin']
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = await auth()

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )
  const isAuth = pathname === '/login'

  if (isAuth && session?.user) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  if (isProtectedRoute && !isAuth && !session?.user) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
