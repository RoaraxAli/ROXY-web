import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)'],
}

const DOCS_ORIGIN = 'https://docs.roxy.theali.app'
const INTERNAL_DOCS_HEADER = 'x-roxy-docs-rewrite'

/** Any `docs.*` host serves the documentation, so `docs.localhost` works for local review. */
function isDocsHost(hostname: string | undefined) {
  return Boolean(hostname?.startsWith('docs.'))
}

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0]
  const { pathname } = request.nextUrl

  // The rewrite below re-enters this middleware; this marker stops a redirect loop.
  if (request.headers.get(INTERNAL_DOCS_HEADER)) {
    return NextResponse.next()
  }

  if (isDocsHost(hostname)) {
    if (pathname === '/docs' || pathname.startsWith('/docs/')) {
      return NextResponse.redirect(new URL(pathname.slice(5) || '/', request.url))
    }
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = `/docs${pathname === '/' ? '' : pathname}`
    const headers = new Headers(request.headers)
    headers.set(INTERNAL_DOCS_HEADER, '1')
    return NextResponse.rewrite(rewriteUrl, { request: { headers } })
  }

  // Docs live on their own subdomain; keep the marketing origin out of that namespace.
  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    return NextResponse.redirect(new URL(pathname.slice(5) || '/', DOCS_ORIGIN))
  }

  return NextResponse.next()
}
