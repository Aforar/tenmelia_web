// src/components/Services.tsx
'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useDict } from '@/i18n/useDict'

// ── geometric SVG glyphs ──────────────────────────────────────────────────────

function GlyphIT() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon points="14,1 27,14 14,27 1,14" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <rect x="10" y="10" width="8" height="8" fill="var(--accent)" />
    </svg>
  )
}

function GlyphDesign() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" stroke="var(--accent)" strokeWidth="1" />
      <path d="M2 14 A12 12 0 0 1 26 14 Z" fill="var(--accent)" />
    </svg>
  )
}

function GlyphSocial() {
  const bars = [10, 20, 14, 28, 18]
  const gap = 4
  const w = 4
  const totalW = bars.length * w + (bars.length - 1) * gap
  const startX = (28 - totalW) / 2
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {bars.map((h, i) => (
        <rect key={i} x={startX + i * (w + gap)} y={28 - h} width={w} height={h} fill="var(--accent)" />
      ))}
    </svg>
  )
}

function GlyphPhoto() {
  return (
    <svg width="32" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="2" y="4" width="32" height="22" rx="3" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="18" cy="15" r="7" fill="var(--accent)" />
    </svg>
  )
}

function GlyphHelpDesk() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {/* headset arc */}
      <path d="M5 15 C5 8 23 8 23 15" stroke="var(--accent)" strokeWidth="1" fill="none" />
      {/* left ear cup */}
      <rect x="3" y="14" width="5" height="7" rx="2" fill="var(--accent)" />
      {/* right ear cup */}
      <rect x="20" y="14" width="5" height="7" rx="2" fill="var(--accent)" />
      {/* mic arm */}
      <path d="M23 19 Q26 21 24 24" stroke="var(--accent)" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* mic dot */}
      <circle cx="23.5" cy="24.5" r="1.5" fill="var(--accent)" />
    </svg>
  )
}

const GLYPHS: Array<() => React.ReactElement> = [GlyphIT, GlyphDesign, GlyphSocial, GlyphPhoto, GlyphHelpDesk]

// ── tilt card ─────────────────────────────────────────────────────────────────

function ServiceCard({
  title,
  body,
  num,
  Glyph,
  index,
}: {
  title: string
  body: string
  num: string
  Glyph: () => React.ReactElement
  index: number
}) {
  const cardRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const rx = (0.5 - y) * 6
    const ry = (x - 0.5) * 8
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
    if (glowRef.current) {
      glowRef.current.style.setProperty('--mx', x * 100 + '%')
      glowRef.current.style.setProperty('--my', y * 100 + '%')
    }
  }

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
    setHovered(false)
  }

  return (
    <motion.article
      ref={cardRef as React.RefObject<HTMLElement>}
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={onLeave}
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, var(--bg-2), #100e0b)',
        border: '1px solid var(--line)',
        borderColor: hovered ? 'rgba(243,239,230,.22)' : 'var(--line)',
        borderRadius: 'var(--radius)',
        padding: '40px 36px',
        transformStyle: 'preserve-3d',
        transition: 'border-color .25s',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* radial glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(212,255,90,.08), transparent 40%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity .3s',
          pointerEvents: 'none',
          borderRadius: 'inherit',
        }}
      />

      {/* top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 11,
              color: 'var(--ink-3)',
              letterSpacing: '0.06em',
            }}
          >
            {num}
          </span>
          <h3
            style={{
              marginTop: 8,
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
            }}
          >
            {title}
          </h3>
        </div>
        <div
          style={{
            width: 56,
            height: 56,
            border: '1px solid var(--line)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Glyph />
        </div>
      </div>

      {/* description */}
      <p
        style={{
          color: 'var(--ink-2)',
          fontSize: 15.5,
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
    </motion.article>
  )
}

// ── section ───────────────────────────────────────────────────────────────────

const NUMS = ['01 / IT', '02 / DSN', '03 / SMM', '04 / P+V', '05 / HELP']

export default function Services() {
  const { services } = useDict()

  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg)', padding: '140px 0' }}>
      <div className="inner-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 64,
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ height: 1, width: 48, background: 'var(--accent)', display: 'block' }} />
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-2)',
                }}
              >
                {services.label}
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(38px, 5vw, 72px)',
                lineHeight: 0.95,
                letterSpacing: '-0.035em',
                fontWeight: 500,
                maxWidth: '14ch',
                color: 'var(--ink)',
              }}
            >
              {services.heading}{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                {services.headingAccent}
              </em>
            </h2>
          </div>
          <p style={{ maxWidth: '42ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.5 }}>
            {services.sub}
          </p>
        </motion.div>

        {/* 2-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 18,
            perspective: 1600,
          }}
        >
          {services.items.map((svc, i) => (
            <ServiceCard
              key={i}
              title={svc.title}
              body={svc.body}
              num={NUMS[i]}
              Glyph={GLYPHS[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
