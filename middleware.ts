import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)'],
}

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0]
  const { pathname } = request.nextUrl

  if (hostname === 'docs.roxy.theali.app') {
    if (pathname === '/docs' || pathname.startsWith('/docs/')) {
      return NextResponse.redirect(new URL(pathname.slice(5) || '/', request.url))
    }
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = `/docs${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(rewriteUrl)
  }

  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    return NextResponse.redirect(new URL(pathname.slice(5) || '/', 'https://docs.roxy.theali.app'))
  }

  return NextResponse.next()
}
