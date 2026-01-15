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
  rootMargin = "50px"
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Mount when entering viewport, unmount when leaving
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        rootMargin,
        threshold: 0.01
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        minHeight: '100vh',
        contain: 'layout style paint'
      }}
    >
      {isVisible ? (
        <React.Suspense fallback={<div className="w-full h-full min-h-[50vh] bg-black" />}>
          <Component key={id} /> {/* key prop forces fresh mount each time */}
        </React.Suspense>
      ) : (
        <div className="w-full h-full min-h-[50vh] bg-black" />
      )}
    </div>
  )
}