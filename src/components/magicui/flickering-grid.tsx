"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
  className?: string
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "#38bdf8",
  maxOpacity = 0.3,
  className,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isVisibleRef = useRef(true)
  const rafRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Target ~15fps for flickering effect (sufficient for this visual)
    const frameInterval = 1000 / 15

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Visibility observer to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const animate = (timestamp: number) => {
      rafRef.current = requestAnimationFrame(animate)

      // Skip if not visible or not enough time has passed
      if (!isVisibleRef.current) return
      if (timestamp - lastFrameTimeRef.current < frameInterval) return

      lastFrameTimeRef.current = timestamp

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const cols = Math.floor(rect.width / (squareSize + gridGap))
      const rows = Math.floor(rect.height / (squareSize + gridGap))

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < flickerChance) {
            const opacity = Math.floor(Math.random() * maxOpacity * 255)
            ctx.fillStyle = `${color}${opacity.toString(16).padStart(2, "0")}`
            ctx.fillRect(i * (squareSize + gridGap), j * (squareSize + gridGap), squareSize, squareSize)
          }
        }
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [squareSize, gridGap, flickerChance, color, maxOpacity])

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} style={{ contain: 'strict' }} />
}
