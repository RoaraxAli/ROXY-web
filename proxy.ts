import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)'],
}

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]
  const { pathname } = request.nextUrl

  if (host === 'docs.roxy.theali.app') {
    if (pathname === '/docs' || pathname.startsWith('/docs/')) {
      return NextResponse.redirect(new URL(pathname.slice(5) || '/', request.url))
    }
    return NextResponse.rewrite(new URL(`/docs${pathname === '/' ? '' : pathname}`, request.url))
  }

  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    return NextResponse.redirect(new URL(pathname.slice(5) || '/', 'https://docs.roxy.theali.app'))
  }

  return NextResponse.next()
}
