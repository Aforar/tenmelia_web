// src/components/Nav.tsx
'use client'

import { useDict } from '@/i18n/useDict'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav() {
  const dict = useDict()
  const { nav } = dict

  const links = [
    { label: nav.services, href: '#services' },
    { label: nav.why,      href: '#why' },
    { label: nav.team,     href: '#team' },
    { label: nav.contact,  href: '#contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'linear-gradient(180deg, rgba(12,11,9,.72), rgba(12,11,9,.32))',
        borderBottom: '1px solid rgba(243,239,230,.06)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          gap: 20,
        }}
      >
        {/* brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            fontSize: 18,
            color: 'var(--ink)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: 'var(--accent)',
              boxShadow: '0 0 18px var(--accent)',
              transform: 'rotate(45deg)',
              display: 'inline-block',
            }}
          />
          Tinmelia
        </div>

        {/* nav links */}
        <ul
          style={{ display: 'flex', gap: 34, listStyle: 'none' }}
          className="hidden md:flex"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{ fontSize: 14, color: 'var(--ink-2)', transition: 'color .2s' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--ink)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--ink-2)')
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* right cluster: CTA + lang switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <LanguageSwitcher />
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              background: 'var(--accent)',
              color: 'var(--accent-ink)',
              transition: 'transform .2s',
            }}
            className="hidden md:inline-flex"
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = '')
            }
          >
            {nav.cta}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 9.5 L9.5 2.5 M4 2.5 h5.5 v5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
