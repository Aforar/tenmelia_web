// src/components/LangSetter.tsx
'use client'

import { useEffect } from 'react'

interface Props {
  lang: string
  dir: 'ltr' | 'rtl'
}

/**
 * Sets `document.documentElement.lang` and `dir` on mount.
 * Renders nothing — exists only for its side-effect.
 */
export function LangSetter({ lang, dir }: Props) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  return null
}
