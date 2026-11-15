import './globals.css'
import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import localFont from 'next/font/local'

const sans = localFont({ src: '../public/fonts/Manrope.ttf', variable: '--font-sans', display: 'swap' })
const mono = localFont({ src: '../public/fonts/IBMPlexMono.ttf', variable: '--font-mono', display: 'swap' })

export async function generateMetadata(): Promise<Metadata> {
  const docsHost = (await headers()).get('host')?.split(':')[0] === 'docs.roxy.theali.app'
  return {
    metadataBase: new URL(docsHost ? 'https://docs.roxy.theali.app' : 'https://roxy.theali.app'),
    title: { default: 'ROXY — Your models. One conversation.', template: '%s — ROXY' },
    description: 'Every model you use. Every workflow you rely on. One beautifully simple, open-source desktop app. Built on OpenCode and 9Router.',
    applicationName: 'ROXY',
    icons: { icon: '/logo.svg' },
    openGraph: {
      title: 'ROXY — Your models. One conversation.',
      description: 'The open AI workspace. Every model, one continuous conversation.',
      siteName: 'ROXY',
      type: 'website',
      ...docsHost ? {} : { images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'ROXY — Your models. One conversation.' }] },
    },
    twitter: { card: 'summary_large_image', title: 'ROXY — Your models. One conversation.', description: 'The open AI workspace. Every model, one continuous conversation.', ...docsHost ? {} : { images: ['/og.svg'] } },
  }
}
export const viewport: Viewport = { themeColor: '#090a09', colorScheme: 'dark' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning><body>{children}</body></html>
}
