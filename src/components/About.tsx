// src/components/About.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 80, suffix: '+', label: 'Happy Clients' },
  { value: 24, suffix: '', label: 'Team Members' },
]

function StatCounter({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = Date.now()
    const end = stat.value

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border-l-2 pl-6"
      style={{ borderColor: '#2D6FFF' }}
    >
      <div
        className="font-heading font-bold leading-none mb-1"
        style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#2D6FFF' }}
      >
        {count}
        {stat.suffix}
      </div>
      <p className="font-body text-white/50 text-base">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 px-4" style={{ background: '#080c18' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: '#2D6FFF' }}
            >
              About Us
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              A team built for the digital frontier.
            </h2>
            <p className="font-body text-white/55 leading-relaxed mb-5 text-base">
              We are a multidisciplinary agency combining engineering precision with creative
              vision. Our team brings together developers, designers, strategists, and
              storytellers passionate about building products that matter.
            </p>
            <p className="font-body text-white/55 leading-relaxed text-base">
              From concept to launch, we partner with forward-thinking companies to create
              solutions that are as beautiful as they are functional — whether that&apos;s a
              scalable software platform, a bold brand identity, or a viral content campaign.
            </p>

            <motion.a
              href="#contact"
              className="inline-block mt-9 px-6 py-3 rounded-full font-heading font-semibold text-sm"
              style={{ border: '1.5px solid #2D6FFF', color: '#2D6FFF' }}
              whileHover={{ backgroundColor: '#2D6FFF', color: '#ffffff', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Work With Us →
            </motion.a>
          </motion.div>

          {/* right — stats */}
          <div className="flex flex-col gap-10">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
