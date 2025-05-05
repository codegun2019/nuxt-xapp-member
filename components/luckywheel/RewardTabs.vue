<template>
  <div class="grid grid-cols-2 gap-4 border-b border-gray-200 mb-4">
    <button 
      @click="$emit('update:modelValue', 'rewards')"
      :class="modelValue === 'rewards' ? activeClass : inactiveClass"
      class="py-2 flex items-center justify-center"
    >
      <GiftIcon class="w-5 h-5 mr-1" /> ของรางวัล
    </button>
    <button 
      @click="$emit('update:modelValue', 'history')"
      :class="modelValue === 'history' ? activeClass : inactiveClass"
      class="py-2 flex items-center justify-center"
    >
      <ClockIcon class="w-5 h-5 mr-1" /> ประวัติ
    </button>
  </div>
</template>

<script setup>
import { GiftIcon, ClockIcon } from '@heroicons/vue/24/outline'
defineProps({ modelValue: String })
const activeClass = 'border-b-2 border-pink-500 text-pink-500'
const inactiveClass = 'text-gray-500'
</script>
