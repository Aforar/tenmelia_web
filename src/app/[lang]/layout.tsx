// src/app/[lang]/layout.tsx
import { notFound } from 'next/navigation'
import { LangSetter } from '@/components/LangSetter'
import { LOCALES, RTL_LOCALES, type Locale } from '@/i18n/config'

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params

  if (!LOCALES.includes(lang as Locale)) notFound()

  const dir = (RTL_LOCALES as readonly string[]).includes(lang) ? 'rtl' : 'ltr'

  return (
    <>
      <LangSetter lang={lang} dir={dir} />
      {children}
    </>
  )
}
