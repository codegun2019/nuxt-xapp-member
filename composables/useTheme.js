"use client"

import { ref, readonly } from "vue"
import { themeConfig, getThemeConfig } from "~/config/theme"

// สร้าง state สำหรับธีม
const currentTheme = ref("default")
const isDarkMode = ref(false)

export function useTheme() {
  // ฟังก์ชันสำหรับเปลี่ยนธีม
  const setTheme = (themeName) => {
    currentTheme.value = themeName
    if (process.client) {
      localStorage.setItem("theme", themeName)
    }
  }

  // ฟังก์ชันสำหรับเปลี่ยนโหมด
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (process.client) {
      localStorage.setItem("darkMode", isDarkMode.value ? "dark" : "light")
      // เพิ่ม/ลบ คลาส dark ที่ element html
      if (isDarkMode.value) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  // ฟังก์ชันสำหรับตั้งค่าโหมด
  const setDarkMode = (value) => {
    isDarkMode.value = value
    if (process.client) {
      localStorage.setItem("darkMode", value ? "dark" : "light")
      // เพิ่ม/ลบ คลาส dark ที่ element html
      if (value) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  // ฟังก์ชันสำหรับโหลดธีมจาก localStorage
  const loadTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        currentTheme.value = savedTheme
      }

      const savedMode = localStorage.getItem("darkMode")
      if (savedMode) {
        isDarkMode.value = savedMode === "dark"
        // เพิ่ม/ลบ คลาส dark ที่ element html
        if (isDarkMode.value) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        // ตรวจสอบการตั้งค่าของระบบ
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        isDarkMode.value = prefersDark
        localStorage.setItem("darkMode", prefersDark ? "dark" : "light")
        // เพิ่ม/ลบ คลาส dark ที่ element html
        if (prefersDark) {
          document.documentElement.classList.add("dark")
        }
      }
    }
  }

  return {
    theme: readonly(currentTheme),
    isDarkMode: readonly(isDarkMode),
    themeConfig,
    getThemeConfig,
    setTheme,
    toggleDarkMode,
    setDarkMode,
    loadTheme,
  }
}
