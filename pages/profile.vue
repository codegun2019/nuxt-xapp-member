<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-pink-600 text-white p-4 flex justify-between items-center">
      <div class="text-2xl font-bold tracking-wider">XBET</div>
      <div class="flex items-center gap-2">
        <div class="flex items-center bg-yellow-400 rounded-full p-1 pr-3">
          <span class="h-6 w-6 text-yellow-600 mr-1">🪙</span>
          <span class="font-semibold">{{ userDetails?.balance || 0 }}</span>
        </div>
        <button class="ml-2">
          <span class="h-8 w-8">☰</span>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col p-4 pb-20">
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
      
      <div v-else-if="userDetails" class="max-w-md w-full mx-auto">
        <!-- ข้อมูลส่วนตัว -->
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-4">
          <div class="flex items-center mb-4">
            <div class="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mr-4">
              {{ userDetails.nickname.charAt(0).toUpperCase() }}
            </div>
            <div>
              <h2 class="text-xl font-bold">{{ userDetails.firstName }} {{ userDetails.lastName }}</h2>
              <p class="text-gray-500">@{{ userDetails.username }}</p>
            </div>
          </div>
          
          <div class="space-y-3 text-sm">
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-500">ชื่อเล่น</span>
              <span class="font-medium">{{ userDetails.nickname }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-500">เบอร์โทรศัพท์</span>
              <span class="font-medium">{{ userDetails.phone }}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-500">อีเมล</span>
              <span class="font-medium">{{ userDetails.email }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-gray-500">วันที่สมัคร</span>
              <span class="font-medium">{{ formatDate(userDetails.registeredDate) }}</span>
            </div>
          </div>
        </div>
        
        <!-- บัญชีธนาคาร -->
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-4">
          <h3 class="text-lg font-bold mb-4">บัญชีธนาคาร</h3>
          
          <div v-if="bankAccounts.length > 0" class="space-y-3">
            <div v-for="account in bankAccounts" :key="account.id" class="flex items-center p-3 bg-gray-50 rounded-lg">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3" :style="{ backgroundColor: account.bankColor || '#f3f4f6' }">
                <span class="text-white">{{ account.bankIcon }}</span>
              </div>
              <div class="flex-1">
                <p class="font-medium">{{ account.bankName }}</p>
                <p class="text-gray-500 text-sm">{{ formatBankAccount(account.accountNumber) }}</p>
              </div>
              <div v-if="account.isDefault" class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                หลัก
              </div>
            </div>
          </div>
          
          <div v-else class="text-center py-4 text-gray-500">
            ยังไม่มีบัญชีธนาคาร
          </div>
          
          <button class="mt-4 w-full py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors duration-200">
            เพิ่มบัญชีธนาคาร
          </button>
        </div>
        
        <!-- ประวัติการทำธุรกรรม -->
        <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h3 class="text-lg font-bold mb-4">ประวัติการทำธุรกรรมล่าสุด</h3>
          
          <div v-if="transactions.length > 0" class="space-y-3">
            <div v-for="transaction in transactions" :key="transaction.id" class="flex items-center p-3 bg-gray-50 rounded-lg">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3" :class="transaction.type === 'deposit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
                <span v-if="transaction.type === 'deposit'">⬇️</span>
                <span v-else>⬆️</span>
              </div>
              <div class="flex-1">
                <p class="font-medium">{{ transaction.type === 'deposit' ? 'ฝากเงิน' : 'ถอนเงิน' }}</p>
                <p class="text-gray-500 text-sm">{{ formatDate(transaction.date) }}</p>
              </div>
              <div :class="transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'" class="font-bold">
                {{ transaction.type === 'deposit' ? '+' : '-' }}{{ transaction.amount }}
              </div>
            </div>
          </div>
          
          <div v-else class="text-center py-4 text-gray-500">
            ยังไม่มีประวัติการทำธุรกรรม
          </div>
          
          <button class="mt-4 w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            ดูทั้งหมด
          </button>
        </div>
        
        <!-- ปุ่มออกจากระบบ -->
        <button @click="logout" class="mt-6 w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium">
          ออกจากระบบ
        </button>
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
        <a href="#" class="flex flex-col items-center py-2 px-4 text-yellow-300">
          <span class="h-6 w-6">👤</span>
          <span class="text-xs mt-1">โปรไฟล์</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useUser } from '~/composables/useUser'
import { useRouter } from 'vue-router'

const auth = useAuth()
const userService = useUser()
const router = useRouter()

const isLoading = ref(true)
const userDetails = ref(null)
const bankAccounts = ref([])
const transactions = ref([])

const fetchUserData = async () => {
  try {
    isLoading.value = true

    // ดึงข้อมูลผู้ใช้
    userDetails.value = await userService.getUserDetails(auth.user.value.id)

    // ดึงข้อมูลบัญชีธนาคาร
    bankAccounts.value = await userService.getBankAccounts(auth.user.value.id)

    // ดึงประวัติการทำธุรกรรม (5 รายการล่าสุด)
    const allTransactions = await userService.getTransactions(auth.user.value.id)
    transactions.value = allTransactions.slice(0, 5)
  } catch (error) {
    console.error('Error fetching user data:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  if (!auth.isAuthenticated.value) {
    router.push('/login')
    return
  }

  await fetchUserData()
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const formatBankAccount = (accountNumber) => {
  if (!accountNumber) return ''
  return accountNumber.replace(/(\d{3})(\d{1,})(\d{3})/, '$1-XXX-$3')
}

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>