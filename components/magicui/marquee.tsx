"use client"

import { useRef } from "react"
import { useInView } from "motion/react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      style={{
        // Pause animation when not in view
        animationPlayState: isInView ? 'running' : 'paused',
        ...(props.style || {})
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
            style={{
              // Inherit pause state from parent
              animationPlayState: 'inherit'
            }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

export { Marquee }
