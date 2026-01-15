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
  const [hasLoaded, setHasLoaded] = useState(false)
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          if (entry.isIntersecting) {
            setHasLoaded(true)
          }
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

  // Measure content height after mounting to preserve it when unmounted
  useEffect(() => {
    if (isVisible && contentRef.current) {
      const height = contentRef.current.offsetHeight
      if (height > 0) {
        setMeasuredHeight(height)
      }
    }
  }, [isVisible])

  const placeholderHeight = measuredHeight || '100vh'

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        minHeight: isVisible ? 'auto' : placeholderHeight,
        contain: 'layout style paint'
      }}
    >
      {isVisible ? (
        <React.Suspense fallback={<div className="w-full min-h-[50vh] bg-black" style={{ height: placeholderHeight }} />}>
          <div ref={contentRef}>
            <Component key={hasLoaded ? `${id}-loaded` : id} />
          </div>
        </React.Suspense>
      ) : (
        <div className="w-full bg-black" style={{ height: placeholderHeight }} />
      )}
    </div>
  )
}