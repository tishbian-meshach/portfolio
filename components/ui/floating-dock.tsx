"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
}

interface FloatingDockProps {
  items: DockItem[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop
      const offset = href === "#contact" ? 50 : 0
      window.scrollTo({
        top: offsetTop + offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-gray-400 hover:text-sky-400"
              animate={{
                y: hoveredIndex === index ? -8 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.a>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 text-[10px] text-sky-400 font-light whitespace-nowrap pointer-events-none"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
