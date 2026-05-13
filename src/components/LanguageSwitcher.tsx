// src/components/LanguageSwitcher.tsx
'use client'

import { useState } from 'react'
import { useLocale } from '@/i18n/useDict'
import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 12px',
          borderRadius: 999,
          fontSize: 13,
          fontFamily: 'var(--font-jetbrains-mono)',
          letterSpacing: '0.06em',
          border: '1px solid var(--line)',
          color: 'var(--ink-2)',
          background: 'transparent',
          cursor: 'pointer',
          transition: 'color .2s, border-color .2s',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.color = 'var(--ink)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,239,230,.22)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
          <path d="M6 1 Q8 6 6 11 M6 1 Q4 6 6 11" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M1 6 h10" stroke="currentColor" strokeWidth="1" />
        </svg>
        {LOCALE_LABELS[locale]}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}
        >
          <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* click-away backdrop */}
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 49 }}
            onClick={() => setOpen(false)}
          />
          <ul
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              zIndex: 50,
              minWidth: 100,
              background: '#1a1812',
              border: '1px solid var(--line)',
              borderRadius: 10,
              overflow: 'hidden',
              listStyle: 'none',
              padding: '4px 0',
              boxShadow: '0 8px 32px rgba(0,0,0,.5)',
            }}
          >
            {LOCALES.map((loc) => (
              <li key={loc}>
                <a
                  href={`/${loc}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '9px 14px',
                    fontSize: 13,
                    fontFamily: 'var(--font-jetbrains-mono)',
                    letterSpacing: '0.05em',
                    color: loc === locale ? 'var(--accent)' : 'var(--ink-2)',
                    background: 'transparent',
                    transition: 'background .15s, color .15s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(243,239,230,.04)'
                    if (loc !== locale) {
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--ink)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color =
                      loc === locale ? 'var(--accent)' : 'var(--ink-2)'
                  }}
                >
                  {loc === locale && (
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <span style={{ paddingLeft: loc === locale ? 0 : 15 }}>
                    {LOCALE_LABELS[loc as Locale]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
