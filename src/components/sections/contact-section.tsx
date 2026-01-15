"use client";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { EnhancedContactForm } from "@/components/ui/enhanced-contact-form";
import { motion } from "framer-motion";
import { lazy, Suspense, memo } from "react";
import FloatingLines from "@/components/FloatingLines";

const Globe = lazy(() => import("@/components/magicui/globe"));

export const ContactSection = memo(function ContactSection() {
  return (
    <ScrollAnimation
      id="contact"
      className="py-20 bg-black w-full relative min-h-screen"
    >
      {/* Ballpit Background */}
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <FloatingLines
          linesGradient={["#474df5", "#2F4BC0", "#47d2f5"]}
          animationSpeed={3}
          interactive
          bendRadius={2.5}
          bendStrength={2}
          mouseDamping={0.2}
          parallax
          parallaxStrength={0.25}
        />
      </div>

      {/* Stronger top fade */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-black/100 via-black/80 to-transparent" />
      </div>

      {/* Stronger bottom fade */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black/100 via-black/80 to-transparent" />
      </div>

      {/* Top Content */}
      <div className="section-content w-full mx-auto px-4 md:px-8 relative z-20">
        <TextReveal
          text="Let's collaborate!"
          className="text-4xl md:text-6xl font-regular text-center mb-4 text-white"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center font-thin mb-8 max-w-2xl mx-auto"
        >
          Ready to turn your ideas into reality? Let's discuss your next project.
        </motion.p>
        {/* Contact Form with extra padding for star overflow */}
        <div className="relative w-full max-w-2xl z-20 mx-auto px-4 md:px-16 py-6 md:py-8">
          <EnhancedContactForm />
        </div>
      </div>
    </ScrollAnimation>
  );
});
