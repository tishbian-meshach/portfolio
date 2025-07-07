"use client"

import type React from "react"

import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface StickyScrollRevealProps {
  content: {
    title: string
    description: string
    content?: React.ReactNode
  }[]
  contentClassName?: string
}

export function StickyScrollReveal({ content, contentClassName }: StickyScrollRevealProps) {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <motion.div className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10" ref={ref}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-gray-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden", contentClassName)}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
