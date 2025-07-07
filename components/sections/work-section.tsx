"use client"

import type React from "react"

import { VelocityScroll } from "@/components/magicui/velocity-scroll"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import CircularButton from "@/components/ui/circular-button"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Travel App",
    description: "A comprehensive travel planning application with intuitive UX and seamless booking experience",
    category: "Mobile App",
    tech: ["React Native", "Node.js", "MongoDB"],
    image: "/images/travel-app.webp",
    className: "md:col-span-2",
  },
  {
    title: "Fashion Store",
    description: "E-commerce platform with modern design principles and advanced filtering",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "Tailwind"],
    image: "/images/ecommerce-app.webp",
    className: "md:col-span-1",
  },
  {
    title: "Personal Branding",
    description: "Complete brand identity system for creative professionals",
    category: "Branding",
    tech: ["Figma", "Illustrator", "After Effects"],
    image: "/images/personal-branding.png",
    className: "md:col-span-1",
  },
  {
    title: "Dashboard Design",
    description: "Analytics dashboard with clean data visualization and real-time updates",
    category: "Web App",
    tech: ["React", "D3.js", "TypeScript"],
    image: "/images/dashboard.png",
    className: "md:col-span-2",
  },
]

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={project.className}
    >
      <div className="group relative h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-xl border border-gray-800 bg-gray-900 hover:border-sky-400/50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        />

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Category Badge - Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block rounded-full bg-sky-400/20 px-3 py-1 text-xs text-sky-400 backdrop-blur-sm border border-sky-400/30">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow - Top Right */}
        <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 z-10">
          <div className="p-2 rounded-full bg-sky-400/10 backdrop-blur-sm border border-sky-400/20">
            <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Content Area - Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          {/* Strong gradient background for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />

          <div className="relative z-10 space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded px-2 py-1 text-xs text-gray-200 bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-sky-400/5" />
      </div>
    </motion.div>
  )
}

export function WorkSection() {
  return (
    <ScrollAnimation id="work" className="py-20 bg-black">
      <div className="section-content container mx-auto px-4">
        <h2
          className="text-4xl md:text-6xl font-regular text-center mb-4 text-white"
          style={{ "--stagger-delay": "0" } as React.CSSProperties}
        >
          Featured Work
        </h2>
        <p
          className="text-gray-400 font-thin text-center mb-16 max-w-2xl mx-auto"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          A collection of projects that showcase my passion for design and technology
        </p>

        <div
          className="grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          style={{ "--stagger-delay": "2" } as React.CSSProperties}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div style={{ "--stagger-delay": "3" } as React.CSSProperties} className="relative">
          {/* Velocity Scroll Text - Background Layer */}
          <VelocityScroll
            defaultVelocity={2}
            numRows={1}
            className="font-display text-center text-4xl  tracking-[-0.02em] text-sky-300/5 drop-shadow-sm md:text-7xl md:leading-[5rem] font-thin relative z-10"
          >
            UI/UX Design • Graphic Design • 3D Graphics • Web Development •
          </VelocityScroll>

          {/* Circular Button - Overlay Layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularButton />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
