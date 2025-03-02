'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '../utils/path'

interface Experience {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Associate',
    company: 'Bank Of New York',
    companyLogo: '/images/companies/bny.jpg',
    period: '05/2022 - Present',
    description: 'Oversee enhancements to BNY Mellon\'s Street Suite (WSS), focusing on FX, money market, and derivative trade flows. Collaborate with cross-functional stakeholders to ensure regulatory compliance, real-time data integration, and reliable settlement processes for high-volume trading. Drive technical initiatives by modernizing Java-based microservices, optimizing performance with Spring Boot, Kafka, Docker, and Kubernetes. Maintain secure, scalable infrastructure that supports global Markets & Execution Services operations and meets complex business requirements.',
    skills: [],
  },
  {
    id: 2,
    title: 'Java Developer (Contractor)',
    company: 'Wells Fargo',
    companyLogo: '/images/companies/wellsfargo.png',
    period: '09/2021 – 05/2022',
    description: 'Contributed to the modernization of a high-volume banking application, ensuring alignment with Wells Fargo\'s business objectives and regulatory requirements. Streamlined data processing and enhanced user experiences by migrating legacy components to Java 17 microservices, optimizing MySQL queries, and integrating responsive front-end interfaces. Led CI/CD automation with Docker, Kubernetes, and AWS to accelerate releases and improve system reliability. Collaborated closely with stakeholders to balance performance, functionality, and compliance, driving tangible improvements in application scalability and customer satisfaction.',
    skills: [
    ],
  },
  {
    id: 3,
    title: 'Teaching Assistant',
    company: 'University of North Texas',
    companyLogo: '/images/companies/unt.svg',
    period: '12/2020 - 06/2021',
    description: 'Assisting the professor in grading student projects and programming assignments for Undergraduates, also helping the students in clarifying their queries for the course Computer Science 1 Laboratory (CSCE 1030).Assisting the professor in grading student projects and programming assignments for Undergraduates, also helping the students in clarifying their queries for the course Computer Science 1 Laboratory (CSCE 1030).',
    skills: [],
  },
  {
    id: 4,
    title: 'Junior Developer',
    company: 'OpenText',
    companyLogo: '/images/companies/opentext.png',
    period: '06/2019 - 12/2020',
    description: 'Joined OpenText\'s Engineering team to enhance its Enterprise Content Management (ECM) platform, collaborating closely with QA and product teams to validate features and maintain high-quality releases. Focused on front-end performance by optimizing Angular and jQuery components—cutting page load times—and improving overall user engagement. Assisted in back-end Java and Spring Boot tasks, implementing core features, debugging issues, and writing unit tests to ensure stable, efficient performance. Gained valuable experience in Agile workflows, code reviews, and best practices for delivering reliable software in a fast-paced development environment.',
    skills: [],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95 opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            My professional journey and career highlights
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-[#10b981] rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark z-10"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-panel p-6 rounded-xl hover:shadow-primary/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      {exp.companyLogo && (
                        <div className="rounded-md bg-white p-1 flex items-center justify-center w-12 h-12 shrink-0">
                          <Image
                            src={getAssetPath(exp.companyLogo)}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                            priority
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 