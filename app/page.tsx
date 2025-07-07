import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WorkSection } from "@/components/sections/work-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
