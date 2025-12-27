// middleware.ts
import { auth } from '@/lib/features/auth/auth'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard']
export default auth(async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = await auth()

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )
  if (isProtectedRoute && !session?.user) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }
  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*'],
  runtime: 'nodejs',
}
