import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Logo } from '../../components/icons'
import { ThemeToggle } from '../../components/theme-toggle'


export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <span className="docs-wordmark">
              <Logo />
              <span className="docs-wordmark-divider">/</span>
              <span>Docs</span>
              <ThemeToggle />
            </span>
          }
          projectLink="https://github.com/Roarax/ROXY"
        />
      }
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/RoaraxAli/roxy-web/tree/main/content"
      footer={
        <div className="docs-footer">
          <span>ROXY · One session. Every model.</span>
          <span>Built on OpenCode &amp; 9Router</span>
        </div>
      }
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      editLink="Edit this page on GitHub"
      feedback={{
        content: 'Give us feedback',
        labels: 'feedback',
        link: 'https://github.com/RoaraxAli/roxy-web/issues/new',
      }}
      toc={{ backToTop: true, title: 'On this page' }}
      navigation={false}
    >
      {children}
    </Layout>
  )
}
