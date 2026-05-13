// src/i18n/useDict.ts
'use client'

import { usePathname } from 'next/navigation'
import { dictionaries } from './dictionaries'
import { LOCALES, DEFAULT_LOCALE, type Locale } from './config'

/** Returns the active locale from the URL segment (e.g. /fr/... → 'fr') */
export function useLocale(): Locale {
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] as Locale
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE
}

/** Returns the full dictionary for the active locale */
export function useDict() {
  return dictionaries[useLocale()]
}
