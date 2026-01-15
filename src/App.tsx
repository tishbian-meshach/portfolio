import { HeroSection } from "@/components/sections/hero-section"
import { LazySection } from "@/components/ui/lazy-section"
import { GlobalNav } from "@/components/ui/global-nav"
import { Suspense, useEffect, useState, lazy } from "react"

const AboutSection = lazy(() => import("@/components/sections/about-section").then(module => ({ default: module.AboutSection })))
const WorkSection = lazy(() => import("@/components/sections/work-section").then(module => ({ default: module.WorkSection })))
const SkillsSection = lazy(() => import("@/components/sections/skills-section").then(module => ({ default: module.SkillsSection })))
const ContactSection = lazy(() => import("@/components/sections/contact-section").then(module => ({ default: module.ContactSection })))
import { Footer } from "@/components/sections/footer"

export default function App() {
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
        <AboutSection/>
        <LazySection component={WorkSection} id="work" />
        <SkillsSection/>
        {/* <LazySection component={TestimonialsSection} id="testimonials" /> */}
        <LazySection 
          component={() => (
            <>
              <ContactSection />
              <Footer />
            </>
          )} 
          id="contact" 
        />
      </main>
      <GlobalNav isVisible={isNavVisible} />
    </>
  )
}
