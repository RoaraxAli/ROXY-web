import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../mdx-components'
import DocsLayout from './docs/layout'

const DocsWrapper = getMDXComponents({}).wrapper

export default async function Home() {
  const host = (await headers()).get('host')?.split(':')[0]

  if (host === 'docs.roxy.theali.app') {
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
  const host = (await headers()).get('host')?.split(':')[0]
  if (host === 'docs.roxy.theali.app') {
    const { metadata } = await importPage([])
    return metadata
  }
  return {}
}
