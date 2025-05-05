<template>
  <div class="text-center">
    <p class="mb-4">สแกน QR หรือใช้เบอร์พร้อมเพย์</p>
    <div class="bg-gray-100 w-40 h-40 mx-auto mb-4 rounded-lg"></div>
    <div class="text-sm text-gray-600">เบอร์: 098-xxx-1234</div>

    <input
      v-model="amount"
      type="number"
      class="w-full border rounded px-3 py-2 mt-4"
      placeholder="จำนวนเงิน"
    />
    <button @click="submit" class="w-full bg-pink-500 text-white py-2 rounded mt-4">
      ยืนยัน
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const amount = ref('')
const submit = () => alert(`พร้อมเพย์ จำนวน: ${amount.value}`)
</script>
