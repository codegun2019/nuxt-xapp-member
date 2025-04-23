<!-- components/layout/AppHeader.vue -->
<template>
  <header class="font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-pink-00/20 relative overflow-hidden py-4 px-8 text-lg bg-gradient-to-b from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/20 text-white p-4 flex justify-between items-center">
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