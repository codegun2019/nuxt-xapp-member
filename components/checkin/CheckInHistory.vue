<!-- components/checkin/CheckInHistory.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-pink-500 font-medium">ประวัติการเช็คอิน</h2>
      <button class="text-pink-500 text-sm flex items-center">
        ดูทั้งหมด
        <ChevronRightIcon class="w-4 h-4 ml-1" />
      </button>
    </div>

    <CheckInHistoryItem
      v-for="(item, index) in history"
      :key="index"
      :date="item.date"
      :amount="item.amount"
      :status="item.status"
    />
  </div>
</template>

<script setup>
import CheckInHistoryItem from './CheckInHistoryItem.vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const history = [
  { date: '27/04/2025', amount: '10', status: 'claimed' },
  { date: '26/04/2025', amount: '10', status: 'claimed' },
  { date: '25/04/2025', amount: '10', status: 'missed' },
  { date: '24/04/2025', amount: '10', status: 'claimed' }
]
</script>
