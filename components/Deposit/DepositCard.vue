<template>
  <div>
    <input v-model="cardNumber" placeholder="เลขบัตร" class="w-full mb-2 border rounded px-3 py-2" />
    <input v-model="expiry" placeholder="MM/YY" class="w-full mb-2 border rounded px-3 py-2" />
    <input v-model="cvv" placeholder="CVV" class="w-full mb-2 border rounded px-3 py-2" />
    <input v-model="name" placeholder="ชื่อบนบัตร" class="w-full mb-4 border rounded px-3 py-2" />

    <input v-model="amount" type="number" placeholder="จำนวนเงิน" class="w-full border rounded px-3 py-2 mb-4" />

    <button @click="submit" class="w-full bg-pink-500 text-white py-2 rounded">
      ยืนยัน
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const name = ref('')
const amount = ref('')

const submit = () => {
  if (!cardNumber.value || !amount.value) return alert('กรอกให้ครบ')
  alert(`ชำระ ${amount.value} บาท ด้วยบัตร ${cardNumber.value}`)
}
</script>
