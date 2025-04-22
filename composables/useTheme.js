// composables/useTheme.js
import { ref, inject, onMounted } from 'vue'

export function useTheme() {
  const themeProvider = inject('themeProvider', null)
  const isDark = ref(false)
  
  onMounted(() => {
    if (themeProvider) {
      isDark.value = themeProvider.isDark.value
    }
  })
  
  const toggleTheme = () => {
    if (themeProvider) {
      themeProvider.toggleTheme()
      isDark.value = themeProvider.isDark.value
    }
  }
  
  return {
    isDark,
    toggleTheme
  }
}