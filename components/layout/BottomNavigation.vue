<!-- components/layout/BottomNavigation.vue -->
<template>
  <nav class="bg-pink-500 text-white">
    <div class="flex justify-around">
      <a href="#" class="flex flex-col items-center py-2 px-4">
        <span class="h-6 w-6">🏠</span>
        <span class="text-xs mt-1">หน้าแรก</span>
      </a>
      <a href="#" class="flex flex-col items-center py-2 px-4">
        <span class="h-6 w-6">💰</span>
        <span class="text-xs mt-1">ถอนเงิน</span>
      </a>
      <div class="relative">
        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div class="bg-pink-500 rounded-full p-4 shadow-lg">
            <span class="h-8 w-8">🎮</span>
          </div>
        </div>
        <div class="flex flex-col items-center pt-10 pb-2 px-4">
          <span class="text-xs">เล่นเกม</span>
        </div>
      </div>
      <a href="#" class="flex flex-col items-center py-2 px-4">
        <span class="h-6 w-6">💳</span>
        <span class="text-xs mt-1">ฝากเงิน</span>
      </a>
      <a href="#" class="flex flex-col items-center py-2 px-4">
        <span class="h-6 w-6">💬</span>
        <span class="text-xs mt-1">ติดต่อ</span>
      </a>
    </div>
  </nav>
</template>