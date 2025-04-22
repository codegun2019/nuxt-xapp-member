<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-pink-600 text-white p-4 flex justify-between items-center">
      <div class="text-2xl font-bold tracking-wider">XBET</div>
      <button class="ml-2">
        <span class="h-8 w-8">☰</span>
      </button>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col p-4 pb-20">
      <!-- Login Card -->
      <div class="max-w-md w-full mx-auto mt-16 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-1">เข้าสู่ระบบ</h1>
        <p class="text-center text-gray-500 mb-6">กรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ</p>
        
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="username" class="block text-gray-700 font-medium mb-2">ชื่อผู้ใช้</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          
          <div>
            <div class="flex justify-between items-center mb-2">
              <label for="password" class="block text-gray-700 font-medium">รหัสผ่าน</label>
              <a href="#" class="text-pink-500 text-sm hover:underline">ลืมรหัสผ่าน?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="รหัสผ่าน" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          
          <button 
            type="submit" 
            class="rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] relative overflow-hidden py-4 px-8 text-lg bg-gradient-to-b from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg shadow-pink-500/20 w-full"
            :disabled="isLoading"
          >
            {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
          </button>
          
          <!-- ข้อมูลทดสอบ -->
          <div class="mt-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
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
            ยังไม่มีบัญชี? <a href="#" class="text-pink-500 font-medium hover:underline">สมัครสมาชิก</a>
          </p>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="bg-pink-500 text-white fixed bottom-0 left-0 right-0">
      <div class="flex justify-around">
        <a href="#" class="flex flex-col items-center py-2 px-4">
          <span class="h-6 w-6">🏠</span>
          <span class="text-xs mt-1">หน้าแรก</span>
        </a>
        <a href="#" class="flex flex-col items-center py-2 px-4">
          <span class="h-6 w-6">💰</span>
          <span class="text-xs mt-1">ถอนเงิน</span>
        </a>
        <div class="relative">
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div class="bg-pink-500 rounded-full p-4 shadow-lg">
              <span class="h-8 w-8">🎮</span>
            </div>
          </div>
          <div class="flex flex-col items-center pt-10 pb-2 px-4">
            <span class="text-xs">เล่นเกม</span>
          </div>
        </div>
        <a href="#" class="flex flex-col items-center py-2 px-4">
          <span class="h-6 w-6">💳</span>
          <span class="text-xs mt-1">ฝากเงิน</span>
        </a>
        <a href="#" class="flex flex-col items-center py-2 px-4">
          <span class="h-6 w-6">💬</span>
          <span class="text-xs mt-1">ติดต่อ</span>
        </a>
      </div>
    </nav>
    
    <!-- Error Popup 
1. `scale-in` (default): ขยายจากเล็กไปใหญ่
2. `slide-down`: เลื่อนลงจากด้านบน
3. `slide-up`: เลื่อนขึ้นจากด้านล่าง
4. `bounce-in`: ขยายพร้อมเอฟเฟกต์เด้ง
    -->
    <Popup v-model="showErrorPopup" animation="slide-up">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-pink-500 mb-4">แจ้งเตือน!</h2>
        <p class="text-gray-700">{{ errorMessage }}</p>
      </div>
    </Popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'
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
