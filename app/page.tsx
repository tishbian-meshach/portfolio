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

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <LazySection component={AboutSection} id="about" />
        <LazySection component={WorkSection} id="work" />
        <HeavyLazySection component={SkillsSection} id="skills" />
        <LazySection component={TestimonialsSection} id="testimonials" />
        <HeavyLazySection component={ContactSection} id="contact" />
        <LazySection component={Footer} id="footer" />
      </main>
      <GlobalNav />
    </>
  )
}
