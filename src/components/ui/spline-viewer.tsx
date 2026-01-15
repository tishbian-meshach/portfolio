"use client"
import { useEffect, useRef, useState, createElement } from "react"

interface SplineViewerProps {
  scene: string
  className?: string
  loadingAnimType?: string
  onLoad?: () => void
  onError?: () => void
}

export function SplineViewer({
  scene,
  className = "",
  loadingAnimType = "spinner-small-dark",
  onLoad,
  onError
}: SplineViewerProps) {
  const splineRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Delay loading slightly to prioritize LCP content (text)
        setTimeout(() => {
          setShouldLoad(true)
        }, 1000)
        observer.disconnect()
      }
    }, { rootMargin: "100px" })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    // Load the Spline viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js'
    script.async = true

    const handleScriptLoad = () => {
      // Set up event listeners for the spline viewer
      if (splineRef.current) {
        const splineElement = splineRef.current as HTMLElement & {
          addEventListener: (event: string, handler: () => void) => void
        };

        splineElement.addEventListener('load', () => {
          splineElement.setAttribute('data-loaded', 'true');
          onLoad?.();
          // Dispatch custom event for loading screen
          window.dispatchEvent(new CustomEvent('splineLoaded', {
            detail: { scene }
          }));
        });

        splineElement.addEventListener('error', () => {
          onError?.();
          // Dispatch custom event for loading screen
          window.dispatchEvent(new CustomEvent('splineError', {
            detail: { scene }
          }));
        });
      }
    };

    script.addEventListener('load', handleScriptLoad);

    // Only add script if it doesn't already exist
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js"]')) {
      document.head.appendChild(script)
    } else {
      // Script already loaded, set up listeners immediately
      handleScriptLoad();
    }

    return () => {
      // Cleanup if needed
    }
  }, [shouldLoad, scene, onLoad, onError])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {shouldLoad && createElement('spline-viewer', {
        ref: splineRef,
        'loading-anim-type': loadingAnimType,
        url: scene,
        style: { width: '100%', height: '100%' }
      })}
    </div>
  )
}