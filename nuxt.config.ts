export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // ปรับปรุงการตั้งค่า components
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/ui',
      '~/components/auth'
    ]
  },
  
  compatibilityDate: '2025-04-23'
})