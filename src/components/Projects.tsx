'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  title: string
  category: string
  color: string
  description: string
  technologies: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    color: 'from-blue-500 to-indigo-600',
    description: 'A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Web Application',
    color: 'from-purple-500 to-pink-600',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    color: 'from-green-500 to-teal-600',
    description: 'A creative portfolio website with smooth animations, interactive elements, and responsive design for optimal viewing on all devices.',
    technologies: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Web Application',
    color: 'from-cyan-500 to-blue-600',
    description: 'A weather dashboard that displays current conditions and forecasts for multiple locations, with interactive maps and data visualization.',
    technologies: ['React', 'Chart.js', 'Weather API', 'Mapbox'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media App',
    category: 'Mobile Development',
    color: 'from-orange-500 to-red-600',
    description: 'A social media application with features like user profiles, posts, comments, likes, and real-time notifications.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'AI Image Generator',
    category: 'AI/ML',
    color: 'from-yellow-500 to-amber-600',
    description: 'An AI-powered image generation tool that creates unique images based on text prompts using machine learning models.',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    link: '#',
    github: '#',
  },
]

const categories = [
  'All',
  'Web Development',
  'Web Application',
  'UI/UX Design',
  'Mobile Development',
  'AI/ML',
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/90 opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Showcasing my recent work and creative projects
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-dark/50 text-gray-300 hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="glass-panel rounded-xl overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/70 font-medium z-5">
                    Project Preview
                  </div>
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 bg-primary/80 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="skill-tag text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-300 hover:text-white text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-300">No projects found in this category.</p>
          </motion.div>
        )}
        
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="glass-panel rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/70 text-xl font-medium">
                    {selectedProject.title} Preview
                  </div>
                  <button
                    className="absolute top-4 right-4 bg-dark/50 p-2 rounded-full"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      className="futuristic-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      className="px-6 py-3 rounded-full border border-primary/50 hover:border-primary transition-all duration-300 text-white font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 