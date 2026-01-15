"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  addLoadingItem: (item: string) => void
  removeLoadingItem: (item: string) => void
  loadingItems: Set<string>
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set(['initial']))

  const addLoadingItem = (item: string) => {
    setLoadingItems(prev => new Set([...prev, item]))
  }

  const removeLoadingItem = (item: string) => {
    setLoadingItems(prev => {
      const newSet = new Set(prev)
      newSet.delete(item)
      return newSet
    })
  }

  useEffect(() => {
    // Auto-remove initial loading after minimum time
    const timer = setTimeout(() => {
      removeLoadingItem('initial')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsLoading(loadingItems.size > 0)
  }, [loadingItems])

  useEffect(() => {
    const handlePageLoad = () => {
      console.log('Page loaded')
      removeLoadingItem('page')
    }

    // Add loading items
    addLoadingItem('page')

    // Set up event listeners
    window.addEventListener('load', handlePageLoad)

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad()
    }

    // Fallback timeout to prevent infinite loading
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timeout - forcing load complete')
      removeLoadingItem('page')
    }, 2000)

    return () => {
      window.removeEventListener('load', handlePageLoad)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <LoadingContext.Provider value={{
      isLoading,
      setIsLoading,
      addLoadingItem,
      removeLoadingItem,
      loadingItems
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}