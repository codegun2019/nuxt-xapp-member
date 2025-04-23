<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <AppHeader />
    <!-- Main Content -->
    <main class="flex-1 flex flex-col p-4 pb-20">
      <!-- Login Card -->
      <div class="max-w-md w-full mx-auto mt-10 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-1">เข้าสู่ระบบ</h1>
        <div v-if="errorMessage" class="mt-4 mb-2 p-3 bg-primary-50 text-primary-600 rounded-lg text-center">
          {{ errorMessage }}
        </div>
        <p v-else class="text-center text-gray-500 mb-6">กรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ</p>

        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="username" class="block text-gray-700 font-medium mb-2">ชื่อผู้ใช้</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <label for="password" class="block text-gray-700 font-medium">รหัสผ่าน</label>
              <a href="#" class="text-primary-500 text-sm hover:underline">ลืมรหัสผ่าน?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="รหัสผ่าน" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <button 
            type="submit" 
            class="rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] relative overflow-hidden py-4 px-8 text-lg bg-gradient-to-b from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/20 w-full"
            :disabled="isLoading"
          >
            {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
          </button>
          
          <!-- ข้อมูลทดสอบ -->
          <div class="mt-4 p-3 bg-primary-50 text-primary-700 rounded-lg text-sm">
            <p class="font-medium mb-1">ข้อมูลทดสอบ:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>ชื่อผู้ใช้: user123, รหัสผ่าน: password123</li>
              <li>ชื่อผู้ใช้: gamer555, รหัสผ่าน: gamer555pwd</li>
              <li>ชื่อผู้ใช้: lucky888, รหัสผ่าน: lucky888pwd</li>
            </ul>
          </div>
        </form>

        

        <div class="text-center mt-6">
          <p class="text-gray-600">
            ยังไม่มีบัญชี? <a href="register" class="text-primary-500 font-medium hover:underline">สมัครสมาชิก</a>
          </p>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <AppFooter />
    
    <!-- Error Popup 
1. `scale-in` (default): ขยายจากเล็กไปใหญ่
2. `slide-down`: เลื่อนลงจากด้านบน
3. `slide-up`: เลื่อนขึ้นจากด้านล่าง
4. `bounce-in`: ขยายพร้อมเอฟเฟกต์เด้ง
    -->
    <Popup v-model="showErrorPopup" animation="slide-up">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-primary-500 mb-4">แจ้งเตือน!</h2>
        <p class="text-gray-700">{{ errorMessage }}</p>
      </div>
    </Popup>
  </div>
</template>

<script setup>
useHead({
  title: 'Login - My Casino Site',
  meta: [
    { name: 'description', content: 'Learn more about our platform and gaming experience.' },
    { name: 'keywords', content: 'casino, online games, rewards' },
    { property: 'og:title', content: 'Login Us - My Casino' },
    { property: 'og:description', content: 'Play and win real rewards in our platform.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://Login.com/Login' },
    { property: 'og:image', content: 'https://Login.com/og-image.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://Login.com/Login' }
  ]
})

import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'
import AppHeader from '~/components/layout/AppHeader.vue'
import LoginForm from '~/components/layout/LoginForm.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

import Popup from '~/components/ui/Popup.vue'

// Initialize refs outside the login function
const username = ref('')
const password = ref('')
const rememberMe = ref(true)
const isLoading = ref(false)
const showErrorPopup = ref(false)
const errorMessage = ref('')

const auth = useAuth()
const router = useRouter()



const login = async () => {
  if (!username.value || !password.value) {
    errorMessage.value = 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน'
    showErrorPopup.value = true
    return
  }
  
  isLoading.value = true
  
  try {
    await auth.login({
      username: username.value,
      password: password.value,
      rememberMe: rememberMe.value
    })
    
    // หลังจากล็อกอินสำเร็จ นำทางไปยังหน้าหลัก
    router.push('/')
  } catch (err) {
    errorMessage.value = err.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ'
    showErrorPopup.value = true
  } finally {
    isLoading.value = false
  }
}
</script>
