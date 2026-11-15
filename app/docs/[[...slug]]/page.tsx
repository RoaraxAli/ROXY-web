import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'

type DocsPageProps = { params: Promise<{ slug?: string[] }> }

export const generateStaticParams = generateStaticParamsFor('slug')

export async function generateMetadata(props: DocsPageProps) {
  const { slug } = await props.params
  const { metadata } = await importPage(slug)
  return metadata
}

const Wrapper = getMDXComponents({}).wrapper

export default async function Page(props: DocsPageProps) {
  const { slug } = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(slug)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent params={{ slug }} />
    </Wrapper>
  )
}
