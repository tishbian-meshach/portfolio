"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
  isDownload?: boolean
}

interface FloatingDockProps {
  items: DockItem[]
  resumeItem?: DockItem
  className?: string
}

export function FloatingDock({ items, resumeItem, className }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [resumeHovered, setResumeHovered] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href.substring(1)) // Remove the '#'
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isDownload?: boolean) => {
    if (isDownload) {
      // Let the default download behavior happen
      return
    }
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
        {items.map((item, index) => {
          const isActive = activeSection === item.href
          return (
            <div
              key={item.title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.a
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.isDownload)}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                  isActive
                    ? "text-sky-400"
                    : hoveredIndex === index
                      ? "text-sky-400"
                      : "text-gray-400"
                )}
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
                    className={cn(
                      "absolute top-6 text-[10px] font-light whitespace-nowrap pointer-events-none",
                      isActive ? "text-sky-400" : "text-sky-400"
                    )}
                  >
                    {item.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Separator and Resume Button */}
        {resumeItem && (
          <>
            <div className="w-px h-6 bg-white/20" />
            <div
              className="relative flex flex-col items-center"
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
            >
              <motion.a
                href={resumeItem.href}
                download="Resume-Tishbian.pdf"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                  resumeHovered ? "text-emerald-400" : "text-gray-400"
                )}
                animate={{
                  y: resumeHovered ? -8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {resumeItem.icon}
              </motion.a>

              <AnimatePresence>
                {resumeHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute top-6 text-[10px] text-emerald-400 font-light whitespace-nowrap pointer-events-none"
                  >
                    {resumeItem.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
