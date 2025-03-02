'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { getAssetPath } from '../utils/path'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark opacity-80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300">
              Get to know me and my journey in the world of technology and design.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden glass-panel flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-0"></div>
                <img 
                  src={getAssetPath("/images/Face.jpeg")} 
                  alt="Profile" 
                  className="rounded-full w-64 h-64 object-cover border-4 border-primary shadow-lg" 
                />
              </div>
              
              <div className="mt-6 text-center">
                <motion.a 
                  href="/resume/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="futuristic-button inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View Resume
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Full Stack Java Developer & AI Enthusiast
              </h3>
              
              <p className="text-gray-300 mb-6">
                Hello there! I'm Harsha Vardhan Reddy Goli, a software developer with a strong focus on building robust, user-friendly applications that solve real-world challenges. My skill set spans front-end and back-end technologies, allowing me to craft end-to-end solutions that are efficient, scalable, and maintainable. I thrive on tackling complex problems, optimizing performance, and collaborating with cross-functional teams to deliver software that resonates with both users and stakeholders.
              </p>
              
              <p className="text-gray-300 mb-6">
                Outside of my core development work, I have a keen interest in AI. While my day-to-day involves coding, architecture design, and performance tuning, I'm always excited to see how emerging AI tools and machine learning techniques can enhance existing applications—be it through streamlined data insights, automation, or improved user experiences. I stay updated on the latest industry trends, eager to integrate forward-thinking solutions wherever they can make a tangible impact.
              </p>
              
              <a href="#contact" className="futuristic-button inline-block">
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 