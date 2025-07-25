"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextReveal } from "@/components/magicui/text-reveal";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import StarBorder from "@/components/ui/star-border";
import { cn } from "@/lib/utils";
import { Palette, Tag, Box, Monitor, BookCheck, Calendar } from "lucide-react";
import type React from "react";

const aboutContent = [
  {
    title: "Who I Am",
    description:
      "A passionate UI/UX designer, graphic designer, and AI-augmented developer based in Tamil Nadu, India. I believe in leveraging artificial intelligence to enhance creative workflows and deliver innovative digital solutions that solve complex problems.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "Introduction",
  },
  {
    title: "What I Do",
    description:
      "I specialize in creating intuitive user interfaces, compelling visual identities, and AI-enhanced development solutions. My unique approach combines traditional design principles with cutting-edge AI tools to accelerate project delivery and innovation.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "Expertise",
  },
  {
    title: "My Journey",
    description:
      "Based in Tamil Nadu, India, I've been pioneering the integration of AI in design and development workflows. My AI-augmented approach has helped startups and established brands achieve faster turnaround times while maintaining exceptional quality standards.",
    image: "/placeholder.svg?height=400&width=600",
    badge: "Experience",
  },
];

export function AboutSection() {
  return (
    <ScrollAnimation id="about" className="py-20 bg-black">
      <div className="section-content container mx-auto px-4 md:px-8">
        <div style={{ "--stagger-delay": "0" } as React.CSSProperties}>
          <TextReveal
            text="About Me"
            className="text-4xl md:text-6xl font-regular text-center mb-12"
          />
        </div>

        <div style={{ "--stagger-delay": "1" } as React.CSSProperties}>
          <TracingBeam className="px-2 md:px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative pl-8 md:pl-0">
              {aboutContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-8 md:mb-16">
                  <RainbowButton className="mb-4">{item.badge}</RainbowButton>

                  <div className="relative">
                    <h3 className="text-xl md:text-3xl font-regular text-white mb-4">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "text-sm md:text-base font-thin prose prose-sm dark:prose-invert text-gray-300",
                      index !== 0 && "mb-8"
                    )}
                  >
                    <p className="font-thin">{item.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {index === 1 && (
                      <>
                        <StarBorder
                          color="#38bdf8"
                          speed="4s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <Palette size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            UI/UX Design
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            User-centered interfaces
                          </p>
                        </StarBorder>

                        <StarBorder
                          color="#38bdf8"
                          speed="5s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <Tag size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            Graphic Design
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            Visual storytelling
                          </p>
                        </StarBorder>

                        <StarBorder
                          color="#38bdf8"
                          speed="6s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <Box size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            3D Graphics
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            Dimensional Visualization
                          </p>
                        </StarBorder>

                        <StarBorder
                          color="#38bdf8"
                          speed="7s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <Monitor size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            Web Development
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            Interactive experiences
                          </p>
                        </StarBorder>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <StarBorder
                          color="#38bdf8"
                          speed="4s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <BookCheck size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            50+ Projects
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            Completed
                          </p>
                        </StarBorder>

                        <StarBorder
                          color="#38bdf8"
                          speed="4s"
                          thickness={2}
                          className="w-full"
                        >
                          <div className="text-sky-400 text-2xl mb-2 flex justify-center">
                            <Calendar size={24} />
                          </div>
                          <h4 className="text-white font-light mb-1">
                            5+ Years
                          </h4>
                          <p className="text-gray-400 font-thin text-xs">
                            Experience
                          </p>
                        </StarBorder>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </ScrollAnimation>
  );
}
