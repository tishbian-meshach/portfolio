"use client"

import type React from "react"
import { useEffect, useRef, useCallback } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  id?: string
}

export function ScrollAnimation({ children, className = "", threshold = 0.1, id }: ScrollAnimationProps) {
  const ref = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement
      if (entry.isIntersecting) {
        target.classList.remove("out-of-view")
        target.classList.add("in-view")
      } else {
        target.classList.remove("in-view")
        target.classList.add("out-of-view")
      }
    })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.5],
      rootMargin: "0px 0px -20% 0px",
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [threshold, handleIntersection])

  return (
    <section ref={ref} id={id} className={`section-animated ${className}`}>
      {children}
    </section>
  )
}
