"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseout", hide)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseout", hide)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
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
