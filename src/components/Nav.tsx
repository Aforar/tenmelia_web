// src/components/Nav.tsx
'use client'

import { useState, useEffect } from 'react'
import { useDict, useLocale } from '@/i18n/useDict'
import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config'
import LanguageSwitcher from './LanguageSwitcher'

const SECTION_IDS = ['services', 'why', 'team', 'contact']

export default function Nav() {
  const dict = useDict()
  const { nav } = dict
  const locale = useLocale()

  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')

  /* ── scroll-aware background + active section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // find which section is in the top half of the viewport
      const hit = SECTION_IDS.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 80 && bottom > 80
      })
      setActive(hit ?? '')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const links = [
    { label: nav.services, href: '#services', id: 'services' },
    { label: nav.why,      href: '#why',      id: 'why' },
    { label: nav.team,     href: '#team',     id: 'team' },
    { label: nav.contact,  href: '#contact',  id: 'contact' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          background: scrolled
            ? 'rgba(12,11,9,.90)'
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(243,239,230,.08)'
            : '1px solid transparent',
          transition: 'background .35s ease, border-color .35s ease, backdrop-filter .35s ease',
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
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
            className="hidden md:flex"
            style={{ display: 'flex', gap: 4, listStyle: 'none' }}
          >
            {links.map(({ label, href, id }) => {
              const isActive = active === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 4,
                      padding: '6px 14px',
                      borderRadius: 8,
                      fontSize: 14,
                      color: isActive ? 'var(--ink)' : 'var(--ink-2)',
                      transition: 'color .2s, background .2s',
                      background: isActive ? 'rgba(243,239,230,.06)' : 'transparent',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color = 'var(--ink)'
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'
                    }}
                  >
                    {label}
                    {/* active dot */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive ? 4 : 0,
                        height: 4,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        transition: 'width .25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* right cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* language switcher — desktop only; mobile gets it inside the drawer */}
            <span className="hidden md:block">
              <LanguageSwitcher />
            </span>

            {/* desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex"
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
                transition: 'transform .2s, opacity .2s',
                textDecoration: 'none',
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
              aria-expanded={menuOpen}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                width: 40,
                height: 40,
                padding: 8,
                borderRadius: 10,
                border: '1px solid',
                borderColor: menuOpen ? 'rgba(243,239,230,.18)' : 'var(--line)',
                background: menuOpen ? 'rgba(243,239,230,.06)' : 'transparent',
                transition: 'background .2s, border-color .2s',
                flexShrink: 0,
              }}
            >
              {[
                menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                'none', // middle
                menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              ].map((transform, i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: 18,
                    height: 1.5,
                    background: 'var(--ink-2)',
                    borderRadius: 2,
                    transition: 'transform .25s cubic-bezier(.22,1,.36,1), opacity .2s',
                    transform,
                    opacity: i === 1 && menuOpen ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile backdrop — closes menu on outside tap */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 46,
            background: 'rgba(0,0,0,.4)',
          }}
        />
      )}

      {/* mobile slide-down drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(({ label, href, id }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="mobile-nav-link"
            style={{ color: active === id ? 'var(--ink)' : 'var(--ink-2)' }}
          >
            {active === id && (
              <span
                style={{
                  display: 'inline-block',
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginRight: 10,
                  flexShrink: 0,
                }}
              />
            )}
            {label}
          </a>
        ))}
        {/* language picker — grid of pills */}
        <div style={{ padding: '16px 4px 4px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {LOCALES.map((loc) => {
            const isCurrent = loc === locale
            return (
              <a
                key={loc}
                href={`/${loc}`}
                onClick={closeMenu}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '7px 14px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: 'var(--font-jetbrains-mono)',
                  letterSpacing: '0.06em',
                  border: '1px solid',
                  borderColor: isCurrent ? 'var(--accent)' : 'var(--line)',
                  color: isCurrent ? 'var(--accent)' : 'var(--ink-3)',
                  background: isCurrent ? 'rgba(212,255,90,.08)' : 'transparent',
                  textDecoration: 'none',
                  // override the global .mobile-menu a border-bottom
                  borderBottom: isCurrent ? '1px solid var(--accent)' : '1px solid var(--line)',
                }}
              >
                {LOCALE_LABELS[loc as Locale]}
              </a>
            )
          })}
        </div>

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
