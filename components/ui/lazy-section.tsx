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
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoaded) {
        setIsLoaded(true)
        // Disconnect observer after loading to prevent re-triggering
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    })
  }, [isLoaded])

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
    }
  }, [rootMargin, handleIntersection])

  return (
    <div ref={ref} id={id} className={className}>
      {isLoaded ? <Component /> : <div className="min-h-screen bg-black" />}
    </div>
  )
}