"use client";

import type React from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { DotBackground } from "@/components/ui/dot-background";
import { images } from "@/constants/index";

export function SkillsSection() {
  return (
    <ScrollAnimation className="py-20 bg-black relative">
      {/* Dot Background */}
      <DotBackground className="absolute inset-0 size-full" />

      <div className="section-content container mx-auto px-4 relative z-10">
        <div style={{ "--stagger-delay": "0" } as React.CSSProperties}>
          <h2 className="text-4xl md:text-6xl font-regular text-center mb-16 text-white">
            Skills & Tools
          </h2>
        </div>

        <div
          className="relative flex w-full items-center justify-center h-[500px]"
          style={{ "--stagger-delay": "1" } as React.CSSProperties}
        >
          <OrbitingCircles
            className="absolute"
            radius={180}
            reverse
            startAngle={45}
          >
            <div className="p-3 rounded-full backdrop-blur-lg border border-purple-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-purple-500/50 hover:bg-gradient-to-tr hover:from-purple-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.spline />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.figma />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-sky-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-sky-500/50 hover:bg-gradient-to-tr hover:from-sky-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.framer />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-slate-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-slate-500/30 hover:scale-110 hover:-rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-slate-500/50 hover:bg-gradient-to-tr hover:from-slate-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.nextjs />
              </div>
            </div>
          </OrbitingCircles>

          <OrbitingCircles className="absolute" radius={100} startAngle={90}>
            <div className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.photoshop />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-violet-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-110 hover:-rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-violet-500/50 hover:bg-gradient-to-tr hover:from-violet-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.aftereffects />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-orange-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-110 hover:rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-orange-500/50 hover:bg-gradient-to-tr hover:from-orange-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.illustrator />
              </div>
            </div>
            <div className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Icons.react />
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
  );
}

