'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamically import components to reduce initial load time
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'))
const About = dynamic(() => import('@/components/About'))
const Experience = dynamic(() => import('@/components/Experience'))
const Skills = dynamic(() => import('@/components/Skills'))
const Projects = dynamic(() => import('@/components/Projects'))
const Contact = dynamic(() => import('@/components/Contact'))
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false })
const StarWarsIntro = dynamic(() => import('@/components/StarWarsIntro'), { ssr: false })

export default function Home() {
  const [isIntroPlaying, setIsIntroPlaying] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle intro completion
  const handleIntroComplete = () => {
    setIsIntroPlaying(false)
  }

  return (
    <>
      {/* Only render the Star Wars intro on client side */}
      {isClient && isIntroPlaying && (
        <StarWarsIntro onComplete={handleIntroComplete} />
      )}
      
      <main className={`min-h-screen relative transition-opacity duration-1000 ${isIntroPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
} 