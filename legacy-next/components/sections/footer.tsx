"use client"

import { BlurText } from "@/components/ui/blur-text"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <ScrollAnimation className="py-6 md:py-12 bg-black border-t border-gray-900 relative z-10" data-footer>
      <div className="section-content container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center ">
        <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/tishbian-meshach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500  hover:text-white transition-colors duration-300"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="https://www.behance.net/selfiejones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500  hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg"  className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0.5 94.187 511 323.626"><path d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/selfie_jones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tishbian-meshach/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
        <BlurText
          text={`© ${new Date().getFullYear()} Tishbian Meshach. All rights reserved.`}
          className="text-gray-500 text-xs md:text-sm font-thin text-center md:text-left"
          delay={50}
        />
      </div>
    </ScrollAnimation>
  )
}
