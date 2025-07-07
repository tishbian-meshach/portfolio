"use client"
import { TextReveal } from "@/components/magicui/text-reveal"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { EnhancedContactForm } from "@/components/ui/enhanced-contact-form"
import { motion } from "framer-motion"
import Globe from "@/components/magicui/globe"

export function ContactSection() {
  return (
    <ScrollAnimation id="contact" className="py-20 bg-black w-full relative overflow-hidden min-h-screen">
      {/* Background decoration with black gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/5 via-transparent to-blue-900/5 bg-transparent opacity-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
      {/* Black gradient fade overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-5" />
     
      {/* Top Content */}
      <div className="section-content w-full mx-auto px-4 relative z-20">
        <TextReveal
          text="Let's collaborate!"
          className="text-4xl md:text-6xl font-regular text-center mb-4 text-white"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center font-thin mb-16 max-w-2xl mx-auto"
        >
          Ready to turn your ideas into reality? Let's discuss your next project and create something extraordinary with
          AI-enhanced solutions.
        </motion.p>
        {/* Contact Form with extra padding for star overflow */}
        <div className="relative w-full max-w-2xl z-20 mx-auto px-16 py-8">
          <EnhancedContactForm />
        </div>
      </div>
     
      {/* Globe at bottom - Debug version with visible border */}
      <div
        className="pointer-events-none z-10 "
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          overflow: 'hidden'
        }}
      >
        <div
          className=""
          style={{
            position: 'absolute',
            top: '200px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px'
          }}
        >
          <div className="w-full h-full relative">
            <Globe className="opacity-50 scale-150 w-full h-full" />
          </div>
        </div>
        <div
          className="absolute inset-0"
        />
      </div>
    </ScrollAnimation>
  )
}