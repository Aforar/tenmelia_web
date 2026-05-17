// src/components/Team.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useDict } from '@/i18n/useDict'

export default function Team() {
  const { team } = useDict()
  const sectionRef = useRef<HTMLElement>(null)
  useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-pad"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--line-2)',
        borderBottom: '1px solid var(--line-2)',
        padding: '140px 0',
      }}
    >
      <div className="inner-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* left — copy + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 34 }}>
              <span
                style={{ height: 1, width: 48, background: 'var(--accent)', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-2)',
                }}
              >
                {team.label}
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(40px, 4.5vw, 68px)',
                lineHeight: 0.96,
                letterSpacing: '-0.03em',
                fontWeight: 500,
                color: 'var(--ink)',
              }}
            >
              {team.heading}{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                {team.headingAccent}
              </em>
            </h2>

            <p
              style={{
                marginTop: 28,
                color: 'var(--ink-2)',
                fontSize: 17,
                lineHeight: 1.55,
                maxWidth: '46ch',
              }}
            >
              {team.body}
            </p>

            {/* stats grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                marginTop: 48,
                background: 'var(--line)',
                border: '1px solid var(--line)',
                borderRadius: 10,
                overflow: 'hidden',
              }}
            >
              {team.stats.map(({ v, l }) => (
                <div key={l} style={{ padding: 24, background: 'var(--bg-2)' }}>
                  <div
                    style={{
                      fontSize: 36,
                      letterSpacing: '-0.02em',
                      fontWeight: 500,
                      color: 'var(--ink)',
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: 11,
                      color: 'var(--ink-3)',
                      textTransform: 'uppercase',
                      marginTop: 6,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right — perspective-tilted roster panel */}
          <motion.aside
            className="team-roster"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              background: 'var(--bg)',
              padding: 28,
              transformStyle: 'preserve-3d',
              transform: 'perspective(1400px) rotateY(-8deg) rotateX(4deg)',
              transition: 'transform .4s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform =
                'perspective(1400px) rotateY(-4deg) rotateX(2deg)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform =
                'perspective(1400px) rotateY(-8deg) rotateX(4deg)')
            }
          >
            {/* roster header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: '1px solid var(--line-2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: 11,
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {team.rosterLabel}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: 11,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {team.onlineLabel}
              </span>
            </div>

            {/* roster rows */}
            <div>
              {team.roster.map(({ idx, role, count }, i) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '24px 1fr auto',
                    gap: 16,
                    alignItems: 'center',
                    padding: '14px 0',
                    borderBottom:
                      i < team.roster.length - 1 ? '1px solid var(--line-2)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: 11,
                      color: 'var(--ink-3)',
                    }}
                  >
                    {idx}
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--ink)' }}>{role}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: 13,
                      color: 'var(--accent)',
                    }}
                  >
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
