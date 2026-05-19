// src/components/Hero.tsx
'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useDict } from '@/i18n/useDict'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

export default function Hero() {
  const dict = useDict()
  const { hero } = dict
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const handlePointerDown = (e: React.PointerEvent) => {
    if (canvasRef.current && e.target === e.currentTarget) {
      canvasRef.current.dispatchEvent(
        new PointerEvent('pointerdown', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
        })
      )
    }
  }

  return (
    <header
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 64,
        background: 'var(--bg)',
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(243,239,230,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(243,239,230,.06) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: '-1px -1px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* 3D canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Scene onCanvasReady={(c) => { canvasRef.current = c }} />
      </div>

      {/* hero content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '120px 40px 80px',
        }}
      >
        {/* eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 14px',
            border: '1px solid var(--line)',
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 10px var(--accent)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-2)',
            }}
          >
            {hero.badge}
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(56px, 9vw, 148px)',
            lineHeight: 0.92,
            letterSpacing: '-0.045em',
            fontWeight: 500,
            maxWidth: '13ch',
            color: 'var(--ink)',
          }}
        >
          {hero.line1}{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 400 }}>
            {hero.accent}
          </em>
          <br />
          {hero.line2}
        </motion.h1>

        {/* sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '52ch',
            marginTop: 28,
            fontSize: 'clamp(16px, 1.4vw, 20px)',
            color: 'var(--ink-2)',
            lineHeight: 1.5,
          }}
        >
          {hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
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
            {hero.cta}
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
            href="#services"
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
            {hero.seeServices}
          </a>
        </motion.div>
      </div>

      {/* bottom meta */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 0,
          right: 0,
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '0 40px',
          color: 'var(--ink-3)',
          pointerEvents: 'none',
        }}
        className="hidden md:flex"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 11,
              color: 'var(--ink-2)',
            }}
          >
            [ 01 / SCROLL ]
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-2)',
            }}
          >
            {hero.dragHint}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
          }}
        >
          Tinmelia
        </span>
      </div>
    </header>
  )
}
