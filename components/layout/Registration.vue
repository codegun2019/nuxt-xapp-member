<template>
  <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
    <!-- Stepper -->
    <div class="flex justify-between mb-8 relative">
      <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
      
      <div v-for="(step, index) in steps" :key="index" 
           class="w-10 h-10 rounded-full flex items-center justify-center z-10"
           :class="[
             currentStep > index 
               ? 'bg-primary-600 text-white' 
               : currentStep === index 
                 ? 'bg-primary-500 text-white' 
                 : 'bg-gray-200 text-gray-500'
           ]">
        {{ index + 1 }}
      </div>
    </div>
    
    <!-- Step Labels -->
    <div class="flex justify-between mb-6 px-1 text-sm">
      <div class="text-center" :class="currentStep >= 0 ? 'text-primary-600 font-medium' : 'text-gray-500'">
        ข้อมูลเข้าระบบ
      </div>
      <div class="text-center" :class="currentStep >= 1 ? 'text-primary-600 font-medium' : 'text-gray-500'">
        ข้อมูลธนาคาร
      </div>
      <div class="text-center" :class="currentStep >= 2 ? 'text-primary-600 font-medium' : 'text-gray-500'">
        ข้อมูลส่วนตัว
      </div>
    </div>
    
    <!-- Step 1: Login Information -->
    <div v-if="currentStep === 0" class="space-y-4">
      <h2 class="text-lg font-bold mb-4">ข้อมูลเข้าระบบ</h2>
      
      <div>
        <label for="username" class="block text-gray-700 font-medium mb-2">ชื่อผู้ใช้</label>
        <Input 
          id="username" 
          v-model="formData.username" 
          placeholder="ชื่อผู้ใช้" 
          :error="!!errors.username"
        />
        <p v-if="errors.username" class="mt-1 text-sm text-red-500">{{ errors.username }}</p>
      </div>
      
      <div>
        <label for="password" class="block text-gray-700 font-medium mb-2">รหัสผ่าน</label>
        <Input 
          id="password" 
          type="password"
          v-model="formData.password" 
          placeholder="รหัสผ่าน" 
          :error="!!errors.password"
        />
        <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
      </div>
      
      <div>
        <label for="confirmPassword" class="block text-gray-700 font-medium mb-2">ยืนยันรหัสผ่าน</label>
        <Input 
          id="confirmPassword" 
          type="password"
          v-model="formData.confirmPassword" 
          placeholder="ยืนยันรหัสผ่าน" 
          :error="!!errors.confirmPassword"
        />
        <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-500">{{ errors.confirmPassword }}</p>
      </div>
    </div>
    
    <!-- Step 2: Bank Information -->
    <div v-if="currentStep === 1" class="space-y-4">
      <h2 class="text-lg font-bold mb-4">ข้อมูลธนาคาร</h2>
      
      <div>
        <label for="bank" class="block text-gray-700 font-medium mb-2">ธนาคาร</label>
        <select 
          id="bank"
          v-model="formData.bank" 
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          :class="{'border-red-500': errors.bank}"
        >
          <option value="" disabled>เลือกธนาคาร</option>
          <option v-for="bank in banks" :key="bank.id" :value="bank.id">
            {{ bank.name }}
          </option>
        </select>
        <p v-if="errors.bank" class="mt-1 text-sm text-red-500">{{ errors.bank }}</p>
      </div>
      
      <div>
        <label for="accountName" class="block text-gray-700 font-medium mb-2">ชื่อบัญชี</label>
        <Input 
          id="accountName" 
          v-model="formData.accountName" 
          placeholder="ชื่อบัญชี" 
          :error="!!errors.accountName"
        />
        <p v-if="errors.accountName" class="mt-1 text-sm text-red-500">{{ errors.accountName }}</p>
      </div>
      
      <div>
        <label for="accountNumber" class="block text-gray-700 font-medium mb-2">เลขบัญชี</label>
        <Input 
          id="accountNumber" 
          v-model="formData.accountNumber" 
          placeholder="เลขบัญชี" 
          :error="!!errors.accountNumber"
        />
        <p v-if="errors.accountNumber" class="mt-1 text-sm text-red-500">{{ errors.accountNumber }}</p>
      </div>
    </div>
    
    <!-- Step 3: Personal Information -->
    <div v-if="currentStep === 2" class="space-y-4">
      <h2 class="text-lg font-bold mb-4">ข้อมูลส่วนตัว</h2>
      
      <div>
        <label for="firstName" class="block text-gray-700 font-medium mb-2">ชื่อ</label>
        <Input 
          id="firstName" 
          v-model="formData.firstName" 
          placeholder="ชื่อ" 
          :error="!!errors.firstName"
        />
        <p v-if="errors.firstName" class="mt-1 text-sm text-red-500">{{ errors.firstName }}</p>
      </div>
      
      <div>
        <label for="lastName" class="block text-gray-700 font-medium mb-2">นามสกุล</label>
        <Input 
          id="lastName" 
          v-model="formData.lastName" 
          placeholder="นามสกุล" 
          :error="!!errors.lastName"
        />
        <p v-if="errors.lastName" class="mt-1 text-sm text-red-500">{{ errors.lastName }}</p>
      </div>
      
      <div>
        <label for="phone" class="block text-gray-700 font-medium mb-2">เบอร์โทรศัพท์</label>
        <Input 
          id="phone" 
          v-model="formData.phone" 
          placeholder="เบอร์โทรศัพท์" 
          :error="!!errors.phone"
        />
        <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
      </div>
      
      <div>
        <label for="referralSource" class="block text-gray-700 font-medium mb-2">รู้จักเราจากไหน</label>
        <select 
          id="referralSource"
          v-model="formData.referralSource" 
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          :class="{'border-red-500': errors.referralSource}"
        >
          <option value="" disabled>เลือกแหล่งที่มา</option>
          <option v-for="source in referralSources" :key="source.id" :value="source.id">
            {{ source.name }}
          </option>
        </select>
        <p v-if="errors.referralSource" class="mt-1 text-sm text-red-500">{{ errors.referralSource }}</p>
      </div>
    </div>
    
    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-8">
      <Button 
        v-if="currentStep > 0" 
        @click="prevStep" 
        variant="secondary"
        size="md"
      >
        ย้อนกลับ
      </Button>
      <div v-else></div>
      
      <Button 
        v-if="currentStep < steps.length - 1" 
        @click="handleNextStep" 
        variant="primary"
        size="md"
      >
        ถัดไป
      </Button>
      
      <Button 
        v-else 
        @click="handleSubmit" 
        variant="primary"
        size="md"
        :disabled="isLoading"
      >
        {{ isLoading ? 'กำลังสมัคร...' : 'สมัครสมาชิก' }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import Input from '~/components/atoms/Input.vue'
import Button from '~/components/atoms/Button.vue'

const props = defineProps({
  currentStep: {
    type: Number,
    default: 0
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['next-step', 'prev-step', 'submit'])

// Steps configuration
const steps = ['login', 'bank', 'personal']

// Form data
const formData = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  bank: '',
  bankName: '',
  accountName: '',
  accountNumber: '',
  firstName: '',
  lastName: '',
  phone: '',
  referralSource: ''
})

// Banks and referral sources
const banks = [
  { id: 'kbank', name: 'กสิกรไทย' },
  { id: 'scb', name: 'ไทยพาณิชย์' },
  { id: 'bbl', name: 'กรุงเทพ' },
  { id: 'ktb', name: 'กรุงไทย' },
  { id: 'bay', name: 'กรุงศรีอยุธยา' },
  { id: 'tmb', name: 'ทหารไทยธนชาต' }
]

const referralSources = [
  { id: 'friend', name: 'เพื่อนแนะนำ' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'line', name: 'Line' },
  { id: 'google', name: 'Google' },
  { id: 'other', name: 'อื่นๆ' }
]

// Validation and errors
const errors = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  bank: '',
  accountName: '',
  accountNumber: '',
  firstName: '',
  lastName: '',
  phone: '',
  referralSource: ''
})

