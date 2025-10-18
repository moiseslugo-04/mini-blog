import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })

  const { pathname } = req.nextUrl

  if (!token && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
  runtime: 'nodejs',
}
