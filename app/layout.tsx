import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorFollower }  from "@/components/ui/cursor-follower"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Tishbian Portfolio",
  description: "Portfolio of Tishbian Meshach — a UI/UX designer, graphic Designer, and AI-augmented developer based in Tamil Nadu, India.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
