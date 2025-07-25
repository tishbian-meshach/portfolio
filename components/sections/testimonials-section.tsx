"use client"

import type React from "react"

import { Marquee } from "@/components/magicui/marquee"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { GlowingCard } from "@/components/ui/glowing-card"


const testimonials = [
  {
    quote: "Tishbian's design work is exceptional. The attention to detail and user experience is unmatched.",
    author: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    quote: "Working with Tishbian was a game-changer for our brand. The creative vision brought our ideas to life.",
    author: "Michael Chen",
    role: "Startup Founder",
  },
  {
    quote: "The 3D work and visual design exceeded all expectations. Truly innovative and professional.",
    author: "Emily Rodriguez",
    role: "Creative Director",
  },
  {
    quote: "His AI-integrated design approach is next-level. Speeds up everything!",
    author: "Rahul Sharma",
    role: "Creative Director",
  },
  {
    quote: "Outstanding creativity and professionalism. Every project delivered beyond expectations.",
    author: "Lisa Wang",
    role: "Marketing Director",
  },
  {
    quote: "The user interface designs are intuitive and beautiful. A true master of the craft.",
    author: "James Wilson",
    role: "UX Researcher",
  },
]

const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)

const TestimonialCard = ({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) => {
  return (
    <GlowingCard className="relative w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border border-gray-800 p-4 md:p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-colors bg-transparent">
      <blockquote className="text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-xs md:text-sm">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <figcaption className="text-white font-semibold text-xs md:text-sm">{author}</figcaption>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </GlowingCard>
  )
}

export function TestimonialsSection() {
  return (
    <ScrollAnimation className="py-20 bg-black">
      <div className="section-content container mx-auto px-4 md:px-8">
        <h2
          className="text-4xl md:text-6xl font-regular text-center mb-4 text-white"
          style={{ "--stagger-delay": "0" } as React.CSSProperties}
        >
          What People Say
        </h2>
        <p
          className="text-gray-400 text-center font-thin max-w-xl mx-auto"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          Hear from clients and collaborators who have experienced the impact of thoughtful design
        </p>

        <div
          className="relative flex h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg"
          style={{ "--stagger-delay": "2", contain: 'layout style paint' } as React.CSSProperties}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
