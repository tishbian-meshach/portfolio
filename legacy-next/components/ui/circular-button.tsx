"use client"
import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const CircularButton = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div className="flex justify-center relative z-20">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden rounded-full border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/50 bg-gray-900/10",
        )}
      >
        {/* Glowing background effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, #38bdf815, transparent 40%)`,
          }}
        />

        {/* Border glow effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition duration-300"
          style={{
            opacity: opacity * 0.5,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, #38bdf840, transparent 40%)`,
            filter: "blur(1px)",
          }}
        />

        {/* Inner glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300"
          style={{
            opacity: opacity * 0.3,
            background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, #38bdf820, transparent 50%)`,
          }}
        />

        {/* Corner highlights */}
        <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-1/4 right-0 h-1/2 w-px bg-gradient-to-b from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-1/4 h-px w-1/2 bg-gradient-to-l from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-1/4 left-0 h-1/2 w-px bg-gradient-to-t from-sky-400/0 via-sky-400/40 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <button className="circular-button relative z-10 group">
          <p className="circular-button__text">
            <span style={{ "--index": 0 } as React.CSSProperties} className="text-xs font-light">
              V
            </span>
            <span style={{ "--index": 1 } as React.CSSProperties} className="text-xs font-light">
              I
            </span>
            <span style={{ "--index": 2 } as React.CSSProperties} className="text-xs font-light">
              E
            </span>
            <span style={{ "--index": 3 } as React.CSSProperties} className="text-xs font-light">
              W
            </span>
            <span style={{ "--index": 4 } as React.CSSProperties} className="text-xs font-light">
              {" "}
            </span>
            <span style={{ "--index": 5 } as React.CSSProperties} className="text-xs font-light">
              A
            </span>
            <span style={{ "--index": 6 } as React.CSSProperties} className="text-xs font-light">
              L
            </span>
            <span style={{ "--index": 7 } as React.CSSProperties} className="text-xs font-light">
              L
            </span>
            <span style={{ "--index": 8 } as React.CSSProperties} className="text-xs font-light">
              {" "}
            </span>
            <span style={{ "--index": 9 } as React.CSSProperties} className="text-xs font-light">
              P
            </span>
            <span style={{ "--index": 10 } as React.CSSProperties} className="text-xs font-light">
              R
            </span>
            <span style={{ "--index": 11 } as React.CSSProperties} className="text-xs font-light">
              O
            </span>
            <span style={{ "--index": 12 } as React.CSSProperties} className="text-xs font-light">
              J
            </span>
            <span style={{ "--index": 13 } as React.CSSProperties} className="text-xs font-light">
              E
            </span>
            <span style={{ "--index": 14 } as React.CSSProperties} className="text-xs font-light">
              C
            </span>
            <span style={{ "--index": 15 } as React.CSSProperties} className="text-xs font-light">
              T
            </span>
            <span style={{ "--index": 16 } as React.CSSProperties} className="text-xs font-light">
              S
            </span>
            <span style={{ "--index": 17 } as React.CSSProperties} className="text-xs font-light">
              {" "}
            </span>
          </p>
          <div className="circular-button__circle">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="circular-button__icon"
              width={14}
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              className="circular-button__icon circular-button__icon--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>

      <style jsx>{`
        .circular-button {
          cursor: pointer;
          border: none;
          background: transparent;
          color: #38bdf8;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: grid;
          place-content: center;
          transition: all 300ms ease;
        }

        .circular-button:hover {
        }

        .circular-button__text {
          position: absolute;
          inset: 0;
          animation: text-rotation 8s linear infinite;
          color: #38bdf8;
        }

        .circular-button__text > span {
          position: absolute;
          transform: rotate(calc(20deg * var(--index)));
          inset: 5px;
          color: #ffff;
        }


        .circular-button__circle {
          position: relative;
          width: 40px;
          height: 40px;
          overflow: hidden;
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(56, 189, 248, 0.2);
          backdrop-filter: blur(4px);
          transition: all 300ms ease;
        }

        .circular-button:hover .circular-button__circle {
          border-color: rgba(56, 189, 248, 0.4);
        }

        .circular-button__icon--copy {
          position: absolute;
          transform: translate(-150%, 150%);
        }

        .circular-button:hover .circular-button__icon:first-child {
          transition: transform 0.3s ease-in-out;
          transform: translate(150%, -150%);
        }

        .circular-button:hover .circular-button__icon--copy {
          transition: transform 0.3s ease-in-out 0.1s;
          transform: translate(0);
        }

        @keyframes text-rotation {
          to {
            rotate: 360deg;
          }
        }
      `}</style>
    </div>
  )
}

export default CircularButton
