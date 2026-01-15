"use client"

import { useEffect, useRef } from "react"

export function useMemoryCleanup() {
  const cleanupRef = useRef<(() => void)[]>([])

  const addCleanup = (cleanup: () => void) => {
    cleanupRef.current.push(cleanup)
  }

  const runCleanup = () => {
    cleanupRef.current.forEach(cleanup => cleanup())
    cleanupRef.current = []
  }

  useEffect(() => {
    return () => {
      runCleanup()
    }
  }, [])

  return { addCleanup, runCleanup }
}