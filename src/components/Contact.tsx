// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDict } from '@/i18n/useDict'

// ── shared input style helpers ────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  background: 'rgba(243,239,230,.04)',
  border: '1px solid var(--line)',
  borderRadius: 10,
  fontSize: 15,
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color .2s',
  fontFamily: 'inherit',
}

function Field({
  as,
  placeholder,
  value,
  onChange,
  type = 'text',
  rows,
}: {
  as?: 'input' | 'textarea'
  placeholder: string
  value: string
  onChange: (v: string) => void
  type?: string
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const style: React.CSSProperties = {
    ...inputBase,
    borderColor: focused ? 'rgba(212,255,90,.5)' : 'var(--line)',
    boxShadow: focused ? '0 0 0 3px rgba(212,255,90,.08)' : 'none',
    resize: as === 'textarea' ? 'vertical' : undefined,
    minHeight: as === 'textarea' ? 120 : undefined,
  }

  if (as === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        rows={rows ?? 5}
        style={style}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
      />
    )
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      style={style}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

// ── main component ────────────────────────────────────────────────────────────

export default function Contact() {
  const dict = useDict()
  const { contact, services } = dict

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const serviceNames = services.items.map((s) => s.title)

  const toggleService = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Wire your backend / Formspree endpoint here:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, selected, description }) })
    await new Promise((r) => setTimeout(r, 800)) // simulate network
    setSending(false)
    setSubmitted(true)
  }

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
            {contact.label}
          </span>
          <span style={{ height: 1, width: 48, background: 'var(--accent)', display: 'block' }} />
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

        {/* ── form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.26 }}
          style={{ marginTop: 56, width: '100%', maxWidth: 640, textAlign: 'left' }}
        >
          {submitted ? (
            /* success state */
            <div
              style={{
                padding: '48px 40px',
                border: '1px solid var(--line)',
                borderRadius: 16,
                background: 'rgba(212,255,90,.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                textAlign: 'center',
              }}
            >
              {/* checkmark */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="var(--accent)" strokeWidth="1.5" />
                <path
                  d="M12 20 L17.5 25.5 L28 14"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p style={{ fontSize: 22, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                {contact.form.successTitle}
              </p>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                {contact.form.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* name + email row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 12,
                }}
              >
                <Field
                  placeholder={contact.form.namePlaceholder}
                  value={name}
                  onChange={setName}
                />
                <Field
                  type="email"
                  placeholder={contact.form.emailPlaceholder}
                  value={email}
                  onChange={setEmail}
                />
              </div>

              {/* service interest */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-3)',
                    marginBottom: 10,
                  }}
                >
                  {contact.form.servicesLabel}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {serviceNames.map((title) => {
                    const active = selected.includes(title)
                    return (
                      <button
                        key={title}
                        type="button"
                        onClick={() => toggleService(title)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: 999,
                          fontSize: 13,
                          fontWeight: 500,
                          border: '1px solid',
                          borderColor: active ? 'var(--accent)' : 'var(--line)',
                          background: active ? 'rgba(212,255,90,.12)' : 'transparent',
                          color: active ? 'var(--accent)' : 'var(--ink-2)',
                          cursor: 'pointer',
                          transition: 'all .2s',
                        }}
                      >
                        {title}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* description */}
              <Field
                as="textarea"
                placeholder={contact.form.descriptionPlaceholder}
                value={description}
                onChange={setDescription}
              />

              {/* submit */}
              <button
                type="submit"
                disabled={sending}
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 500,
                  background: sending ? 'rgba(212,255,90,.5)' : 'var(--accent)',
                  color: 'var(--accent-ink)',
                  border: 'none',
                  cursor: sending ? 'not-allowed' : 'pointer',
                  transition: 'transform .2s, background .2s',
                }}
                onMouseEnter={(e) => {
                  if (!sending)
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.transform = ''
                }}
              >
                {sending ? (
                  /* spinner */
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
                    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 10.5 L10.5 2.5 M4 2.5 h6.5 v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {contact.form.submit}
              </button>

            </form>
          )}
        </motion.div>

        {/* email fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 28, fontSize: 13, color: 'var(--ink-3)' }}
        >
          or{' '}
          <a
            href="mailto:hello@tinmelia.studio"
            style={{ color: 'var(--ink-2)', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            hello@tinmelia.studio
          </a>
        </motion.p>
      </div>
    </section>
  )
}
