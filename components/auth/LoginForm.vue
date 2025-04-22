<!-- components/auth/LoginForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="mb-4">
      <label for="username" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">
        {{ $t('auth.username') }}
      </label>
      <input 
        type="text" 
        id="username" 
        v-model="form.username" 
        :placeholder="$t('auth.usernamePlaceholder')" 
        class="form-input dark:bg-dark-input dark:text-white dark:border-gray-600"
        :class="{ 'border-red-500': errors.username }"
      />
      <p v-if="errors.username" class="mt-1 text-sm text-red-600 dark:text-red-400">
        {{ errors.username }}
      </p>
    </div>
    
    <div class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <label for="password" class="block text-gray-700 dark:text-gray-300 font-medium">
          {{ $t('auth.password') }}
        </label>
        <a href="#" class="text-brand-500 dark:text-brand-400 text-sm hover:underline">
          {{ $t('auth.forgotPassword') }}
        </a>
      </div>
      <input 
        type="password" 
        id="password" 
        v-model="form.password" 
        :placeholder="$t('auth.passwordPlaceholder')" 
        class="form-input dark:bg-dark-input dark:text-white dark:border-gray-600"
        :class="{ 'border-red-500': errors.password }"
      />
      <p v-if="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">
        {{ errors.password }}
      </p>
    </div>
    
    <div class="mb-6">
      <label class="flex items-center">
        <input 
          type="checkbox" 
          v-model="form.remember" 
          class="h-5 w-5 text-brand-500 border-gray-300 rounded dark:border-gray-600 dark:bg-dark-input"
        />
        <span class="ml-2 text-gray-700 dark:text-gray-300">
          {{ $t('auth.rememberMe') }}
        </span>
      </label>
    </div>
    
    <Button 
      type="submit" 
      variant="primary" 
      size="lg" 
      :rounded="true" 
      :block="true"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? $t('auth.loggingIn') : $t('auth.login') }}
    </Button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from '../ui/Button.vue'

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const errors = reactive({
  username: '',
  password: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  // Reset errors
  errors.username = ''
  errors.password = ''
  
  // Validate
  let isValid = true
  
  if (!form.username) {
    errors.username = 'กรุณากรอกชื่อผู้ใช้'
    isValid = false
  }
  
  if (!form.password) {
    errors.password = 'กรุณากรอกรหัสผ่าน'
    isValid = false
  }
  
  if (!isValid) return
  
  // Submit form
  isSubmitting.value = true
  
  try {
    // Call API or authentication service
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Login successful', form)
    
    // Redirect or emit event
  } catch (error) {
    console.error('Login failed', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>