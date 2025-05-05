<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold text-red-500 mb-2">ประวัติการถอนเงิน</h2>
    <p class="text-gray-500 text-sm mb-4">ประวัติการถอนเงินล่าสุดของคุณ</p>

    <!-- Tabs -->
    <div class="flex mb-6 border rounded-lg overflow-hidden">
      <button 
        @click="activeTab = 'latest'"
        :class="tabButtonClass('latest')"
        class="flex-1 py-3 text-center"
      >
        <ClockIcon class="h-5 w-5 inline mr-1" />
        ล่าสุด
      </button>
      <button 
        @click="activeTab = 'all'"
        :class="tabButtonClass('all')"
        class="flex-1 py-3 text-center"
      >
        <CalendarIcon class="h-5 w-5 inline mr-1" />
        ทั้งหมด
      </button>
    </div>

    <!-- Transaction List -->
    <div v-if="filtered.length > 0" class="space-y-4">
      <div v-for="(tx, index) in filtered" :key="index" class="flex items-center">
        <div class="bg-red-100 rounded-full p-3 mr-4">
          <BanknotesIcon class="h-5 w-5 text-red-500" />
        </div>
        <div class="flex-1">
          <div class="font-medium">฿ {{ tx.amount }}</div>
          <div class="text-gray-500 text-sm">{{ tx.date }} • {{ tx.method }}</div>
        </div>
        <div class="text-green-500 font-medium">สำเร็จ</div>
      </div>
    </div>
    <div v-else class="text-center text-gray-400 py-6">
      ไม่มีข้อมูลในแท็บนี้
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ClockIcon, CalendarIcon, BanknotesIcon } from '@heroicons/vue/24/solid'

// Local state
const activeTab = ref('latest')

// Dummy data (ควรย้ายไปรับ props ถ้าใช้จริง)
const transactions = ref([
  { amount: '500.00', date: '2025-04-18 14:30', method: 'กสิกรไทย' },
  { amount: '1,000.00', date: '2025-04-17 10:15', method: 'ไทยพาณิชย์' },
  { amount: '300.00', date: '2025-04-16 18:22', method: 'กรุงไทย' },
  { amount: '2,000.00', date: '2025-04-15 09:45', method: 'กรุงเทพ' }
])

// Computed: filtered list
const filtered = computed(() => {
  return activeTab.value === 'latest'
    ? transactions.value.slice(0, 3)
    : transactions.value
})

// UI helper
const tabButtonClass = (tab) => {
  return activeTab.value === tab
    ? 'bg-gray-100 font-medium text-gray-900'
    : 'bg-white text-gray-500 hover:bg-gray-50'
}
</script>
