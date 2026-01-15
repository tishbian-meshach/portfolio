"use client"

import type React from "react"
import { useState, memo, useCallback } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MagicCard } from "@/components/magicui/magic-card"
import { cn } from "@/lib/utils"
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export const EnhancedContactForm = memo(function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Initialize EmailJS with your public key
      emailjs.init("seDymRAWlToq24kXh")

      // Send email using EmailJS
      await emailjs.send(
        "service_qd3cqnv", // Service ID
        "template_f0qf4ne", // Template ID (you'll need to create this)
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Tishbian", // Replace with your name
        },
        "seDymRAWlToq24kXh" // Public key
      )

      setSubmitStatus('success')
      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  return (
    <MagicCard className="max-w-md w-full mx-auto">
      <div className="p-8 relative">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 mb-4"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-extralight text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400 text-sm">Let's create something amazing together</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormField
            icon={<User className="w-4 h-4" />}
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <FormField
            icon={<Mail className="w-4 h-4" />}
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormField
            icon={<MessageSquare className="w-4 h-4" />}
            label="Message"
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            isTextarea
            required
          />

          <StarButton type="submit" disabled={isSubmitting || submitStatus === 'success'}>
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Message Sent!
              </>
            ) : submitStatus === 'error' ? (
              <>
                <AlertCircle className="w-4 h-4 mr-2" />
                Try Again
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </StarButton>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm text-center mt-2"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm text-center mt-2"
            >
              Sorry, there was an error sending your message. Please try again.
            </motion.div>
          )}
        </form>
      </div>
    </MagicCard>
  )
})

interface FormFieldProps {
  icon: React.ReactNode
  label: string
  id: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  isTextarea?: boolean
  required?: boolean
}

function FormField({
  icon,
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
  required = false,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-2 text-sm font-thin text-gray-300">
        {icon}
        {label}
      </label>
      <div className="relative overflow-hidden rounded-lg">
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            className={cn(
              "relative w-full px-4 py-3 rounded-lg font-light border border-gray-600/30 bg-transparent text-white",
              "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400",
              "transition-all duration-200 resize-none backdrop-blur-sm",
            )}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={cn(
              "relative w-full px-4 py-3 rounded-lg font-light border border-gray-600/30 bg-transparent text-white",
              "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400",
              "transition-all duration-200 backdrop-blur-sm",
            )}
          />
        )}
      </div>
    </div>
  )
}

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function StarButton({ children, className, ...props }: StarButtonProps) {
  return (
    <div className="star-button-wrapper w-full relative">
      <button
        className={cn(
          "star-button relative w-full py-3 px-4 bg-sky-400 hover:bg-sky-50 text-black hover:text-sky-400 font-medium rounded-md transition-all duration-300 ease-in-out cursor-pointer",
          "hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]",
          "flex items-center justify-center",
          className,
        )}
        {...props}
      >
        {children}

        {/* Star elements - evenly distributed in a circle */}
        {/* Star 1 - Top (0°) */}
        <div className="star-1 absolute top-[50%] left-[50%] w-4 h-auto transition-all duration-1000 cubic-bezier-[0.05,0.83,0.43,0.96] z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Star 2 - Top Right (60°) */}
        <div className="star-2 absolute top-[50%] left-[50%] w-3 h-auto transition-all duration-1000 cubic-bezier-[0,0.4,0,1.01] z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Star 3 - Bottom Right (120°) */}
        <div className="star-3 absolute top-[50%] left-[50%] w-3 h-auto transition-all duration-1000 cubic-bezier-[0,0.4,0,1.01] z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Star 4 - Bottom (180°) */}
        <div className="star-4 absolute top-[50%] left-[50%] w-4 h-auto transition-all duration-800 cubic-bezier-[0,0.4,0,1.01] z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Star 5 - Bottom Left (240°) */}
        <div className="star-5 absolute top-[50%] left-[50%] w-3 h-auto transition-all duration-600 cubic-bezier-[0,0.4,0,1.01] z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>

        {/* Star 6 - Top Left (300°) */}
        <div className="star-6 absolute top-[50%] left-[50%] w-2 h-auto transition-all duration-800 ease z-10 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-full">
            <path
              className="fill-sky-300"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
      </button>

      <style jsx>{`
        .star-button:hover .star-1 {
          top: calc(180% - 80px);
          left: calc(20% - 8px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
        
        .star-button:hover .star-2 {
          top: calc(70% - 40px);
          left: calc(10% + 60px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
        
        .star-button:hover .star-3 {
          top: calc(10% + 30px);
          left: calc(60% + 70px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
        
        .star-button:hover .star-4 {
          top: calc(5% + 40px);
          left: calc(70% - 8px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
        
        .star-button:hover .star-5 {
          top: calc(30% + 40px);
          left: calc(90% - 50px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
        
        .star-button:hover .star-6 {
          top: calc(50% - 40px);
          left: calc(40% - 70px);
          opacity: 1;
          filter: drop-shadow(0 0 10px #7dd3fc);
          z-index: 20;
        }
      `}</style>
    </div>
  )
}
