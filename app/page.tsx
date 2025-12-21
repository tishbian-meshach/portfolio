"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WorkSection } from "@/components/sections/work-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { LazySection } from "@/components/ui/lazy-section"
import { HeavyLazySection } from "@/components/ui/heavy-lazy-section"
import { GlobalNav } from "@/components/ui/global-nav"
import { Suspense, useEffect, useState } from "react"

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 768) {
          const scrollTop = window.scrollY
          const documentHeight = document.documentElement.scrollHeight
          const windowHeight = window.innerHeight
          const isAtBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsNavVisible(!isAtBottom)
        } else {
          setIsNavVisible(true)
        }
      }, 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <LazySection component={AboutSection} id="about" />
        <LazySection component={WorkSection} id="work" />
        <LazySection component={SkillsSection} id="skills" />
        <LazySection component={TestimonialsSection} id="testimonials" />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <LazySection component={ContactSection} id="contact" />
        </Suspense>
        <LazySection component={Footer} id="footer" />
      </main>
      <GlobalNav isVisible={isNavVisible} />
    </>
  )
}
