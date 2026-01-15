"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MagicCardProps {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#38bdf8",
  gradientOpacity = 0.1,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-xl border border-gray-800 bg-gray-900/10 backdrop-blur-sm transition-all duration-300",
        "hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-400/10",
        className,
      )}
    >
      {/* Magic gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(${gradientSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}${Math.round(
                gradientOpacity * 255,
              ).toString(16)}, transparent 80%)`
            : "none",
        }}
      />

      

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Corner highlights */}
      <div className="absolute top-0 left-0 h-px w-20 bg-gradient-to-r from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 h-20 w-px bg-gradient-to-b from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 h-px w-20 bg-gradient-to-l from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 h-20 w-px bg-gradient-to-t from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
