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

  // Use ResizeObserver to keep height accurate to content
  useEffect(() => {
    if (isVisible && contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
           // Use borderBoxSize if available for better accuracy
           const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
           if (height > 0) {
             setMeasuredHeight(height)
           }
        }
      })
      
      resizeObserver.observe(contentRef.current)
      
      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [isVisible])

  // If we have a measured height, use it. Otherwise default to 100vh only if never loaded.
  // Once loaded, we trust the measurement or auto.
  const styleHeight = measuredHeight ? `${measuredHeight}px` : '100vh'

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        minHeight: styleHeight
      }}
    >
      {isVisible ? (
        <React.Suspense fallback={<div className="w-full h-full" style={{ minHeight: styleHeight }} />}>
          <div ref={contentRef}>
            <Component key={hasLoaded ? `${id}-loaded` : id} />
          </div>
        </React.Suspense>
      ) : (
        <div className="w-full" style={{ height: styleHeight }} />
      )}
    </div>
  )
}