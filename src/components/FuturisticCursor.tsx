'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

interface FuturisticCursorProps {
  color?: string
  hoverScale?: number
  clickScale?: number
  size?: number
  trailCount?: number
  trailDelay?: number
}

export default function FuturisticCursor({
  color = '#0070f3',
  hoverScale = 2.5,
  clickScale = 0.8,
  size = 20,
  trailCount = 6,
  trailDelay = 0.05
}: FuturisticCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const rippleContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })
  
  // Initialize trail refs
  useEffect(() => {
    trailRefs.current = Array(trailCount).fill(null)
  }, [trailCount])

  // Create ripple effect on click
  const createRipple = (x: number, y: number) => {
    if (!rippleContainerRef.current) return
    
    // Create ripple element
    const ripple = document.createElement('div')
    ripple.className = 'cursor-ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.borderColor = color
    
    // Add to container
    rippleContainerRef.current.appendChild(ripple)
    
    // Animate and remove
    gsap.to(ripple, {
      scale: 5,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        if (rippleContainerRef.current && ripple.parentNode === rippleContainerRef.current) {
          rippleContainerRef.current.removeChild(ripple)
        }
      }
    })
  }

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorRing = cursorRingRef.current
    if (!cursor || !cursorRing) return

    // Hide default cursor
    document.body.style.cursor = 'none'
    
    // Show custom cursor after a short delay (prevents flash on page load)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      // Animate cursor to mouse position
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      
      // Animate cursor ring with slight delay for smooth effect
      gsap.to(cursorRing, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      })
      
      // Animate trails with increasing delay
      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          gsap.to(trail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            delay: trailDelay * (index + 1),
            ease: 'power2.out'
          })
        }
      })
    }
    
    // Handle mouse down
    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      setClickPosition({ x: e.clientX, y: e.clientY })
      
      // Create ripple effect
      createRipple(e.clientX, e.clientY)
      
      // Scale down cursor on click
      gsap.to(cursor, {
        scale: clickScale,
        duration: 0.2,
        ease: 'power2.out'
      })
      
      // Scale up ring on click
      gsap.to(cursorRing, {
        scale: 1.5,
        opacity: 0.5,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
    
    // Handle mouse up
    const onMouseUp = () => {
      setIsClicking(false)
      
      // Reset cursor scale
      gsap.to(cursor, {
        scale: isHovering ? hoverScale : 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      
      // Reset ring scale
      gsap.to(cursorRing, {
        scale: isHovering ? 1.5 : 1,
        opacity: isHovering ? 0.5 : 0.3,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
    
    // Handle hover states
    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('hoverable')) {
        setIsHovering(true)
        
        // Scale up cursor on hover
        gsap.to(cursor, {
          scale: hoverScale,
          duration: 0.3,
          ease: 'power2.out'
        })
        
        // Scale up ring on hover
        gsap.to(cursorRing, {
          scale: 1.5,
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }
    
    // Handle hover end
    const onMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('hoverable')) {
        setIsHovering(false)
        
        // Reset cursor scale
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        
        // Reset ring scale
        gsap.to(cursorRing, {
          scale: 1,
          opacity: 0.3,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }
    
    // Handle cursor visibility when leaving/entering window
    const onMouseEnterWindow = () => {
      gsap.to([cursor, cursorRing, ...trailRefs.current], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
    
    const onMouseLeaveWindow = () => {
      gsap.to([cursor, cursorRing, ...trailRefs.current], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseEnter)
    document.addEventListener('mouseout', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnterWindow)
    document.addEventListener('mouseleave', onMouseLeaveWindow)

    // Clean up
    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseEnter)
      document.removeEventListener('mouseout', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      clearTimeout(timer)
    }
  }, [isHovering, hoverScale, clickScale, trailDelay, color])

  // Function to set trail refs properly
  const setTrailRef = (index: number) => (el: HTMLDivElement | null) => {
    trailRefs.current[index] = el
  }

  return (
    <>
      <div className={`cursor-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main cursor dot */}
        <div 
          ref={cursorRef}
          className="cursor-dot"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
          }}
        />
        
        {/* Cursor ring */}
        <div 
          ref={cursorRingRef}
          className="cursor-ring"
          style={{
            width: `${size * 2}px`,
            height: `${size * 2}px`,
            borderColor: color,
          }}
        />
        
        {/* Cursor trails */}
        {Array.from({ length: trailCount }).map((_, index) => (
          <div
            key={index}
            ref={setTrailRef(index)}
            className="cursor-trail"
            style={{
              width: `${size * (1 - (index * 0.1))}px`,
              height: `${size * (1 - (index * 0.1))}px`,
              backgroundColor: color,
              opacity: 0.1 - (index * 0.01),
            }}
          />
        ))}
      </div>
      
      {/* Container for ripple effects */}
      <div ref={rippleContainerRef} className="ripple-container" />
    </>
  )
} 