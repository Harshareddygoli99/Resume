'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    
    // Create background stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 3000
    
    const starsPositions = new Float32Array(starsCount * 3)
    const starsColors = new Float32Array(starsCount * 3)
    
    // Position and color for background stars
    for (let i = 0; i < starsCount * 3; i += 3) {
      // Positions - random in a sphere
      starsPositions[i] = (Math.random() - 0.5) * 15
      starsPositions[i + 1] = (Math.random() - 0.5) * 15
      starsPositions[i + 2] = (Math.random() - 0.5) * 15
      
      // Colors - white to slight yellow for stars
      const brightness = Math.random() * 0.2 + 0.8
      starsColors[i] = brightness // R
      starsColors[i + 1] = brightness // G
      starsColors[i + 2] = brightness * (Math.random() * 0.3 + 0.7) // B (slightly less for yellowish tint)
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3))
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3))
    
    // Stars material
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })
    
    // Stars mesh
    const starsMesh = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(starsMesh)
    
    // Create Milky Way galaxy effect
    const galaxyGeometry = new THREE.BufferGeometry()
    const galaxyParticlesCount = 5000
    
    const galaxyPositions = new Float32Array(galaxyParticlesCount * 3)
    const galaxyColors = new Float32Array(galaxyParticlesCount * 3)
    
    // Create spiral galaxy pattern
    for (let i = 0; i < galaxyParticlesCount * 3; i += 3) {
      // Create spiral arms
      const radius = THREE.MathUtils.randFloat(1, 5)
      const spinAngle = radius * 2.5
      const branchAngle = (Math.floor(Math.random() * 4)) * (Math.PI * 2) / 4
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.1
      
      galaxyPositions[i] = Math.cos(spinAngle + branchAngle) * radius + randomX
      galaxyPositions[i + 1] = randomY
      galaxyPositions[i + 2] = Math.sin(spinAngle + branchAngle) * radius + randomZ
      
      // Colors - white/blue in center, more yellowish/reddish at edges
      const distanceFromCenter = Math.sqrt(
        Math.pow(galaxyPositions[i], 2) + 
        Math.pow(galaxyPositions[i + 1], 2) + 
        Math.pow(galaxyPositions[i + 2], 2)
      )
      
      // Color gradient from center to edge
      if (distanceFromCenter < 1.5) {
        // Center: white/blue
        galaxyColors[i] = 0.8 + Math.random() * 0.2 // R
        galaxyColors[i + 1] = 0.8 + Math.random() * 0.2 // G
        galaxyColors[i + 2] = 0.9 + Math.random() * 0.1 // B
      } else if (distanceFromCenter < 3) {
        // Middle: yellowish
        galaxyColors[i] = 0.8 + Math.random() * 0.2 // R
        galaxyColors[i + 1] = 0.7 + Math.random() * 0.3 // G
        galaxyColors[i + 2] = 0.4 + Math.random() * 0.3 // B
      } else {
        // Outer: reddish
        galaxyColors[i] = 0.7 + Math.random() * 0.3 // R
        galaxyColors[i + 1] = 0.3 + Math.random() * 0.3 // G
        galaxyColors[i + 2] = 0.2 + Math.random() * 0.2 // B
      }
    }
    
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3))
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3))
    
    // Galaxy material
    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    })
    
    // Galaxy mesh
    const galaxyMesh = new THREE.Points(galaxyGeometry, galaxyMaterial)
    // Rotate to show the galaxy from a nice angle
    galaxyMesh.rotation.x = Math.PI / 6
    scene.add(galaxyMesh)
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate stars slowly
      starsMesh.rotation.x += 0.0002
      starsMesh.rotation.y += 0.0002
      
      // Rotate galaxy more slowly
      galaxyMesh.rotation.z += 0.0001
      
      // Add subtle mouse interaction
      starsMesh.rotation.x += mouseY * 0.0002
      starsMesh.rotation.y += mouseX * 0.0002
      galaxyMesh.rotation.z += mouseX * 0.00005
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
      starsGeometry.dispose()
      starsMaterial.dispose()
      galaxyGeometry.dispose()
      galaxyMaterial.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
} 