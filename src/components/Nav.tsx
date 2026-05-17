// src/components/Nav.tsx
'use client'

import { useState } from 'react'
import { useDict } from '@/i18n/useDict'
import { useLocale } from '@/i18n/useDict'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav() {
  const dict = useDict()
  const { nav } = dict
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: nav.services, href: '#services' },
    { label: nav.why,      href: '#why' },
    { label: nav.team,     href: '#team' },
    { label: nav.contact,  href: '#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'linear-gradient(180deg, rgba(12,11,9,.88), rgba(12,11,9,.6))',
          borderBottom: '1px solid rgba(243,239,230,.06)',
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
            gap: 16,
          }}
        >
          {/* brand */}
          <a
            href={`/${locale}`}
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              fontSize: 18,
              color: 'var(--ink)',
              flexShrink: 0,
              textDecoration: 'none',
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
          </a>

          {/* desktop nav links */}
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

          {/* right cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <LanguageSwitcher />

            {/* desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex"
              style={{
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

            {/* hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 5,
                width: 36,
                height: 36,
                padding: 6,
                borderRadius: 8,
                border: '1px solid var(--line)',
                background: menuOpen ? 'rgba(243,239,230,.06)' : 'transparent',
                transition: 'background .2s',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: 1.5,
                  background: 'var(--ink-2)',
                  borderRadius: 2,
                  transition: 'transform .25s, opacity .25s',
                  transformOrigin: 'center',
                  transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: 1.5,
                  background: 'var(--ink-2)',
                  borderRadius: 2,
                  transition: 'opacity .2s',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: 1.5,
                  background: 'var(--ink-2)',
                  borderRadius: 2,
                  transition: 'transform .25s, opacity .25s',
                  transformOrigin: 'center',
                  transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile slide-down menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="mobile-cta">
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
    </>
  )
}
