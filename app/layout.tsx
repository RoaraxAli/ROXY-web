import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROXY — one session, every model',
  description:
    'ROXY is a native Rust desktop client for every model you already have access to — hosted APIs, local agent CLIs, and a 9Router priority fallback. One conversation, switch models mid-thread.',
  themeColor: '#07070a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
