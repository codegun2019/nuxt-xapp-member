<template>
  <div class="grid grid-cols-3 gap-3 mb-5">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:shadow-md transition hover:-translate-y-1"
    >
      <div class="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-2">
        <component :is="card.icon" class="w-5 h-5" />
      </div>
      <div class="text-sm text-gray-500 mb-1 text-center">{{ card.label }}</div>
      <div class="text-lg font-bold text-gray-800">
        <span v-if="card.prefix">{{ card.prefix }}</span>{{ card.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  GiftIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const cards = [
  {
    icon: ArrowPathIcon,
    label: 'คืนยอดเสีย',
    value: '0.00',
    prefix: '฿'
  },
  {
    icon: GiftIcon,
    label: 'เครดิตฟรี',
    value: '0.00',
    prefix: '฿'
  },
  {
    icon: SparklesIcon,
    label: 'เพชร',
    value: '0',
    prefix: ''
  }
]
</script>
