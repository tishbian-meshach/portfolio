"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({ children, className, glowColor = "#38bdf8" }: GlowingCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/50 bg-transparent",
        className,
      )}
    >
      {/* Glowing background effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}15, transparent 40%)`,
        }}
      />

      {/* Border glow effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          opacity: opacity * 0.5,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${glowColor}40, transparent 40%)`,
          filter: "blur(1px)",
        }}
      />

      {/* Inner glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300"
        style={{
          opacity: opacity * 0.3,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, ${glowColor}20, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
