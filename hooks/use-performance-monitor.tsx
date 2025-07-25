"use client"

import { useEffect, useRef } from "react"

export function usePerformanceMonitor(componentName: string) {
  const renderCount = useRef(0)
  const startTime = useRef(performance.now())

  useEffect(() => {
    renderCount.current += 1
    const endTime = performance.now()
    const renderTime = endTime - startTime.current

    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} - Render #${renderCount.current} took ${renderTime.toFixed(2)}ms`)
    }

    startTime.current = performance.now()
  })

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure' && entry.name.includes(componentName)) {
            console.log(`${componentName} performance:`, entry)
          }
        })
      })
      
      observer.observe({ entryTypes: ['measure'] })
      
      return () => observer.disconnect()
    }
  }, [componentName])
}