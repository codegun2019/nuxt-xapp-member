<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div>
      <label for="username" class="block text-gray-700 font-medium mb-2">ชื่อผู้ใช้</label>
      <Input 
        id="username" 
        v-model="form.username" 
        placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์" 
        :error="!!errors.username"
      />
      <p v-if="errors.username" class="mt-1 text-sm text-red-500">{{ errors.username }}</p>
    </div>
    
    <div>
      <div class="flex justify-between items-center mb-2">
        <label for="password" class="block text-gray-700 font-medium">รหัสผ่าน</label>
        <a href="#" class="text-pink-500 text-sm hover:underline">ลืมรหัสผ่าน?</a>
      </div>
      <Input 
        id="password" 
        type="password"
        v-model="form.password" 
        placeholder="รหัสผ่าน" 
        :error="!!errors.password"
      />
      <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
    </div>
    
    <div>
      <label class="flex items-center">
        <input type="checkbox" v-model="form.rememberMe" class="h-5 w-5 text-pink-500 border-gray-300 rounded" />
        <span class="ml-2 text-gray-700">จดจำฉัน</span>
      </label>
    </div>
    
    <Button 
      type="submit" 
      variant="primary" 
      size="lg" 
      :full-width="true"
      :disabled="isLoading"
    >
      {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
    </Button>
    
    <div v-if="error" class="p-3 bg-red-50 text-red-600 rounded-lg text-center">
      {{ error }}
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Button from '../atoms/Button.vue'
import Input from '../atoms/Input.vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['submit'])

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

const submitForm = () => {
  if (validateForm()) {
    emit('submit', { ...form })
  }
}
</script>