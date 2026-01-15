"use client"

import React, { useEffect, useRef, useState, useCallback, type ComponentType } from "react"

interface LazySectionProps {
  component: ComponentType
  id: string
  className?: string
  rootMargin?: string
  unmountOnExit?: boolean
}

export function LazySection({
  component: Component,
  id,
  className = "",
  rootMargin = "200px"
}: LazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoaded) {
        setIsLoaded(true)
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
      threshold: 0.01 // Trigger as soon as 1% is visible
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
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        minHeight: isLoaded ? 'auto' : '100vh',
        contentVisibility: isLoaded ? 'auto' : 'hidden',
        containIntrinsicSize: '1px 1000px',
        contain: 'paint layout'
      }}
    >
      {isLoaded ? (
        <React.Suspense fallback={<div className="w-full h-full min-h-[50vh]" />}>
          <Component />
        </React.Suspense>
      ) : (
        <div className="w-full h-full min-h-[50vh]" />
      )}
    </div>
  )
}