"use client"

import type React from "react"

import { FlipWords } from "@/components/magicui/flip-words"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import ColorBends from "@/components/ColorBends"
import { Download } from "lucide-react"

const roles = ["UI/UX Designer", "Graphic Designer", "AI-Augmented Developer", "Creative Technologist"]

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-animated hero-section in-view relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ColorBends Background */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          rotation={360}
          speed={0.55}
          colors={["#0f005c", "#112579", "#75e3ff"]}
          transparent
          autoRotate={0.35}
          scale={1.7}
          frequency={1.8}
          warpStrength={1}
          mouseInfluence={0.7}
          parallax={0.7}
          noise={0}
        />
      </div>

      <div className="absolute inset-0 bg-black/20 z-20" />
      {/* Blue light gradient background */}
      <div className="absolute hidden inset-0 bg-gradient-to-br from-sky-500/10 via-black/10 to-transparent mix-blend-screen z-5" />

      <div
        className=" flex-col hidden absolute top-8 z-30 right-10 sm:flex-row gap-10  justify-center items-center"
        style={{ "--stagger-delay": "2" } as React.CSSProperties}
      >
        <RainbowButton>
          <Download className="w-3 h-3 mr-2" />
          Download CV
        </RainbowButton>
      </div>

      {/* Stronger bottom fade */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black/100 via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-content relative z-30 text-center px-4">
        <h1
          className="text-6xl md:text-8xl text-white tracking-tight mb-2 font-normal"
          style={{ "--stagger-delay": "0" } as React.CSSProperties}
        >
          Tishbian Meshach
        </h1>

        <div
          className="text-xl md:text-2xl font-thin mb-8 h-8"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          <FlipWords words={roles} className="text-sky-300" />
        </div>
      </div>
    </section>
  )
}
