<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 text-center">
      <div class="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
        <GiftIcon class="w-12 h-12 text-pink-500" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">ยินดีด้วย!</h3>
      <p class="text-gray-600 mb-4">คุณได้รับรางวัล {{ amount }} บาท</p>
      <button @click="$emit('close')" class="bg-pink-500 text-white rounded-full px-6 py-2 font-medium">
        รับรางวัล
      </button>
    </div>
  </div>
</template>

<script setup>
import { GiftIcon } from '@heroicons/vue/24/outline'
defineProps({ amount: Number })
</script>
