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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.floor(canvas.width / (squareSize + gridGap))
      const rows = Math.floor(canvas.height / (squareSize + gridGap))

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < flickerChance) {
            ctx.fillStyle = `${color}${Math.floor(Math.random() * maxOpacity * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.fillRect(i * (squareSize + gridGap), j * (squareSize + gridGap), squareSize, squareSize)
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [squareSize, gridGap, flickerChance, color, maxOpacity])

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} />
}
