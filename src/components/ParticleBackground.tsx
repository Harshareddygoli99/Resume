'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shootingStars, setShootingStars] = useState<{top: number, left: number, delay: number}[]>([])

  useEffect(() => {
    // Generate random shooting stars
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 15
      })
    }
    setShootingStars(stars)
  }, [])

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
    
    // Create star texture
    const createStarTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = canvas.width / 4
      
      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      )
      
      // Add color stops
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)')
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add cross glow
      ctx.globalCompositeOperation = 'lighter'
      
      // Horizontal line
      const lineGradient = ctx.createLinearGradient(
        centerX - radius, centerY,
        centerX + radius, centerY
      )
      lineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      lineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)')
      lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.strokeStyle = lineGradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(centerX - radius, centerY)
      ctx.lineTo(centerX + radius, centerY)
      ctx.stroke()
      
      // Vertical line
      const vertGradient = ctx.createLinearGradient(
        centerX, centerY - radius,
        centerX, centerY + radius
      )
      vertGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      vertGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)')
      vertGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.strokeStyle = vertGradient
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - radius)
      ctx.lineTo(centerX, centerY + radius)
      ctx.stroke()
      
      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }
    
    // Create galaxy particle texture
    const createGalaxyTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = canvas.width / 4
      
      // Draw galaxy particle (softer, more diffuse)
      const galaxyGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      )
      
      // Add color stops for a softer particle
      galaxyGradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      galaxyGradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.6)')
      galaxyGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)')
      galaxyGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      // Fill with gradient
      ctx.fillStyle = galaxyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }
    
    // Create textures
    const starTexture = createStarTexture()
    const galaxyTexture = createGalaxyTexture()
    
    // Create background stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 5000 // Increased star count
    
    const starsPositions = new Float32Array(starsCount * 3)
    const starsColors = new Float32Array(starsCount * 3)
    const starsSizes = new Float32Array(starsCount)
    
    // Position and color for background stars
    for (let i = 0; i < starsCount * 3; i += 3) {
      // Positions - random in a sphere
      starsPositions[i] = (Math.random() - 0.5) * 20 // Wider distribution
      starsPositions[i + 1] = (Math.random() - 0.5) * 20
      starsPositions[i + 2] = (Math.random() - 0.5) * 20
      
      // Colors - white to slight blue/purple for stars
      const brightness = Math.random() * 0.2 + 0.8
      starsColors[i] = brightness * (Math.random() * 0.2 + 0.8) // R (slightly less for blueish tint)
      starsColors[i + 1] = brightness * (Math.random() * 0.2 + 0.8) // G (slightly less for blueish tint)
      starsColors[i + 2] = brightness // B
      
      // Random sizes for stars
      starsSizes[i/3] = Math.random() * 2 + 0.5
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3))
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3))
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1))
    
    // Stars material with custom shader for better star appearance
    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: starTexture }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
          if (gl_FragColor.a < 0.3) discard;
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true
    });
    
    // Stars mesh
    const starsMesh = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(starsMesh)
    
    // Create distant stars (smaller, more numerous)
    const distantStarsGeometry = new THREE.BufferGeometry()
    const distantStarsCount = 10000
    
    const distantStarsPositions = new Float32Array(distantStarsCount * 3)
    const distantStarsColors = new Float32Array(distantStarsCount * 3)
    
    // Position and color for distant stars
    for (let i = 0; i < distantStarsCount * 3; i += 3) {
      // Positions - random in a larger sphere
      distantStarsPositions[i] = (Math.random() - 0.5) * 50
      distantStarsPositions[i + 1] = (Math.random() - 0.5) * 50
      distantStarsPositions[i + 2] = (Math.random() - 0.5) * 50
      
      // Colors - dimmer for distant stars
      const brightness = Math.random() * 0.3 + 0.5
      distantStarsColors[i] = brightness
      distantStarsColors[i + 1] = brightness
      distantStarsColors[i + 2] = brightness
    }
    
    distantStarsGeometry.setAttribute('position', new THREE.BufferAttribute(distantStarsPositions, 3))
    distantStarsGeometry.setAttribute('color', new THREE.BufferAttribute(distantStarsColors, 3))
    
    // Distant stars material
    const distantStarsMaterial = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    })
    
    // Distant stars mesh
    const distantStarsMesh = new THREE.Points(distantStarsGeometry, distantStarsMaterial)
    scene.add(distantStarsMesh)
    
    // Create Milky Way galaxy effect
    const galaxyGeometry = new THREE.BufferGeometry()
    const galaxyParticlesCount = 8000 // Increased particle count
    
    const galaxyPositions = new Float32Array(galaxyParticlesCount * 3)
    const galaxyColors = new Float32Array(galaxyParticlesCount * 3)
    const galaxySizes = new Float32Array(galaxyParticlesCount)
    
    // Create spiral galaxy pattern
    for (let i = 0; i < galaxyParticlesCount * 3; i += 3) {
      // Create spiral arms with more defined structure
      const radius = THREE.MathUtils.randFloat(1, 8) // Larger galaxy
      const branchCount = 5 // Number of spiral arms
      const spinAngle = radius * 2.5
      const branchAngle = (Math.floor(Math.random() * branchCount)) * (Math.PI * 2) / branchCount
      
      // Add randomness to create more natural look
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius / 5
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.1 * radius / 5
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.1 * radius / 5
      
      galaxyPositions[i] = Math.cos(spinAngle + branchAngle) * radius + randomX
      galaxyPositions[i + 1] = randomY
      galaxyPositions[i + 2] = Math.sin(spinAngle + branchAngle) * radius + randomZ
      
      // Colors - white/blue in center, more yellowish/reddish at edges
      const distanceFromCenter = Math.sqrt(
        Math.pow(galaxyPositions[i], 2) + 
        Math.pow(galaxyPositions[i + 1], 2) + 
        Math.pow(galaxyPositions[i + 2], 2)
      )
      
      // Color gradient from center to edge with more vibrant colors
      if (distanceFromCenter < 1.5) {
        // Center: white/blue
        galaxyColors[i] = 0.7 + Math.random() * 0.3 // R
        galaxyColors[i + 1] = 0.7 + Math.random() * 0.3 // G
        galaxyColors[i + 2] = 0.9 + Math.random() * 0.1 // B
      } else if (distanceFromCenter < 4) {
        // Middle: purplish/blue
        galaxyColors[i] = 0.5 + Math.random() * 0.3 // R
        galaxyColors[i + 1] = 0.3 + Math.random() * 0.3 // G
        galaxyColors[i + 2] = 0.8 + Math.random() * 0.2 // B
      } else if (distanceFromCenter < 6) {
        // Outer middle: yellowish
        galaxyColors[i] = 0.8 + Math.random() * 0.2 // R
        galaxyColors[i + 1] = 0.7 + Math.random() * 0.3 // G
        galaxyColors[i + 2] = 0.3 + Math.random() * 0.3 // B
      } else {
        // Outer: reddish
        galaxyColors[i] = 0.8 + Math.random() * 0.2 // R
        galaxyColors[i + 1] = 0.2 + Math.random() * 0.2 // G
        galaxyColors[i + 2] = 0.2 + Math.random() * 0.2 // B
      }
      
      // Particle sizes - larger in center, smaller at edges
      galaxySizes[i/3] = Math.max(0.02, 0.06 - distanceFromCenter * 0.005)
    }
    
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3))
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3))
    galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(galaxySizes, 1))
    
    // Galaxy material with custom shader for better particle appearance
    const galaxyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: galaxyTexture }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
          if (gl_FragColor.a < 0.3) discard;
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true
    });
    
    // Galaxy mesh
    const galaxyMesh = new THREE.Points(galaxyGeometry, galaxyMaterial)
    // Rotate to show the galaxy from a nice angle
    galaxyMesh.rotation.x = Math.PI / 6
    scene.add(galaxyMesh)
    
    // Create cosmic dust/nebula effect
    const nebulaGeometry = new THREE.BufferGeometry()
    const nebulaParticlesCount = 1000
    
    const nebulaPositions = new Float32Array(nebulaParticlesCount * 3)
    const nebulaColors = new Float32Array(nebulaParticlesCount * 3)
    const nebulaSizes = new Float32Array(nebulaParticlesCount)
    
    // Create nebula pattern
    for (let i = 0; i < nebulaParticlesCount * 3; i += 3) {
      // Create cloud-like formations
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 5
      
      nebulaPositions[i] = Math.cos(angle) * radius
      nebulaPositions[i + 1] = (Math.random() - 0.5) * 2
      nebulaPositions[i + 2] = Math.sin(angle) * radius
      
      // Colors - purples and blues for nebula
      nebulaColors[i] = 0.5 + Math.random() * 0.2 // R
      nebulaColors[i + 1] = 0.2 + Math.random() * 0.2 // G
      nebulaColors[i + 2] = 0.7 + Math.random() * 0.3 // B
      
      // Larger particles for nebula effect
      nebulaSizes[i/3] = Math.random() * 0.2 + 0.1
    }
    
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3))
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3))
    nebulaGeometry.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1))
    
    // Nebula material
    const nebulaMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    })
    
    // Nebula mesh
    const nebulaMesh = new THREE.Points(nebulaGeometry, nebulaMaterial)
    nebulaMesh.rotation.x = Math.PI / 8
    scene.add(nebulaMesh)
    
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
      starsMesh.rotation.x += 0.0001
      starsMesh.rotation.y += 0.0001
      
      // Rotate distant stars even more slowly
      distantStarsMesh.rotation.x += 0.00005
      distantStarsMesh.rotation.y += 0.00005
      
      // Rotate galaxy more slowly
      galaxyMesh.rotation.z += 0.0001
      
      // Rotate nebula
      nebulaMesh.rotation.z += 0.00015
      
      // Add subtle mouse interaction
      starsMesh.rotation.x += mouseY * 0.0001
      starsMesh.rotation.y += mouseX * 0.0001
      galaxyMesh.rotation.z += mouseX * 0.00003
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
      starsGeometry.dispose()
      distantStarsGeometry.dispose()
      galaxyGeometry.dispose()
      nebulaGeometry.dispose()
      if (starTexture) starTexture.dispose()
      if (galaxyTexture) galaxyTexture.dispose()
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" style={{ pointerEvents: 'none' }} />
      
      {/* Add shooting stars */}
      {shootingStars.map((star, index) => (
        <div 
          key={index}
          className="shooting-star"
          style={{
            '--top': star.top,
            '--left': star.left,
            '--delay': star.delay
          } as React.CSSProperties}
        />
      ))}
      
      {/* Add additional star layers */}
      <div className="stars-distant" />
    </div>
  )
} 