<!-- components/Deposit/DepositTabs.vue -->
<template>
  <div class="flex overflow-x-auto border-b mb-4">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('update:modelValue', tab.id)"
      :class="[
        'px-4 py-2 whitespace-nowrap',
        modelValue === tab.id
          ? 'border-b-2 border-pink-500 text-pink-600 font-medium'
          : 'text-gray-500'
      ]"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])

const tabs = [
  { id: 'bank', name: 'ธนาคาร' },
  { id: 'promptpay', name: 'พร้อมเพย์' },
  { id: 'qrcode', name: 'QR Code' },
  { id: 'giftcard', name: 'กิฟการ์ด' },
  { id: 'card', name: 'บัตรเครดิต' }
]
</script>
