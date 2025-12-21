"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  duration: number
}

interface ShootingStarsProps {
  minSpeed?: number
  maxSpeed?: number
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
  className?: string
}

const getRandomStartPoint = () => {
  const startFromTop = Math.random() > 0.5

  if (startFromTop) {
    return {
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth * 0.8 : 800),
      y: -20,
      angle: 135,
    }
  } else {
    return {
      x: -20,
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600),
      angle: 135,
    }
  }
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#38bdf8",
  trailColor = "#a2c3ff",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null)
  const isVisibleRef = useRef(true)
  const containerRef = useRef<SVGSVGElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const createStar = useCallback(() => {
    if (!isVisibleRef.current) {
      // Retry later if not visible
      timeoutRef.current = setTimeout(createStar, 1000)
      return
    }

    const { x, y, angle } = getRandomStartPoint()
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed
    const duration = 2000 / speed // Duration based on speed

    const newStar: ShootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      duration,
    }

    setStar(newStar)

    // Remove star after animation completes
    setTimeout(() => {
      setStar(null)
    }, duration)

    // Schedule next star
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
    timeoutRef.current = setTimeout(createStar, randomDelay)
  }, [minSpeed, maxSpeed, minDelay, maxDelay])

  useEffect(() => {
    // Visibility observer
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Start creating stars
    createStar()

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [createStar])

  return (
    <svg ref={containerRef} className={cn("w-full h-full absolute inset-0 pointer-events-none", className)} style={{ contain: 'strict' }}>
      {star && (
        <g
          key={star.id}
          style={{
            animation: `shootingStar ${star.duration}ms linear forwards`,
          }}
        >
          <rect
            x={star.x}
            y={star.y}
            width={starWidth}
            height={starHeight}
            fill="url(#gradient)"
            transform={`rotate(${star.angle}, ${star.x + starWidth / 2}, ${star.y + starHeight / 2})`}
          />
        </g>
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(${typeof window !== 'undefined' ? window.innerWidth : 1000}px, ${typeof window !== 'undefined' ? window.innerHeight : 800}px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  )
}
