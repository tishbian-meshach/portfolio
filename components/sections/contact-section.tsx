"use client";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { EnhancedContactForm } from "@/components/ui/enhanced-contact-form";
import { motion } from "framer-motion";
import { lazy, Suspense, memo } from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Ballpit from "@/components/magicui/Ballpit/Ballpit";

const Globe = lazy(() => import("@/components/magicui/globe"));

export const ContactSection = memo(function ContactSection() {
  return (
    <ScrollAnimation
      id="contact"
      className="py-20 bg-black w-full relative min-h-screen"
    >
      {/* Ballpit Background */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <Ballpit />
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
