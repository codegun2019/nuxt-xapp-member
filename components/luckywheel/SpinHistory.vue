<template>
  <div class="space-y-3">
    <div v-for="(item, index) in history" :key="index" class="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
          <GiftIcon class="w-6 h-6 text-green-500" />
        </div>
        <div>
          <div class="font-medium">{{ item.date }}</div>
          <div class="text-gray-500 text-xs">รางวัล: {{ item.reward }}</div>
        </div>
      </div>
      <div class="text-green-500 font-medium">{{ item.amount }} บาท</div>
    </div>
  </div>
</template>

<script setup>
import { GiftIcon } from '@heroicons/vue/24/outline'
defineProps({ history: Array })
</script>
