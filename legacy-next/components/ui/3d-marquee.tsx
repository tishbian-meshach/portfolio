"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Marquee3DProps {
  children: ReactNode
  className?: string
}

export function Marquee3D({ children, className }: Marquee3DProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div className="flex animate-marquee whitespace-nowrap">{children}</div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">{children}</div>
    </div>
  )
}
