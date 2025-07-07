"use client"

import { BlurText } from "@/components/ui/blur-text"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <ScrollAnimation className="py-12 bg-black border-t border-gray-900">
      <div className="section-content container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.284.871.284 1.443 0 .649-.134 1.196-.402 1.643-.268.447-.642.799-1.125 1.056v.067c.696.235 1.201.643 1.515 1.223.314.579.471 1.274.471 2.086 0 .668-.122 1.22-.367 1.659-.245.439-.584.784-1.018 1.037-.434.253-.944.428-1.529.526-.585.098-1.205.147-1.858.147H2.803V5.731h5zm-2.53 4.7h2.077c.313 0 .6-.031.863-.094.263-.063.487-.161.674-.295.187-.134.332-.302.435-.505.103-.203.155-.442.155-.718 0-.634-.179-1.085-.537-1.353-.358-.268-.82-.402-1.386-.402H5.273v3.367zm0 5.17h2.374c.313 0 .6-.031.863-.094.263-.063.487-.161.674-.295.187-.134.332-.302.435-.505.103-.203.155-.442.155-.718 0-.634-.179-1.085-.537-1.353-.358-.268-.82-.402-1.386-.402H5.273v3.367zm9.5-8.7h5.5v1.5h-5.5v-1.5zm0 7h5.5v1.5h-5.5v-1.5z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <BlurText
          text={`© ${new Date().getFullYear()} Tishbian Meshach. All rights reserved.`}
          className="text-gray-500 text-sm"
          delay={50}
        />
      </div>
    </ScrollAnimation>
  )
}
