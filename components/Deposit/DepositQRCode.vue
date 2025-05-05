<template>
  <div class="text-center">
    <p class="mb-4">ชำระผ่าน QR Code</p>
    <div class="bg-gray-200 w-40 h-40 mx-auto rounded-lg mb-4"></div>

    <input
      v-model="amount"
      type="number"
      placeholder="จำนวนเงิน"
      class="w-full border rounded px-3 py-2"
    />
    <button @click="submit" class="w-full mt-4 bg-pink-500 text-white py-2 rounded">
      ยืนยัน
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const amount = ref('')
const submit = () => alert(`QR Code จำนวน: ${amount.value}`)
</script>
