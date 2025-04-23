<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="flex-1 flex flex-col p-4 pb-20">
      <div class="max-w-md w-full mx-auto mt-6">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-1">สมัครสมาชิก</h1>
        <p class="text-center text-gray-500 mb-6">สร้างบัญชีใหม่เพื่อเริ่มต้นใช้งาน</p>
        
        <!-- Registration Form -->
        <RegistrationForm 
          :current-step="currentStep"
          :is-loading="isSubmitting"
          @next-step="nextStep"
          @prev-step="prevStep"
          @submit="submitRegistration"
        />
        
        <div class="text-center mt-6">
          <p class="text-gray-600">
            มีบัญชีอยู่แล้ว? <a href="/login" class="text-pink-500 font-medium hover:underline">เข้าสู่ระบบ</a>
          </p>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <AppFooter />
    
    <!-- Success Popup -->
    <Popup v-model="showSuccessPopup" animation="bounce-in">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-green-500 mb-4">สำเร็จ!</h2>
        <p class="text-gray-700">สมัครสมาชิกเรียบร้อยแล้ว กำลังนำคุณไปยังหน้าเข้าสู่ระบบ...</p>
      </div>
    </Popup>
    
    <!-- Error Popup -->
    <Popup v-model="showErrorPopup" animation="slide-up">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-pink-500 mb-4">แจ้งเตือน!</h2>
        <p class="text-gray-700">{{ errorMessage }}</p>
      </div>
    </Popup>
  </div>
</template>

<script setup>

useHead({
  title: 'Register - My Casino Site',
  meta: [
    { name: 'description', content: 'Learn more about our platform and gaming experience.' },
    { name: 'keywords', content: 'casino, online games, rewards' },
    { property: 'og:title', content: 'Register Us - My Casino' },
    { property: 'og:description', content: 'Play and win real rewards in our platform.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://Register.com/Register' },
    { property: 'og:image', content: 'https://Register.com/og-image.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://Register.com/Register' }
  ]
})


import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'
import { useUser } from '~/composables/useUser'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import Popup from '~/components/ui/Popup.vue'
import RegistrationForm from '~/components/layout/Registration.vue'

const router = useRouter()
const auth = useAuth()
const userService = useUser()

const currentStep = ref(0)
const isSubmitting = ref(false)
const showSuccessPopup = ref(false)
const showErrorPopup = ref(false)
const errorMessage = ref('')

// Initialize userId outside the try block
const userId = ref(null)

const nextStep = () => {
  currentStep.value++
}

const prevStep = () => {
  currentStep.value--
}

const submitRegistration = async (formData) => {
  try {
    isSubmitting.value = true
    
    // Create user with auth service
    const registrationResult = await auth.register({
      username: formData.username,
      password: formData.password
    })
    
    userId.value = registrationResult // Assign the returned value to userId.value

    if (userId.value) {
      // Add bank account
      await userService.addBankAccount(userId.value, {
        bankId: formData.bank,
        bankName: formData.bankName,
        accountName: formData.accountName,
        accountNumber: formData.accountNumber,
        isDefault: true
      })
      
      // Update user details
      await userService.updateUserDetails(userId.value, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        referralSource: formData.referralSource
      })
      
      // Show success message and redirect
      showSuccessPopup.value = true
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  } catch (error) {
    console.error('Registration error:', error)
    errorMessage.value = 'เกิดข้อผิดพลาดในการสมัครสมาชิก กรุณาลองใหม่อีกครั้ง'
    showErrorPopup.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>