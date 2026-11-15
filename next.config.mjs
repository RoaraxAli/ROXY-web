import nextra from 'nextra'

const withNextra = nextra({})
const docsHost = [{ type: 'host', value: 'docs.roxy.theali.app' }]

export default withNextra({
  reactStrictMode: true,
  images: { unoptimized: true },
  async rewrites() {
    return [
      { source: '/', has: docsHost, destination: '/docs' },
      { source: '/install', has: docsHost, destination: '/docs/install' },
      { source: '/:path((?!_next|docs|install|favicon.ico).*)', has: docsHost, destination: '/docs/:path' },
    ]
  },
  async redirects() {
    return [
      { source: '/docs/:path*', has: [{ type: 'host', value: 'roxy.theali.app' }], destination: 'https://docs.roxy.theali.app/:path*', permanent: false },
      { source: '/docs/:path*', has: docsHost, destination: '/:path*', permanent: false },
    ]
  },
})
