"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface VelocityScrollProps {
  text: string
  default_velocity?: number
  className?: string
}

export function VelocityScroll({ text, default_velocity = 5, className }: VelocityScrollProps) {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])

  return (
    <section ref={targetRef} className="relative overflow-hidden">
      <motion.div className={cn("flex whitespace-nowrap", className)} style={{ x }}>
        <span className="block mr-[30px]">{text}</span>
        <span className="block mr-[30px]">{text}</span>
        <span className="block mr-[30px]">{text}</span>
        <span className="block mr-[30px]">{text}</span>
      </motion.div>
    </section>
  )
}
