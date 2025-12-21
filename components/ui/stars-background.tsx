"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useCallback } from "react"

interface StarProps {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number | null
}

interface StarBackgroundProps {
  starDensity?: number
  allStarsTwinkle?: boolean
  twinkleProbability?: number
  minTwinkleSpeed?: number
  maxTwinkleSpeed?: number
  className?: string
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00008, // Reduced from 0.00015
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<StarProps[]>([])
  const rafRef = useRef<number | null>(null)
  const isVisibleRef = useRef(true)
  const lastFrameTimeRef = useRef(0)

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height
      const numStars = Math.floor(area * starDensity)
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null,
        }
      })
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Target ~30fps for twinkle animation
    const frameInterval = 1000 / 30

    const updateCanvasSize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      starsRef.current = generateStars(width, height)
    }

    updateCanvasSize()

    // Visibility observer to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const resizeObserver = new ResizeObserver(updateCanvasSize)
    resizeObserver.observe(canvas)

    const render = (timestamp: number) => {
      rafRef.current = requestAnimationFrame(render)

      // Skip if not visible or not enough time has passed
      if (!isVisibleRef.current) return
      if (timestamp - lastFrameTimeRef.current < frameInterval) return

      lastFrameTimeRef.current = timestamp

      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      const currentTime = Date.now() * 0.001

      starsRef.current.forEach((star) => {
        let opacity = star.opacity
        if (star.twinkleSpeed !== null) {
          opacity = 0.5 + Math.abs(Math.sin(currentTime / star.twinkleSpeed) * 0.5)
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      })
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [generateStars])

  return <canvas ref={canvasRef} className={cn("h-full w-full absolute inset-0 pointer-events-none", className)} style={{ contain: 'strict' }} />
}
