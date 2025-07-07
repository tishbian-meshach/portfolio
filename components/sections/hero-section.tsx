"use client"

import type React from "react"

import { FloatingDock } from "@/components/ui/floating-dock"
import { FlipWords } from "@/components/magicui/flip-words"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { SplineViewer } from "@/components/ui/spline-viewer"
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides"
import { Home, User, Briefcase, Mail, Download } from "lucide-react"

const navItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
  { title: "About", icon: <User className="h-4 w-4" />, href: "#about" },
  { title: "Work", icon: <Briefcase className="h-4 w-4" />, href: "#work" },
  { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
]

const roles = ["UI/UX Designer", "Graphic Designer", "AI-Augmented Developer", "Creative Technologist"]

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-animated hero-section in-view relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Stripe Background Guides - Deepest layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <StripeBgGuides
          columnCount={8}
          animated={true}
          animationDuration={8}
          glowColor="#38bdf8"
          randomize={true}
          randomInterval={3000}
          contained={true}
          darkMode={true}
          glowOpacity={1.2}
        />
      </div>

      {/* Blue light gradient background */}
      <div className="absolute hidden inset-0 bg-gradient-to-br from-sky-500/10 via-black/10 to-transparent mix-blend-screen z-5" />

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>

      <div
        className=" flex-col hidden absolute top-8 z-30 right-10 sm:flex-row gap-10  justify-center items-center"
        style={{ "--stagger-delay": "2" } as React.CSSProperties}
      >
        <RainbowButton>
          <Download className="w-3 h-3 mr-2" />
          Download CV
        </RainbowButton>
      </div>

      {/* Spline 3D Model */}
      <div className="absolute inset-0 z-10">
        <SplineViewer
          scene="https://prod.spline.design/J-8S-fPcOC05m2ew/scene.splinecode"
          className="opacity-70"
          loadingAnimType="spinner-small-dark"
        />
      </div>

      {/* Stronger bottom fade */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/100 to-transparent" />
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
          className="text-xl md:text-2xl text-sky-300 font-thin mb-8 h-8"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          <FlipWords words={roles} className="text-sky-300" />
        </div>
      </div>
    </section>
  )
}
