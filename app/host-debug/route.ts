import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const incoming = await headers()
  return NextResponse.json({
    host: incoming.get('host'),
    forwardedHost: incoming.get('x-forwarded-host'),
    forwardedProto: incoming.get('x-forwarded-proto'),
  })
}
