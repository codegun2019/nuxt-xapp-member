<template>
  <button
    :disabled="isCheckedInToday"
    class="w-full bg-pink-500 text-white rounded-full py-3 font-medium flex items-center justify-center disabled:opacity-50"
    @click="$emit('check-in')"
  >
    <CalendarIcon class="w-5 h-5 mr-2" />
    {{ isCheckedInToday ? 'เช็คอินแล้ววันนี้' : 'เช็คอินวันนี้' }}
  </button>
</template>

<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'
defineProps({ isCheckedInToday: Boolean })
defineEmits(['check-in'])
</script>
