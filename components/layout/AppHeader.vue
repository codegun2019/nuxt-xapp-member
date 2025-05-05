<template>
  <header class="bg-pink-600 text-white py-3 px-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="text-3xl font-bold">
      XBET
    </div>

    <!-- Right side controls -->
    <div class="flex items-center gap-2">
      <!-- Balance -->
      <div class="flex items-center">
        <div class="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center mr-2">
          <InformationCircleIcon class="w-6 h-6 text-white" />
        </div>
        <span class="text-xl">{{ balance }}</span>
      </div>

      <!-- Deposit Button -->
      <button
        class="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold"
        @click="$emit('deposit')"
      >
        DEPOSIT
      </button>

      <!-- Menu Button -->
      <button
        @click="toggleMenu"
        class="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center ml-2"
      >
        <Bars3Icon class="w-6 h-6 text-white" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { InformationCircleIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const props = defineProps({
  balance: {
    type: [Number, String],
    default: '124.34'
  }
})

const emit = defineEmits(['menuToggle', 'deposit'])

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('menuToggle', isMenuOpen.value)
}
</script>
