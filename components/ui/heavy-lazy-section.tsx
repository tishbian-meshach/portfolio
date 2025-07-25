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
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        // Use requestIdleCallback for better performance
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            setIsLoaded(true)
            if (observerRef.current) {
              observerRef.current.disconnect()
            }
          })
        } else {
          setTimeout(() => {
            setIsLoaded(true)
            if (observerRef.current) {
              observerRef.current.disconnect()
            }
          }, 0)
        }
      }
    })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px",
      threshold: [0.1]
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
    <div ref={ref} id={id} className={className} style={{ contain: 'layout style paint', willChange: 'contents' }}>
      {isLoaded ? <Component /> : <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-6 h-6 border-2 border-sky-400/50 border-t-transparent rounded-full animate-spin" /></div>}
    </div>
  )
}