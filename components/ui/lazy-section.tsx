"use client"

import { useEffect, useRef, useState, useCallback, type ComponentType } from "react"

interface LazySectionProps {
  component: ComponentType
  id: string
  className?: string
  rootMargin?: string
}

export function LazySection({ component: Component, id, className = "", rootMargin = "200px" }: LazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        setIsLoaded(true)
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsLoaded(false)
        }, 1000)
      }
    })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold: 0.05
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [rootMargin, handleIntersection])

  return (
    <div ref={ref} id={id} className={className} style={{ contain: 'layout style' }}>
      {isLoaded ? <Component /> : <div className="min-h-screen bg-black" />}
    </div>
  )
}