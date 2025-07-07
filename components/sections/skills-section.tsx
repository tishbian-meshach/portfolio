"use client"

import type React from "react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { DotBackground } from "@/components/ui/dot-background"

export function SkillsSection() {
  return (
    <ScrollAnimation className="py-20 bg-black relative">
      {/* Dot Background */}
      <DotBackground className="absolute inset-0 size-full" />

      <div className="section-content container mx-auto px-4 relative z-10">
        <div style={{ "--stagger-delay": "0" } as React.CSSProperties}>
          <h2 className="text-4xl md:text-6xl font-regular text-center mb-16 text-white">Skills & Tools</h2>
        </div>

        <div
          className="relative flex w-full items-center justify-center h-[500px]"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          <OrbitingCircles className="absolute" radius={240} startAngle={0}>
            <div className="p-3 rounded-full backdrop-blur-lg border border-orange-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-orange-500/50 hover:bg-gradient-to-tr hover:from-orange-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.figma />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-cyan-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-cyan-500/50 hover:bg-gradient-to-tr hover:from-cyan-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.react />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-yellow-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-yellow-500/50 hover:bg-gradient-to-tr hover:from-yellow-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.blender />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.photoshop />
              </div>
            </div>
          </OrbitingCircles>

          <OrbitingCircles className="absolute" radius={160} reverse startAngle={45}>
            <div className="p-3 rounded-full backdrop-blur-lg border border-purple-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-purple-500/50 hover:bg-gradient-to-tr hover:from-purple-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.spline />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-pink-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-pink-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.design />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.code />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.nextjs />
              </div>
            </div>
          </OrbitingCircles>

          <OrbitingCircles className="absolute" radius={80} startAngle={90}>
            <div className="p-3 rounded-full backdrop-blur-lg border border-teal-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-teal-500/50 hover:bg-gradient-to-tr hover:from-teal-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.tailwind />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-amber-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-110 hover:-rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-amber-500/50 hover:bg-gradient-to-tr hover:from-amber-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.javascript />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-violet-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-110 hover:rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-violet-500/50 hover:bg-gradient-to-tr hover:from-violet-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.typescript />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-emerald-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-emerald-500/50 hover:bg-gradient-to-tr hover:from-emerald-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.nodejs />
              </div>
            </div>
          </OrbitingCircles>

          {/* Center Creative Icon */}
          <div className="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
            <Icons.creative />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

const Icons = {
  figma: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#f24e1e" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#ff7262" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1abcfe" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0acf83" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#a259ff" />
    </svg>
  ),
  react: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.387zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="#61dafb"
      />
    </svg>
  ),
  blender: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.64-3.15L6.5 7.5 11 6.36c.31-.09.63-.09.95 0L16.5 7.5l1.86 1.35c.41.97.64 2.03.64 3.15 0 4.41-3.59 8-8 8z"
        fill="#e87d0d"
      />
      <circle cx="12" cy="12" r="3" fill="#265787" />
    </svg>
  ),
  spline: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="#5d67ff" strokeWidth="2" fill="none" />
      <path d="M2 7l10 5 10-5" stroke="#5d67ff" strokeWidth="2" />
      <path d="M12 12v10" stroke="#5d67ff" strokeWidth="2" />
    </svg>
  ),
  design: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#f472b6"
      />
    </svg>
  ),
  code: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  creative: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#38bdf8" />
    </svg>
  ),
  photoshop: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.85 8.42c0-.27-.02-.48-.06-.63-.04-.15-.11-.27-.21-.36-.1-.09-.23-.15-.39-.18-.16-.03-.35-.05-.57-.05-.19 0-.38.01-.57.03-.19.02-.35.06-.48.12v2.16c.11.04.24.07.39.09.15.02.3.03.45.03.22 0 .42-.02.59-.06.17-.04.32-.1.44-.19.12-.09.21-.2.27-.34.06-.14.09-.3.09-.49zm-.05 3.65c-.22 0-.42-.01-.6-.03-.18-.02-.33-.05-.45-.09v2.68c.12.04.27.07.45.09.18.02.38.03.6.03.27 0 .51-.03.72-.08.21-.05.39-.13.54-.24.15-.11.26-.25.34-.42.08-.17.12-.37.12-.6 0-.46-.14-.81-.42-1.05-.28-.24-.7-.36-1.26-.36z"
        fill="#31a8ff"
      />
      <path d="M2 2h20v20H2V2z" stroke="#31a8ff" strokeWidth="2" fill="none" />
    </svg>
  ),
  nextjs: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-2 15l-5-5h3V8h4v4h3l-5 5z"
        fill="white"
      />
    </svg>
  ),
  tailwind: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"
        fill="#06b6d4"
      />
    </svg>
  ),
  javascript: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.114-.417.526-.542.869-.426.218.075.526.262.676.598.149.337.149.632.149.632l1.714-1.06c-.293-.694-.666-1.019-1.272-1.312-.606-.293-1.349-.293-2.155-.293-1.272 0-2.155.293-2.155 1.714 0 1.421.869 2.155 2.155 2.155.869 0 1.421.293 1.421.869 0 .576-.293.869-.869.869-.576 0-.869-.293-.869-.869h-1.714c0 1.421.869 2.155 2.583 2.155 1.714 0 2.583-.734 2.583-2.155 0-.869-.293-1.421-.869-1.714z"
        fill="#f7df1e"
      />
    </svg>
  ),
  typescript: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
        fill="#3178c6"
      />
    </svg>
  ),
  nodejs: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"
        fill="#68a063"
      />
    </svg>
  ),
}
