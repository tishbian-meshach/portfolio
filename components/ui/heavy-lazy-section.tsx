"use client"

import { useEffect, useRef, useState, useCallback, type ComponentType } from "react"

interface HeavyLazySectionProps {
  component: ComponentType
  id: string
  className?: string
}

export function HeavyLazySection({ component: Component, id, className = "" }: HeavyLazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        setIsLoaded(true)
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "50px",
      threshold: [0.1, 0.3]
    })

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [handleIntersection])

  return (
    <div ref={ref} id={id} className={className} style={{ contain: 'layout style paint' }}>
      {isLoaded ? <Component /> : <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" /></div>}
    </div>
  )
}