"use client"

import { useEffect, useRef, useCallback } from "react"

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const isVisibleRef = useRef(false)

  const animate = useCallback(() => {
    // Smooth interpolation (lerp) for natural movement
    positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15
    positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.x - 16}px, ${positionRef.current.y - 16}px, 0)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    // Only show cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
      
      if (!isVisibleRef.current && cursorRef.current) {
        cursorRef.current.style.opacity = '1'
        isVisibleRef.current = true
      }
    }

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
        isVisibleRef.current = false
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseout", handleMouseOut)

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [animate])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none will-change-transform"
      style={{
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div className="relative w-full h-full">
        {/* Ping animation */}
        <div className="absolute inset-0 rounded-full border border-white/60 animate-ping" />
        {/* Static circle */}
        <div className="absolute inset-0 rounded-full border border-white/30" />
      </div>
    </div>
  )
}
