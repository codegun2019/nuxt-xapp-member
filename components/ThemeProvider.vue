<!-- components/ThemeProvider.vue -->
<template>
  <div :class="{ 'dark': isDark }">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // ตรวจสอบ theme จาก localStorage
  const savedTheme = localStorage.getItem('color-theme')
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

// Export function to toggle theme
const toggleTheme = () => {
  isDark.value = !isDark.value
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

// Make toggleTheme available to other components
defineExpose({ toggleTheme, isDark })
</script>