const Icons = {
  figma: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
        fill="#f24e1e"
      />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#ff7262" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1abcfe" />
      <path
        d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
        fill="#0acf83"
      />
      <path
        d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
        fill="#a259ff"
      />
    </svg>
  ),
  react: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.387zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="#61dafb"
      />
    </svg>
  ),
  framer: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 21L12 9L6 9L6 15L12 21Z"
          fill="#1aa7ff"
          fillOpacity="0.5"
        />{" "}
        <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="#1aa7ff" />{" "}
      </g>
    </svg>
  ),
  spline: () => (
    <img src={images.spline.src} alt="Spline" width="30" height="30" />
  ),
  illustrator: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
          fill="#330000"
        />{" "}
        <path
          d="M15.5686 19.5963H11.2297L10.3469 22.409C10.3224 22.5135 10.2262 22.5875 10.1215 22.5823H7.92384C7.79851 22.5823 7.75469 22.5117 7.79236 22.3704L11.549 11.2738C11.5866 11.1582 11.6242 11.0266 11.6617 10.8789C11.7109 10.6218 11.736 10.3606 11.7369 10.0987C11.7261 10.0213 11.7941 9.95294 11.8683 9.96378H14.8549C14.9424 9.96378 14.9924 9.9959 15.0051 10.0601L19.269 22.3897C19.3065 22.5182 19.269 22.5824 19.1563 22.5823H16.7144C16.6288 22.5921 16.547 22.5334 16.5266 22.4475L15.5686 19.5963ZM11.9059 17.1689H14.8737C14.3861 15.5027 13.8358 13.8584 13.3898 12.1793C12.9086 13.8613 12.3836 15.5365 11.9059 17.1689Z"
          fill="#FF9A00"
        />{" "}
        <path
          d="M21.8045 12.0058C21.6129 12.0137 21.4219 11.98 21.2438 11.907C21.0658 11.834 20.9048 11.7232 20.7714 11.582C20.6384 11.4346 20.535 11.2618 20.4673 11.0733C20.3996 10.8849 20.3689 10.6846 20.3769 10.4839C20.3701 10.2852 20.4042 10.0873 20.477 9.90305C20.5499 9.71881 20.6598 9.5524 20.7996 9.41468C20.938 9.27839 21.1014 9.17161 21.2804 9.10052C21.4593 9.02942 21.6502 8.99543 21.842 9.00049C22.2929 9.00049 22.6466 9.13856 22.9033 9.41468C23.0329 9.55818 23.1336 9.72648 23.1997 9.90995C23.2657 10.0934 23.2959 10.2885 23.2883 10.4839C23.2962 10.6853 23.2645 10.8864 23.1951 11.075C23.1258 11.2636 23.0201 11.436 22.8845 11.582C22.7428 11.7253 22.5736 11.8369 22.3878 11.9099C22.2019 11.9828 22.0033 12.0155 21.8045 12.0058ZM20.5084 22.3896V13.181C20.5084 13.0654 20.5583 13.0076 20.6587 13.0076H22.9691C23.0691 13.0076 23.1192 13.0654 23.1193 13.181V22.3896C23.1193 22.5182 23.0692 22.5824 22.9691 22.5823H20.6775C20.5648 22.5823 20.5084 22.5181 20.5084 22.3896Z"
          fill="#FF9A00"
        />{" "}
      </g>
    </svg>
  ),
  aftereffects: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
          fill="#00005B"
        />{" "}
        <path
          d="M13.7893 19.5638H9.4504L8.56759 22.3819C8.54308 22.4864 8.44685 22.5604 8.34218 22.5553H6.14454C6.01922 22.5553 5.97539 22.4847 6.01306 22.3434L9.76969 11.2926C9.80729 11.1771 9.84483 11.0641 9.88243 10.9163C9.93156 10.6592 9.95672 10.398 9.95756 10.1361C9.9468 10.0587 10.0136 9.99014 10.089 10.0012H13.0756C13.1631 10.0012 13.2131 10.0333 13.2258 10.0975L17.4897 22.3626C17.5272 22.4912 17.4896 22.5554 17.377 22.5553H14.9351C14.8495 22.565 14.7677 22.5063 14.7473 22.4204L13.7893 19.5638ZM10.1266 17.1877H13.0944C12.6068 15.5215 12.0565 13.8773 11.6105 12.1981C11.1051 13.9399 10.6384 15.5553 10.1266 17.1877Z"
          fill="#9999FF"
        />{" "}
        <path
          d="M20.6608 18.4757C20.8335 19.9066 22.0351 20.5888 23.3656 20.5597C24.1159 20.545 24.9177 20.4285 25.6188 20.1448C25.6812 20.0937 25.7127 20.1256 25.7127 20.2412V22.0713C25.7186 22.1665 25.6788 22.2516 25.6 22.3025C24.7286 22.6983 23.7284 22.8177 22.7833 22.8025C19.9655 22.8025 18.0304 20.8171 18.0312 17.9285C18.0238 15.1911 19.7997 12.8817 22.5579 12.8817C24.896 12.8211 26.5147 14.693 26.5212 17.0231C26.5212 17.4474 26.4975 17.8733 26.4461 18.2945C26.4361 18.3813 26.3622 18.4487 26.277 18.4487C24.4097 18.4487 22.5333 18.4757 20.6608 18.4757ZM20.6608 16.7207C21.7015 16.7207 22.7482 16.7575 23.7882 16.7111C23.9445 16.6951 24.0606 16.6654 24.0606 16.5029C24.0389 15.6391 23.3099 14.9286 22.464 14.9617C21.442 14.8983 20.7879 15.7611 20.6608 16.7207Z"
          fill="#9999FF"
        />{" "}
      </g>
    </svg>
  ),
  creative: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <path
        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
        fill="url(#prefix__paint0_radial_980_20147)"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_980_20147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
        >
          <stop offset=".067" stopColor="#9168C0" />
          <stop offset=".343" stopColor="#5684D1" />
          <stop offset=".672" stopColor="#1BA1E3" />
        </radialGradient>
      </defs>
    </svg>
  ),
  photoshop: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
          fill="#001E36"
        />{" "}
        <path
          d="M8 22.5162V10.2034C8 10.1197 8.035 10.0718 8.11667 10.0718C9.3223 10.0718 10.5274 10 11.7333 10C13.6902 10 15.809 10.6691 16.5517 12.7162C16.7267 13.2188 16.82 13.7333 16.82 14.2718C16.82 15.3009 16.5867 16.1504 16.12 16.8205C14.8164 18.6923 12.557 18.6632 10.5317 18.6632V22.5043C10.5475 22.618 10.4506 22.6718 10.3567 22.6718H8.14C8.04667 22.6718 8 22.6239 8 22.5162ZM10.5433 12.3812V16.4017C11.3464 16.4605 12.1867 16.4669 12.9583 16.2103C13.8102 15.9645 14.2767 15.2272 14.2767 14.3436C14.3003 13.5907 13.8901 12.8683 13.1917 12.5966C12.4294 12.2796 11.3662 12.2606 10.5433 12.3812Z"
          fill="#31A8FF"
        />{" "}
        <path
          d="M24.0967 15.6074C23.7437 15.4213 23.3677 15.2852 22.979 15.2028C22.4796 15.0853 20.5098 14.6737 20.509 15.7037C20.5265 16.2787 21.4393 16.5604 21.8426 16.7247C23.2585 17.2108 24.8607 18.0797 24.8292 19.8264C24.8725 22.0008 22.7657 22.8701 20.9598 22.8703C20.0197 22.88 19.0403 22.7344 18.1799 22.3308C18.0977 22.2873 18.0449 22.1944 18.0484 22.0996V20.019C18.0391 19.9356 18.1287 19.8627 18.1987 19.9227C19.0417 20.4325 20.0409 20.6801 21.0162 20.6933C21.4467 20.6933 22.2999 20.6516 22.2935 20.019C22.2935 19.412 21.2728 19.1329 20.8659 18.9787C20.2761 18.7682 19.7169 18.4765 19.2036 18.1118C18.4862 17.6001 18.0362 16.7797 18.0484 15.8771C18.0442 13.8297 19.9835 12.9107 21.73 12.9103C22.5464 12.9035 23.4232 12.964 24.1832 13.2956C24.2925 13.3277 24.3151 13.4429 24.3147 13.546V15.4918C24.3216 15.6126 24.1875 15.6537 24.0967 15.6074Z"
          fill="#31A8FF"
        />{" "}
      </g>
    </svg>
  ),
  nextjs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="-0.24 -0.24 24.48 24.48"
      fill="none"
      stroke="#ffffff"
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.288"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g clipPath="url(#clip0)">
          {" "}
          <path
            d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
            fill="#ffffff"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0">
            {" "}
            <rect width="24" height="24" fill="white" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  ),
  tailwind: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"
        fill="#06b6d4"
      />
    </svg>
  ),
  javascript: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.114-.417.526-.542.869-.426.218.075.526.262.676.598.149.337.149.632.149.632l1.714-1.06c-.293-.694-.666-1.019-1.272-1.312-.606-.293-1.349-.293-2.155-.293-1.272 0-2.155.293-2.155 1.714 0 1.421.869 2.155 2.155 2.155.869 0 1.421.293 1.421.869 0 .576-.293.869-.869.869-.576 0-.869-.293-.869-.869h-1.714c0 1.421.869 2.155 2.583 2.155 1.714 0 2.583-.734 2.583-2.155 0-.869-.293-1.421-.869-1.714z"
        fill="#f7df1e"
      />
    </svg>
  ),
  typescript: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
        fill="#3178c6"
      />
    </svg>
  ),
  nodejs: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"
        fill="#68a063"
      />
    </svg>
  ),
};
