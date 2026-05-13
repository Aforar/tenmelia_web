// src/i18n/config.ts
export const LOCALES = ['en', 'ar', 'es', 'fr', 'zh', 'ru', 'pl'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Languages that require right-to-left layout */
export const RTL_LOCALES: readonly Locale[] = ['ar']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  ar: 'AR',
  es: 'ES',
  fr: 'FR',
  zh: '中文',
  ru: 'RU',
  pl: 'PL',
}
