<template>
  <div :class="claimed ? 'bg-pink-500 text-white' : 'bg-white border border-gray-200'" class="rounded-lg p-3 text-center">
    <div class="text-sm mb-2">วันที่ {{ day }}</div>
    <div class="w-10 h-10 rounded-full bg-pink-400 mx-auto flex items-center justify-center mb-1">
      <CurrencyDollarIcon class="w-6 h-6 text-white" />
    </div>
    <div class="text-sm font-medium">฿ {{ amount }}</div>
  </div>
</template>

<script setup>
import { CurrencyDollarIcon } from '@heroicons/vue/24/outline'
defineProps({ day: Number, amount: Number, claimed: Boolean })
</script>
