"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

export function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{
        duration: 1,
        delay: delay / 1000,
      }}
      className={cn(className)}
    >
      {text}
    </motion.div>
  )
}
