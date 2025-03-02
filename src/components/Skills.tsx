'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// Import icons individually
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiSpringboot } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import { SiPytorch } from 'react-icons/si'
import { SiOpenai } from 'react-icons/si'
import { SiHuggingface } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaServer } from 'react-icons/fa'
import { SiGraphql } from 'react-icons/si'
import { SiGrafana } from 'react-icons/si'
import { SiSplunk } from 'react-icons/si'
import { SiPrometheus } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaJenkins } from 'react-icons/fa'
import { SiGithubactions } from 'react-icons/si'
import { FaGitlab } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import { SiApachekafka } from 'react-icons/si'
import { SiTerraform } from 'react-icons/si'
import { SiLangchain } from 'react-icons/si'
import { SiDatabricks } from 'react-icons/si'
import { SiScikitlearn } from 'react-icons/si'
import { SiPandas } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'
import { SiDigitalocean } from 'react-icons/si'
import { FaStar } from 'react-icons/fa'

// Skill interface
interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}

// Star component for cosmic theme
const StarIcon = ({ size = 'md', className = '', pulseDelay = 0 }) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  return (
    <FaStar 
      className={`text-yellow-300 ${sizeClasses[size as keyof typeof sizeClasses]} ${className}`} 
      style={{ 
        animation: `pulse 3s infinite ${pulseDelay}s`,
        filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.8))'
      }} 
    />
  );
};

// Skill categories with icons
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#007396] h-8 w-8" /> },
      { name: 'Python', icon: <FaPython className="text-[#3776AB] h-8 w-8" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] h-8 w-8" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] h-8 w-8" /> },
    ],
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F] h-8 w-8" /> },
      { name: 'React', icon: <FaReact className="text-[#61DAFB] h-8 w-8" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white h-8 w-8" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] h-8 w-8" /> },
      { name: 'Express', icon: <SiExpress className="text-white h-8 w-8" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] h-8 w-8" /> },
    ],
  },
  {
    id: 3,
    title: 'AI & Emerging Tech',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00] h-8 w-8" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C] h-8 w-8" /> },
      { name: 'OpenAI', icon: <SiOpenai className="text-white h-8 w-8" /> },
      { name: 'Hugging Face', icon: <SiHuggingface className="text-[#FFD21E] h-8 w-8" /> },
      { name: 'LangChain', icon: <SiLangchain className="text-[#00A3E0] h-8 w-8" /> },
      { name: 'scikit-learn', icon: <SiScikitlearn className="text-[#F7931E] h-8 w-8" /> },
      { name: 'Pandas', icon: <SiPandas className="text-[#150458] h-8 w-8" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-[#013243] h-8 w-8" /> },
    ],
  },
  {
    id: 4,
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: <FaAws className="text-[#FF9900] h-8 w-8" /> },
      { name: 'Google Cloud', icon: <FaGoogle className="text-[#4285F4] h-8 w-8" /> },
      { name: 'Databricks', icon: <SiDatabricks className="text-[#FF3621] h-8 w-8" /> },
      { name: 'DigitalOcean', icon: <SiDigitalocean className="text-[#0080FF] h-8 w-8" /> },
    ],
  },
  {
    id: 5,
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] h-8 w-8" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] h-8 w-8" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] h-8 w-8" /> },
    ],
  },
  {
    id: 6,
    title: 'Web & API Development',
    skills: [
      { name: 'RESTful APIs', icon: <FaServer className="text-[#0096FF] h-8 w-8" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098] h-8 w-8" /> },
    ],
  },
  {
    id: 7,
    title: 'Monitoring & Performance',
    skills: [
      { name: 'Grafana', icon: <SiGrafana className="text-[#F46800] h-8 w-8" /> },
      { name: 'Splunk', icon: <SiSplunk className="text-[#FF00FF] h-8 w-8" /> },
      { name: 'Prometheus', icon: <SiPrometheus className="text-[#E6522C] h-8 w-8" /> },
    ],
  },
  {
    id: 8,
    title: 'Version Control & CI/CD',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032] h-8 w-8" /> },
      { name: 'Jenkins', icon: <FaJenkins className="text-[#D24939] h-8 w-8" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF] h-8 w-8" /> },
      { name: 'GitLab CI', icon: <FaGitlab className="text-[#FCA121] h-8 w-8" /> },
    ],
  },
  {
    id: 9,
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED] h-8 w-8" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5] h-8 w-8" /> },
      { name: 'Kafka', icon: <SiApachekafka className="text-white h-8 w-8" /> },
      { name: 'Terraform', icon: <SiTerraform className="text-[#7B42BC] h-8 w-8" /> },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [stars, setStars] = useState<{x: number, y: number, size: string, delay: number}[]>([])
  
  // Generate random stars for background
  useEffect(() => {
    const newStars = []
    for (let i = 0; i < 50; i++) {
      newStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 3
      })
    }
    setStars(newStars)
  }, [])
  
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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Galaxy background overlay */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="stars"></div>
      </div>
      
      {/* Random stars */}
      {stars.map((star, index) => (
        <div 
          key={index}
          className="absolute z-10"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        >
          <StarIcon size={star.size} pulseDelay={star.delay} />
        </div>
      ))}
      
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
            Core technologies and frameworks I specialize in
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 0 15px rgba(0, 112, 243, 0.5), 0 0 30px rgba(0, 112, 243, 0.3)', 
                transition: { duration: 0.2 } 
              }}
              className="cosmic-panel p-6 rounded-xl backdrop-blur-lg relative overflow-hidden"
            >
              {/* Star decorations */}
              <div className="absolute top-2 left-2">
                <StarIcon size="sm" />
              </div>
              <div className="absolute top-2 right-2">
                <StarIcon size="sm" />
              </div>
              <div className="absolute bottom-2 left-2">
                <StarIcon size="sm" />
              </div>
              <div className="absolute bottom-2 right-2">
                <StarIcon size="sm" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-star flex flex-col items-center justify-center p-3 transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.05,
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                    }}
                  >
                    <div className="mb-2 transform transition-transform duration-300 group-hover:scale-110 relative">
                      {skill.icon}
                      {/* Star glow effect */}
                      <div className="absolute inset-0 star-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
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
          <a href="#projects" className="cosmic-button inline-block">
            See My Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
} 