"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, User, Briefcase, Mail } from "lucide-react"

const navItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
  { title: "About", icon: <User className="h-4 w-4" />, href: "#about" },
  { title: "Work", icon: <Briefcase className="h-4 w-4" />, href: "#work" },
  { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
]

export function GlobalNav() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100]">
      <FloatingDock items={navItems} />
    </div>
  )
}