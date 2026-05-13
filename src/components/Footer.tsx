// src/components/Footer.tsx
'use client'

import { useDict } from '@/i18n/useDict'

export default function Footer() {
  const { footer } = useDict()
  const copy = footer.copy.replace('{year}', String(new Date().getFullYear()))

  return (
    <footer
      style={{
        padding: '48px 0',
        borderTop: '1px solid var(--line-2)',
        color: 'var(--ink-3)',
        fontSize: 13,
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <span>{copy}</span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          {footer.version}
        </span>
      </div>
    </footer>
  )
}
