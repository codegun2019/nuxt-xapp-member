// ปลั๊กอินสำหรับจัดการธีม
import { themeConfig, getThemeConfig } from "~/config/theme"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  // เพิ่ม themeConfig เข้าไปใน global properties
  nuxtApp.provide("theme", themeConfig)
  nuxtApp.provide("getTheme", getThemeConfig)
})
