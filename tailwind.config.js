// tailwind.config.js
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
      // ... other theme extensions
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'dark-card': '#1e293b', // slate-800
        'dark-input': '#334155', // slate-700
      }),
      textColor: ({ theme }) => ({
        ...theme('colors'),
        'dark-primary': '#f9fafb', // gray-50
        'dark-secondary': '#cbd5e1', // slate-300
      }),
    },
  },
  plugins: [],
}
