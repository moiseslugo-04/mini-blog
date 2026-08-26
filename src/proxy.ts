// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from './features/dal/session'

const protectedRoutes = ['/admin']
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = await verifySession()

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )
  const isAuth = pathname === '/login'

  if (isAuth && session.isAuth) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (isProtectedRoute && !isAuth && !session) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
