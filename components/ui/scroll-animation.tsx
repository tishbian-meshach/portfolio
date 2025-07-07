"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  id?: string
}

export function ScrollAnimation({ children, className = "", threshold = 0.1, id }: ScrollAnimationProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is entering viewport
            entry.target.classList.remove("out-of-view")
            entry.target.classList.add("in-view")
          } else {
            // Section is leaving viewport
            entry.target.classList.remove("in-view")
            entry.target.classList.add("out-of-view")
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px", // Trigger when section is 10% visible from bottom
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold])

  return (
    <section ref={ref} id={id} className={`section-animated ${className}`}>
      {children}
    </section>
  )
}
