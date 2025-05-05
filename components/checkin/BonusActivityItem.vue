<template>
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center">
      <div class="bg-pink-500 rounded-lg p-2 mr-3">
        <IconWrapper :icon="icon" class="w-5 h-5 text-white" />
      </div>
      <div>
        <div class="font-medium">{{ title }}</div>
        <div class="text-gray-500 text-xs">{{ description }}</div>
      </div>
    </div>
    <div class="bg-pink-500 text-white rounded-full px-3 py-1 flex items-center">
      <CurrencyDollarIcon class="w-4 h-4 mr-1" />
      <span>+{{ points }}</span>
    </div>
  </div>
</template>

<script setup>
import IconWrapper from '../common/IconWrapper.vue'
import { CurrencyDollarIcon } from '@heroicons/vue/24/outline'
defineProps({ icon: String, title: String, description: String, points: Number })
</script>
