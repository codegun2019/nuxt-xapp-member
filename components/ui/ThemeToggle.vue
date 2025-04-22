<!-- components/ui/ThemeToggle.vue -->
<template>
  <button 
    @click="toggleTheme" 
    class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
  >
    <span v-if="isDark" class="block w-5 h-5">🌞</span>
    <span v-else class="block w-5 h-5">🌙</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // ในสถานการณ์จริง คุณจะเพิ่มโค้ดสำหรับการเปลี่ยน theme
}
</script>