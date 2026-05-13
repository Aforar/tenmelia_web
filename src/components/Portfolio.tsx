// src/components/Portfolio.tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { number: '01', category: 'IT Solutions', name: 'CloudSync Platform', color: '#2D6FFF' },
  { number: '02', category: 'Design', name: 'Lumina Brand Identity', color: '#5050FF' },
  { number: '03', category: 'Social Media', name: 'Pulse Growth Campaign', color: '#4070FF' },
  { number: '04', category: 'Photo & Video', name: 'Apex Product Film', color: '#3060FF' },
  { number: '05', category: 'IT Solutions', name: 'NexaCore API Suite', color: '#2050FF' },
  { number: '06', category: 'Design', name: 'Orbit UI System', color: '#6040FF' },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.article
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer"
      style={{
        width: 300,
        height: 400,
        background: `linear-gradient(145deg, ${project.color}18 0%, rgba(10,15,30,0.92) 100%)`,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.02,
        borderColor: `${project.color}55`,
      }}
    >
      {/* inner glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${project.color}25 0%, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 p-7 flex flex-col justify-between">
        <span
          className="font-heading font-bold leading-none select-none"
          style={{ fontSize: '5.5rem', color: `${project.color}30` }}
        >
          {project.number}
        </span>

        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold mb-4"
            style={{
              background: `${project.color}18`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            {project.category}
          </span>
          <h3 className="font-heading font-bold text-white text-2xl leading-tight mb-2">
            {project.name}
          </h3>
          <p className="font-body text-white/35 text-sm leading-relaxed">
            Placeholder project — key deliverables, timeline, and outcomes go here.
          </p>

          <motion.div
            className="mt-5 flex items-center gap-2 font-heading text-sm font-semibold"
            style={{ color: project.color }}
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            View Project →
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="portfolio" className="py-28 overflow-hidden" style={{ background: '#0A0F1E' }}>
      <div className="px-4 mb-14">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#2D6FFF' }}
            >
              Our Work
            </p>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Selected Projects
            </h2>
          </motion.div>
        </div>
      </div>

      {/* horizontal scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-8"
        style={{
          paddingLeft: 'max(1rem, calc((100vw - 1200px) / 2))',
          paddingRight: 'max(1rem, calc((100vw - 1200px) / 2))',
          scrollbarWidth: 'thin',
          scrollbarColor: '#2D6FFF #0A0F1E',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
