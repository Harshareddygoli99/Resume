'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

// Skill category interface
interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
  icon: JSX.Element;
}

// Updated skill categories based on user requirements
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'TypeScript', level: 80, icon: 'TS' },
      { name: 'Tailwind CSS', level: 80, icon: '🌊' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Backend Development',
    skills: [
      { name: 'Java (Spring Boot)', level: 90, icon: '☕' },
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Python (Django/Flask)', level: 75, icon: '🐍' },
      { name: 'REST / GraphQL APIs', level: 85, icon: '🔌' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'AI & Emerging Tech',
    skills: [
      { name: 'AI Integration (LLM, Generative AI)', level: 70, icon: '🧠' },
      { name: 'Python (ML Libraries)', level: 80, icon: '📊' },
      { name: 'TensorFlow / PyTorch', level: 75, icon: '🔥' },
      { name: 'Data Analysis & Visualization', level: 80, icon: '📈' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
        <circle cx="7.5" cy="14.5" r="1.5"></circle>
        <circle cx="16.5" cy="14.5" r="1.5"></circle>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'Kubernetes', level: 75, icon: '☸️' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'CI/CD (Jenkins / GitHub Actions)', level: 85, icon: '🔄' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12.5c0 1.76-1.34 3.23-3.08 3.43-1.5 5.5-6.56 8.14-11.17 6.32-4.6-1.8-7.17-7.12-5.54-11.97.51-1.5.51-3.01 0-4.51C.55 1.41 3.13-3.92 7.72-5.71c4.82-1.88 10.05.94 11.48 6.32C21.08 1.01 22.5 2.5 22.5 4.26"></path>
        <path d="M17 22v-5"></path>
        <path d="M21 22v-5"></path>
        <path d="M22 19h-6"></path>
      </svg>
    ),
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/95 to-dark opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Technologies and frameworks I specialize in
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-xl backdrop-blur-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary mr-4 shadow-lg shadow-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2 items-center">
                      <div className="flex items-center">
                        {skill.icon && (
                          <span className="mr-2 text-lg bg-dark/50 w-8 h-8 flex items-center justify-center rounded-full border border-primary/30 group-hover:border-primary/80 transition-all duration-300">
                            {skill.icon}
                          </span>
                        )}
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark/50 rounded-full h-3 overflow-hidden shadow-inner shadow-black/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="h-3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-x shadow-lg shadow-primary/20"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            I'm always exploring cutting-edge frameworks and AI breakthroughs, ensuring I stay at the forefront of software innovation.
          </p>
          <a href="#projects" className="futuristic-button inline-block">
            See My Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
} 