// Update bankName when bank is selected
watch(() => formData.bank, (newValue) => {
  if (newValue) {
    const selectedBank = banks.find(bank => bank.id === newValue)
    if (selectedBank) {
      formData.bankName = selectedBank.name
    }
  }
})

const validateCurrentStep = () => {
  let isValid = true
  
  // Reset errors for current step
  if (props.currentStep === 0) {
    errors.username = ''
    errors.password = ''
    errors.confirmPassword = ''
    
    if (!formData.username) {
      errors.username = 'กรุณากรอกชื่อผู้ใช้'
      isValid = false
    } else if (formData.username.length < 4) {
      errors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร'
      isValid = false
    }
    
    if (!formData.password) {
      errors.password = 'กรุณากรอกรหัสผ่าน'
      isValid = false
    } else if (formData.password.length < 6) {
      errors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
      isValid = false
    }
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'กรุณายืนยันรหัสผ่าน'
      isValid = false
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'รหัสผ่านไม่ตรงกัน'
      isValid = false
    }
  } 
  else if (props.currentStep === 1) {
    errors.bank = ''
    errors.accountName = ''
    errors.accountNumber = ''
    
    if (!formData.bank) {
      errors.bank = 'กรุณาเลือกธนาคาร'
      isValid = false
    }
    
    if (!formData.accountName) {
      errors.accountName = 'กรุณากรอกชื่อบัญชี'
      isValid = false
    }
    
    if (!formData.accountNumber) {
      errors.accountNumber = 'กรุณากรอกเลขบัญชี'
      isValid = false
    } else if (!/^\d{10,12}$/.test(formData.accountNumber)) {
      errors.accountNumber = 'เลขบัญชีต้องเป็นตัวเลข 10-12 หลัก'
      isValid = false
    }
  } 
  else if (props.currentStep === 2) {
    errors.firstName = ''
    errors.lastName = ''
    errors.phone = ''
    errors.referralSource = ''
    
    if (!formData.firstName) {
      errors.firstName = 'กรุณากรอกชื่อ'
      isValid = false
    }
    
    if (!formData.lastName) {
      errors.lastName = 'กรุณากรอกนามสกุล'
      isValid = false
    }
    
    if (!formData.phone) {
      errors.phone = 'กรุณากรอกเบอร์โทรศัพท์'
      isValid = false
    } else if (!/^0\d{9}$/.test(formData.phone)) {
      errors.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องขึ้นต้นด้วย 0 และมี 10 หลัก)'
      isValid = false
    }
    
    if (!formData.referralSource) {
      errors.referralSource = 'กรุณาเลือกแหล่งที่มา'
      isValid = false
    }
  }
  
  return isValid
}

const handleNextStep = () => {
  if (validateCurrentStep()) {
    emit('next-step')
  }
}

const prevStep = () => {
  emit('prev-step')
}

const handleSubmit = () => {
  if (validateCurrentStep()) {
    emit('submit', { ...formData })
  }
}
</script>