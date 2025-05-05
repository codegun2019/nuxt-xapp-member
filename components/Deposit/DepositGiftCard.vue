<template>
  <div>
    <input
      v-model="code"
      placeholder="รหัสกิฟการ์ด"
      class="w-full border rounded px-3 py-2 mb-4"
    />
    <input
      v-model="pin"
      placeholder="รหัสยืนยัน (ถ้ามี)"
      class="w-full border rounded px-3 py-2 mb-4"
    />
    <button @click="submit" class="w-full bg-pink-500 text-white py-2 rounded">
      ยืนยัน
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const code = ref('')
const pin = ref('')
const submit = () => {
  if (!code.value) return alert('กรุณากรอกรหัส')
  alert(`กิฟการ์ด: ${code.value} / PIN: ${pin.value || 'ไม่มี'}`)
}
</script>
