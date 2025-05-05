<!-- components/checkin/CheckInHistoryItem.vue -->
<template>
  <div :class="[status === 'missed' ? 'bg-red-50' : 'bg-green-50', 'flex items-center justify-between rounded-lg p-3 mb-3']">
    <div class="flex items-center">
      <div :class="[status === 'missed' ? 'bg-red-100' : 'bg-green-100', 'rounded-full p-2 mr-3']">
        <IconWrapper
          :icon="status === 'missed' ? 'ClockIcon' : 'GiftIcon'"
          class="w-5 h-5"
          :class="status === 'missed' ? 'text-red-500' : 'text-green-500'"
        />
      </div>
      <div>
        <div class="font-medium">{{ date }}</div>
        <div class="text-gray-500 text-xs">
          {{ status === 'missed' ? 'ไม่ได้เช็คอิน' : `฿ ${amount}` }}
        </div>
      </div>
    </div>
    <div :class="[status === 'missed' ? 'text-red-500' : 'text-green-500', 'font-medium']">
      {{ status === 'missed' ? 'พลาด' : 'รับแล้ว' }}
    </div>
  </div>
</template>

<script setup>
import IconWrapper from '../common/IconWrapper.vue'

defineProps({
  date: String,
  amount: String,
  status: String // "claimed" or "missed"
})
</script>
