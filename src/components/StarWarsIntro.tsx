'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

// Star field component with zoom effect
const StarField = ({ onZoomComplete }: { onZoomComplete: () => void }) => {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const { camera } = useThree()
  const [zoomStarted, setZoomStarted] = useState(false)
  
  useEffect(() => {
    // Set initial camera position
    camera.position.z = 50
    
    // Start zoom effect after a short delay
    const timer = setTimeout(() => {
      setZoomStarted(true)
      
      // Create zoom animation
      gsap.to(camera.position, {
        z: -1000,
        duration: 4,
        ease: "power2.in",
        onComplete: onZoomComplete
      })
      
      // Increase FOV for more dramatic effect
      gsap.to(camera, {
        fov: 120,
        duration: 4,
        ease: "power2.in",
        onUpdate: () => camera.updateProjectionMatrix()
      })
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [camera, onZoomComplete])
  
  // Create star particles
  useEffect(() => {
    if (!particlesRef.current) return
    
    // Create star particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    
    // Generate 5000 stars in a 3D space
    for (let i = 0; i < 5000; i++) {
      // Create stars in a cylindrical formation to enhance the zoom effect
      const radius = THREE.MathUtils.randFloat(50, 1000)
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2)
      const y = THREE.MathUtils.randFloat(-500, 500)
      
      const x = radius * Math.cos(theta)
      const z = radius * Math.sin(theta)
      
      vertices.push(x, y, z)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    
    // Update the points material
    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0xffffff,
      sizeAttenuation: true
    })
    
    // Apply to the points object
    particlesRef.current.geometry = geometry
    particlesRef.current.material = material
  }, [])
  
  // Rotate stars slightly for more dynamic effect
  useFrame(({ clock }) => {
    if (groupRef.current && !zoomStarted) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <group ref={groupRef}>
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial size={2} color="#ffffff" />
      </points>
    </group>
  )
}

export default function StarWarsIntro({ onComplete }: { onComplete: () => void }) {
  // Handle star zoom completion
  const handleZoomComplete = () => {
    onComplete()
  }
  
  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Star field with zoom effect */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <StarField onZoomComplete={handleZoomComplete} />
        </Canvas>
      </div>
    </div>
  )
} 