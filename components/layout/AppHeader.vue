<!-- components/layout/AppHeader.vue -->
<template>
  <header class="bg-brand-500 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
    <div class="text-2xl font-bold tracking-wider">XBET</div>
    <div class="flex items-center gap-2">
      <div class="balance-badge">
        <span class="h-6 w-6 mr-1">🪙</span>
        <span>{{ formatBalance(balance) }}</span>
      </div>
      <Button 
        variant="deposit" 
        :rounded="true"
        @click="navigateToDeposit"
      >
        DEPOSIT
      </Button>
      <button class="ml-2" @click="toggleMenu">
        <span class="h-8 w-8">☰</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from '../ui/Button.vue'

const props = defineProps({
  balance: {
    type: Number,
    default: 0
  }
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigateToDeposit = () => {
  // Navigate to deposit page
}

const formatBalance = (value) => {
  return value.toFixed(2)
}
</script>