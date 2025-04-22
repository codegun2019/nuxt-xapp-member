<!-- pages/login.vue -->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <AppHeader :balance="124.34" />
    
    <main class="flex-1 flex flex-col p-4">
      <div class="card max-w-md w-full mx-auto mt-16 dark:bg-dark-card dark:border-gray-700">
        <h1 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-1">
          {{ $t('auth.login') }}
        </h1>
        <p class="text-center text-gray-500 dark:text-gray-400 mb-6">
          กรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ
        </p>
        
        <LoginForm />
        
        <div class="text-center mt-6">
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t('auth.noAccount') }} 
            <a href="#" class="text-brand-500 dark:text-brand-400 font-medium hover:underline">
              {{ $t('auth.register') }}
            </a>
          </p>
        </div>
      </div>
    </main>
    
    <BottomNavigation />
    
    <div class="fixed bottom-24 right-6">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue'
import LoginForm from '~/components/auth/LoginForm.vue'
import BottomNavigation from '~/components/layout/BottomNavigation.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
</script>