// tailwind.config.js
import { themeConfig } from "./config/theme"
const colors = require('./tailwind/colors')
const typography = require('./tailwind/typography')
const plugins = require('./tailwind/plugins')

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',  // สีชมพูหลัก
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
          secondary: {
            50:  "#f0faff",
            100: "#e0f4ff",
            200: "#b3e6ff",
            300: "#84d6ff",
            400: "#57c2ff",
            500: "#2db0ff",
            600: "#1996e6",
            700: "#0e7cc2",
            800: "#0566a1",
            900: "#004b7a",
          },
        
          success: {
            50:  "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },
        
          warning: {
            50:  "#fffce6",
            100: "#fff9cc",
            200: "#fff59f",
            300: "#fff066",
            400: "#ffeb33",
            500: "#fde047",
            600: "#facc15",
            700: "#eab308",
            800: "#ca8a04",
            900: "#a16207",
          },
        
          error: {
            50:  "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
          },
        
          info: {
            50:  "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
        
          accent: {
            50:  "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
          },
        
          neutral: {
            50:  "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
        }  
      },

      // รูปแบบของปุ่ม
      buttons: {
        primary: {
          base: "rounded-full font-bold flex items-center justify-center transition-all duration-200 relative overflow-hidden",
          size: {
            sm: "py-2 px-4 text-sm",
            md: "py-3 px-6 text-base",
            lg: "py-4 px-8 text-lg",
          },
          variant: {
            solid:
              "bg-gradient-to-b from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/20 hover:scale-[1.02]",
            outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
            ghost: "text-primary-500 hover:bg-primary-50",
          },
        },
        secondary: {
          // คล้ายกับ primary แต่ใช้สี secondary
        },
      },
    
      // รูปแบบของ input
      inputs: {
        base: "w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500",
      },
    
      // รูปแบบของ card
      cards: {
        base: "bg-white rounded-2xl shadow-sm p-6 border border-gray-100",
      },
    
      // รูปแบบของ popup
      popups: {
        base: "bg-white rounded-3xl max-w-md w-full mx-4 shadow-xl overflow-hidden",
        animations: {
          "scale-in": {
            enter: "transition-all duration-300 ease-out",
            enterFrom: "opacity-0 scale-90",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all duration-200 ease-in",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-90",
          },
          "slide-down": {
            enter: "transition-all duration-300 ease-out",
            enterFrom: "opacity-0 -translate-y-10",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition-all duration-200 ease-in",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 -translate-y-10",
          },
          "slide-up": {
            enter: "transition-all duration-300 ease-out",
            enterFrom: "opacity-0 translate-y-10",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition-all duration-200 ease-in",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-10",
          },
          "bounce-in": {
            enter: "animate-bounce-in",
            leave: "animate-bounce-out",
            enterFrom: "opacity-0 scale-90",
            enterTo: "opacity-100 scale-100",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-90",
          },
        },
      },
        // อนิเมชั่นเริ่มต้น
        defaultAnimation: "scale-in",
      },
  },
  plugins: [],
}
