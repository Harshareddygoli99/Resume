'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { gsap } from 'gsap'
import * as THREE from 'three'
import dynamic from 'next/dynamic'

// Dynamically import the cursor component with no SSR
const FuturisticCursor = dynamic(() => import('./FuturisticCursor'), { 
  ssr: false 
})

// Import GSAP TextPlugin for typing animation
import { TextPlugin } from 'gsap/TextPlugin'

// Register TextPlugin
gsap.registerPlugin(TextPlugin)

// Star field component for the background
const StarField = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [cursorColor, setCursorColor] = useState('#0070f3')
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  
  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    // Create a GSAP timeline for text animation
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate the text with a typing effect
    tl.to(textRef.current, {
      duration: 2,
      text: {
        value: "🧠 AI Enthusiast.",
        delimiter: "",
      },
      ease: "none",
      onUpdate: () => setTypingText("🧠 AI Enthusiast."),
      onComplete: () => setIsTyping(false)
    })
    .to({}, { duration: 1.5, onComplete: () => setIsTyping(true) })
    .to(textRef.current, {
      duration: 2,
      text: {
        value: "💻 Software Developer.",
        delimiter: "",
      },
      ease: "none",
      onUpdate: () => setTypingText("💻 Software Developer."),
      onComplete: () => setIsTyping(false)
    })
    .to({}, { duration: 1.5, onComplete: () => setIsTyping(true) })
    .to(textRef.current, {
      duration: 2,
      text: {
        value: "🚀 Tech Innovator.",
        delimiter: "",
      },
      ease: "none",
      onUpdate: () => setTypingText("🚀 Tech Innovator."),
      onComplete: () => setIsTyping(false)
    })
    .to({}, { duration: 1.5, onComplete: () => setIsTyping(true) });

    // Add color change effect for cursor on hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('text-primary')) {
        setCursorColor('#6b21a8'); // Purple for name hover
      } else if (target.closest('.futuristic-button')) {
        setCursorColor('#00ff9d'); // Green for button hover
      }
    };

    const handleMouseOut = () => {
      setCursorColor('#0070f3'); // Reset to default blue
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      tl.kill();
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    }
  }, [])

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Futuristic Cursor - only render on client side */}
      {isMounted && (
        <FuturisticCursor 
          color={cursorColor}
          hoverScale={2.5}
          clickScale={0.8}
          size={20}
          trailCount={6}
          trailDelay={0.05}
        />
      )}
      
      {/* Cosmic background with CSS stars */}
      <div className="absolute inset-0 cosmic-bg z-0">
        <div className="stars"></div>
      </div>
      
      <div ref={containerRef} className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 neon-text hoverable"
        >
          <span className="block mb-2">Hello, I'm</span>
          <span className="text-primary block mb-2">Harsha</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-2xl md:text-3xl font-light mb-8 h-8 hoverable flex items-center justify-center"
        >
          <span ref={textRef} className="inline-block min-h-[1.5em] min-w-[250px]">{typingText}</span>
          <span className={`typing-cursor ${isTyping ? '' : 'typing-cursor-pause'}`}>|</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#about" className="futuristic-button hoverable">
            Explore My Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-primary/50 hover:border-primary transition-all duration-300 text-white font-medium hoverable">
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      {/* 3D scene with stars */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <StarField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-white hoverable"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
} 