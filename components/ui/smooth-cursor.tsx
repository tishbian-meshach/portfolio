"use client"

import { motion, useSpring } from "framer-motion"
import { type FC, type JSX, useEffect, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

export interface SmoothCursorProps {
  cursor?: JSX.Element
  springConfig?: {
    damping: number
    stiffness: number
    mass: number
    restDelta: number
  }
}

const DefaultCursorSVG: FC = () => {
  return (
    <div className="relative">
      {/* Ping effect */}
      <div className="absolute inset-0 w-10 h-10 rounded-full border border-white/80 animate-ping" />
      {/* Main cursor dot */}
      <div className="relative w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
    </div>
  )
}

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const lastMousePos = useRef<Position>({ x: 0, y: 0 })
  const velocity = useRef<Position>({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  })
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }
      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      const speed = Math.sqrt(Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2))

      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      if (speed > 0.1) {
        const currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90

        let angleDiff = currentAngle - previousAngle.current
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360

        accumulatedRotation.current += angleDiff
        rotation.set(accumulatedRotation.current)
        previousAngle.current = currentAngle

        scale.set(0.95)
        setIsMoving(true)

        const timeout = setTimeout(() => {
          scale.set(1)
          setIsMoving(false)
        }, 150)

        return () => clearTimeout(timeout)
      }
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    let rafId: number
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }

    document.body.style.cursor = "none"
    window.addEventListener("mousemove", throttledMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.body.style.cursor = "auto"
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, rotation, scale])

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale: scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        opacity: { duration: 0.3 },
      }}
    >
      {cursor}
    </motion.div>
  )
}
