"use client"

import { useEffect } from "react"

interface SplineViewerProps {
  scene: string
  className?: string
  loadingAnimType?: string
}

export function SplineViewer({ 
  scene, 
  className = "", 
  loadingAnimType = "spinner-small-dark" 
}: SplineViewerProps) {
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js'
    script.async = true
    
    // Only add script if it doesn't already exist
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js"]')) {
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <spline-viewer 
        loading-anim-type={loadingAnimType}
        url={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// Extend the JSX namespace to include the spline-viewer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        'loading-anim-type'?: string
        url?: string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}
