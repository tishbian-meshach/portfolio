"use client"

import React, { ReactNode } from 'react'
import { useLoading } from './loading-provider'

interface LoadingWrapperProps {
  children: ReactNode
  loadingComponent: ReactNode
}

export function LoadingWrapper({ children, loadingComponent }: LoadingWrapperProps) {
  const { isLoading } = useLoading()

  return (
    <>
      {isLoading && loadingComponent}
      <div style={{ 
        opacity: isLoading ? 0 : 1,
        pointerEvents: isLoading ? 'none' : 'auto',
        transition: 'opacity 0.5s ease-in-out'
      }}>
        {children}
      </div>
    </>
  )
}