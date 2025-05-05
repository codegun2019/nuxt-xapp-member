<template>
  <div>
    <label class="block mb-2">เลือกธนาคาร</label>
    <select v-model="bank" class="w-full border rounded px-3 py-2 mb-4">
      <option disabled value="">-- กรุณาเลือก --</option>
      <option value="kbank">กสิกรไทย</option>
      <option value="scb">ไทยพาณิชย์</option>
    </select>

    <div class="mb-4">
      <label for="amount" class="block text-gray-700 font-medium mb-2">จำนวนเงิน</label>
      <Input 
        id="amount" 
        v-model="form.amount" 
        placeholder="กรอกจำนวนเงิน"
        type="number"
        min="100"
        step="100" 
        :error="!!errors.amount"
      />
      <p v-if="errors.amount" class="mt-1 text-sm text-red-500">{{ errors.amount }}</p>
    </div>

    <Button 
    @click="submit"
      type="submit" 
      variant="primary" 
      size="lg" 
      :full-width="true"
      :disabled="isLoading"
    >
      {{ isLoading ? 'กำลังยืนยัน...' : 'ยืนยัน' }}
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import Button from '../atoms/Button.vue'
import Input from '../atoms/Input.vue'
const bank = ref('')
const amount = ref('')

const submit = () => {
  if (!amount.value || Number(amount.value) < 100) {
    Swal.fire({
      icon: 'warning',
      title: 'ยอดเงินไม่พอ',
      text: 'ต้องเติมขั้นต่ำ 100 บาท'
    });
    return;
  }
  alert(`ธนาคาร: ${bank.value}, จำนวน: ${amount.value}`)
}

const form = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  username: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.username = ''
  errors.password = ''
  
  if (!form.username) {
    errors.username = 'กรุณากรอกชื่อผู้ใช้'
    isValid = false
  }
  
  if (!form.password) {
    errors.password = 'กรุณากรอกรหัสผ่าน'
    isValid = false
  }
  
  return isValid
}
</script>
