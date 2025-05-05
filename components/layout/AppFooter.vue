<template>
  <footer class="relative">
    <!-- Game button that extends above the footer -->
    <div class="absolute left-1/2 transform -translate-x-1/2 -top-10">
      <NuxtLink to="/games" class="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M12 12h.01"></path>
          <path d="M7 12h.01"></path>
          <path d="M17 12h.01"></path>
        </svg>
        <span class="text-xs mt-1">เล่นเกม</span>
      </NuxtLink>
    </div>
    
    <!-- Footer navigation -->
    <nav class="bg-pink-500 text-white py-4 px-2 grid grid-cols-5">
      <!-- Home -->
      <NuxtLink to="/" class="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="text-xs mt-1">หน้าแรก</span>
      </NuxtLink>
      
      <!-- Withdraw -->
      <NuxtLink to="/withdraw" class="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
        <span class="text-xs mt-1">ถอนเงิน</span>
      </NuxtLink>
      
      <!-- Empty space for the game button -->
      <div></div>
      
      <!-- Deposit -->
      <NuxtLink to="/deposit" class="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
        <span class="text-xs mt-1">ฝากเงิน</span>
      </NuxtLink>
      
      <!-- Contact -->
      <NuxtLink to="/contact" class="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="text-xs mt-1">ติดต่อ</span>
      </NuxtLink>
    </nav>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// You can add props or emits if needed
const emit = defineEmits(['navigate']);

// Optional: Track active route
const route = useRoute();
const activeRoute = computed(() => route.path);

// Optional: Function to handle navigation with emit
const navigate = (path) => {
  emit('navigate', path);
};
</script>

<style scoped>
/* Add any custom styles here if needed */
.router-link-active {
  opacity: 0.8;
}
</style>