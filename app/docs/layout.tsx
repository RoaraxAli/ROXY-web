import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      navbar={
        <Navbar
          logo={<span style={{ fontWeight: 700, letterSpacing: '4px' }}>ROXY</span>}
          projectLink="https://github.com/RoaraxAli/ROXY"
        />
      }
      pageMap={await getPageMap('/docs')}
      docsRepositoryBase="https://github.com/RoaraxAli/roxy-web/tree/main/content/docs"
      footer={<span>ROXY · BUILT ON OPENCODE &amp; 9ROUTER · NO TELEMETRY</span>}
    >
      {children}
    </Layout>
  )
}
