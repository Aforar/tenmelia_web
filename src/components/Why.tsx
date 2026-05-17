// src/components/Why.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDict } from '@/i18n/useDict'
import type { WhyItem } from '@/i18n/dictionaries'

const NUMS = ['[ 01 ]', '[ 02 ]', '[ 03 ]']

function WhyCard({
  item,
  num,
  index,
}: {
  item: WhyItem
  num: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="why-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      style={{
        padding: '48px 36px 56px',
        // Use CSS logical property so it flips in RTL automatically
        borderInlineEnd: index < 2 ? '1px solid var(--line)' : 'none',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
        transition: 'background .25s',
        background: hovered ? 'var(--bg-2)' : 'transparent',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: 12,
          color: 'var(--accent)',
          marginBottom: 48,
          display: 'block',
          letterSpacing: '0.06em',
        }}
      >
        {num}
      </span>
      <p
        style={{
          fontSize: 'clamp(22px, 2.2vw, 30px)',
          lineHeight: 1.2,
          letterSpacing: '-0.018em',
          fontWeight: 400,
          color: 'var(--ink)',
        }}
      >
        {item.before}
        <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{item.accent}</em>
        {item.after}
      </p>
    </motion.div>
  )
}

export default function Why() {
  const { why } = useDict()

  return (
    <section
      id="why"
      className="section-pad"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--line-2)',
        padding: '140px 0',
      }}
    >
      <div className="inner-pad" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        {/* header */}
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
                {why.label}
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
              {why.heading}{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                {why.headingAccent}
              </em>
            </h2>
          </div>
          <p style={{ maxWidth: '42ch', color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.5 }}>
            {why.sub}
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            borderTop: '1px solid var(--line)',
          }}
        >
          {why.items.map((item, i) => (
            <WhyCard key={i} item={item} num={NUMS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
