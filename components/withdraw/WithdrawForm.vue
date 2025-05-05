<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <!-- Title + Balance -->
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold text-red-500">ถอนเงิน</h1>
      <p class="text-gray-500 text-sm">ยอดเงินที่ถอนได้: ฿ 0.38</p>
    </div>

    <!-- Select Bank -->
    <label class="block text-gray-700 mb-2">บัญชีธนาคาร</label>
    <select v-model="selectedBank" class="form-select mb-4">
      <option v-for="bank in banks" :key="bank.id" :value="bank.id">
        {{ bank.name }} - {{ bank.accountNumber }}
      </option>
    </select>

    <!-- Amount -->
    <label class="block text-gray-700 mb-2">จำนวนเงิน</label>
    <input v-model="amount" type="number" class="form-input mb-4" placeholder="จำนวนเงิน" />

    <!-- Password -->
    <label class="block text-gray-700 mb-2">รหัสผ่าน</label>
    <input v-model="password" type="password" class="form-input mb-6" placeholder="รหัสผ่าน" />

    <!-- Button -->
    <button @click="submit" class="w-full bg-pink-500 text-white py-3 rounded-full font-medium">
      ยืนยันการถอนเงิน
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const selectedBank = ref('kasikorn')
const amount = ref('')
const password = ref('')

const banks = [
  { id: 'kasikorn', name: 'กสิกรไทย', accountNumber: 'xxx-x-xx456-x' },
  { id: 'krungthai', name: 'กรุงไทย', accountNumber: 'xxx-x-xx789-x' }
]

const submit = () => {
  if (!amount.value || Number(amount.value) < 300) {
    Swal.fire('แจ้งเตือน', 'กรุณาระบุจำนวนเงินขั้นต่ำ 300 บาท', 'warning')
    return
  }

  if (!password.value) {
    Swal.fire('แจ้งเตือน', 'กรุณากรอกรหัสผ่านเพื่อยืนยัน', 'warning')
    return
  }

  const bank = banks.find(b => b.id === selectedBank.value)

  Swal.fire({
    icon: 'success',
    title: 'ส่งคำขอสำเร็จ!',
    html: `ทำรายการไปยัง <b>${bank.name}</b><br>จำนวนเงิน <b>฿ ${amount.value}</b>`,
    confirmButtonText: 'ตกลง'
  })

  amount.value = ''
  password.value = ''
}
</script>
