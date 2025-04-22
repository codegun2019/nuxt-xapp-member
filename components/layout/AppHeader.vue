<!-- components/layout/AppHeader.vue -->
<template>
  <header class="bg-pink-600 text-white p-4 flex justify-between items-center">
    <div class="text-2xl font-bold tracking-wider">XBET</div>
    <div class="flex items-center gap-2">
      <div class="flex items-center bg-yellow-400 rounded-full p-1 pr-3">
        <span class="h-6 w-6 text-yellow-600 mr-1">🪙</span>
        <span class="font-semibold">{{ balance }}</span>
      </div>
      <button class="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-full font-semibold">
        DEPOSIT
      </button>
      <button class="ml-2">
        <span class="h-8 w-8">☰</span>
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  balance: {
    type: Number,
    default: 0
  }
})
</script>