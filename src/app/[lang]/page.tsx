// src/app/[lang]/page.tsx
'use client'

import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Why from '@/components/Why'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Canvas-based components must skip SSR
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Services = dynamic(() => import('@/components/Services'), { ssr: false })

export default function LangPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
