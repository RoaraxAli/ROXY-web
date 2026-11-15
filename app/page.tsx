import { headers } from 'next/headers'
export const dynamic = 'force-dynamic'
import { importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../mdx-components'
import DocsLayout from './docs/layout'

const DocsWrapper = getMDXComponents({}).wrapper

function isDocsHost(headerList: Headers) {
  const host = headerList.get('x-forwarded-host') || headerList.get('host') || ''
  return host.split(':')[0].toLowerCase() === 'docs.roxy.theali.app'
}

export default async function Home() {
  const docsHost = isDocsHost(await headers())

  if (docsHost) {
    const { default: MDXContent, toc, metadata, sourceCode } = await importPage([])
    return (
      <DocsLayout>
        <DocsWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
          <MDXContent />
        </DocsWrapper>
      </DocsLayout>
    )
  }

  const { default: MarketingPage } = await import('./(marketing)/page')
  const { default: MarketingLayout } = await import('./(marketing)/layout')
  return <MarketingLayout><MarketingPage /></MarketingLayout>
}

export async function generateMetadata() {
  const docsHost = isDocsHost(await headers())
  if (docsHost) {
    const { metadata } = await importPage([])
    return metadata
  }
  return {}
}
