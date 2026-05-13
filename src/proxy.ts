// src/proxy.ts  (Next.js 16 — must export `proxy`, not `middleware`)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'ar', 'es', 'fr', 'zh', 'ru', 'pl'] as const

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip if a supported locale is already in the path
  const hasLocale = LOCALES.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  )
  if (hasLocale) return NextResponse.next()

  // Redirect to English by default
  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
