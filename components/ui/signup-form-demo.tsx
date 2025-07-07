"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-lg p-8 bg-gray-900 border border-gray-800">
      <h2 className="font-bold text-xl text-white mb-8">Get In Touch</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="your@email.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            className="flex h-24 w-full border-none bg-gray-800 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <motion.button
          className="bg-sky-400 hover:bg-sky-500 text-black font-medium py-2 px-4 w-full rounded-md transition-colors"
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  )
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
}

const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn(
        "text-sm font-medium text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  )
}

const Input = ({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full border-none bg-gray-800 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}
