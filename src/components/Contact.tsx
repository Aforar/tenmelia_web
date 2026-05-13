// src/components/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import { useDict } from '@/i18n/useDict'

export default function Contact() {
  const { contact } = useDict()

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '160px 0',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* radial accent glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,255,90,.08), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(243,239,230,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(243,239,230,.06) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* index label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}
        >
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
            {contact.label}
          </span>
          <span
            style={{ height: 1, width: 48, background: 'var(--accent)', display: 'block' }}
          />
        </motion.div>

        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontSize: 'clamp(56px, 9vw, 140px)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            fontWeight: 500,
            maxWidth: '14ch',
            color: 'var(--ink)',
          }}
        >
          {contact.line1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
            {contact.accent}
          </em>
        </motion.h2>

        {/* body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{
            marginTop: 28,
            fontSize: 18,
            color: 'var(--ink-2)',
            maxWidth: '46ch',
            lineHeight: 1.5,
          }}
        >
          {contact.body}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          style={{
            marginTop: 44,
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="mailto:hello@tinmelia.studio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 22px',
              borderRadius: 999,
              fontSize: 15,
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
            {contact.cta}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2.5 10.5 L10.5 2.5 M4 2.5 h6.5 v6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="mailto:hello@tinmelia.studio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 22px',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 500,
              border: '1px solid var(--line)',
              color: 'var(--ink)',
              transition: 'background .2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                'rgba(243,239,230,.05)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '')
            }
          >
            hello@tinmelia.studio
          </a>
        </motion.div>
      </div>
    </section>
  )
}
