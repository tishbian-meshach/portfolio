"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState, useRef } from "react"

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  speed: number
  distance: number
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
  // Always start from top-left area and go to bottom-right
  // Random position along the top edge or left edge
  const startFromTop = Math.random() > 0.5

  if (startFromTop) {
    // Start from top edge, random X position
    return {
      x: Math.random() * window.innerWidth * 0.8, // Don't start too far right
      y: -20,
      angle: 135, // 135 degrees = top-left to bottom-right
    }
  } else {
    // Start from left edge, random Y position
    return {
      x: -20,
      y: Math.random() * window.innerHeight * 0.8, // Don't start too far down
      angle: 135, // 135 degrees = top-left to bottom-right
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
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint()
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle, // Always 135 degrees (top-left to bottom-right)
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      }

      setStar(newStar)

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
      setTimeout(createStar, randomDelay)
    }

    createStar()

    return () => {}
  }, [minSpeed, maxSpeed, minDelay, maxDelay])

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null

          // Move in the fixed direction (135 degrees = top-left to bottom-right)
          const newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180)
          const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180)
          const newDistance = prevStar.distance + prevStar.speed
          const newScale = 1 + newDistance / 100

          // Remove star when it goes off screen (bottom-right)
          if (newX > window.innerWidth + 20 || newY > window.innerHeight + 20) {
            return null
          }

          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          }
        })
      }
    }

    const animationFrame = requestAnimationFrame(moveStar)
    return () => cancelAnimationFrame(animationFrame)
  }, [star])

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}
