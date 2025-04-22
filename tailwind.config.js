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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: themeConfig.colors.success,
        warning: themeConfig.colors.warning,
        error: themeConfig.colors.error,
      },
      borderRadius: {
        // lg: "var(--radius)",
        // md: "calc(var(--radius) - 2px)",
        // sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "bounce-in": "bounce-in 0.5s",
        "bounce-out": "bounce-out 0.5s",
        "fade-in": "fade-in 0.5s",
        "fade-out": "fade-out 0.5s",
        "fade-in-up": "fade-in-up 0.5s",
        "fade-out-up": "fade-out-up 0.5s",
        "fade-in-down": "fade-in-down 0.5s",
        // สีอื่นๆ ที่ต้องการกำหนดเพิ่มเติม
      }
    },
  },
  plugins: [],
}
