<template>
  <div class="grid grid-cols-2 gap-3">
    <div 
      v-for="(item, index) in rewards" 
      :key="index" 
      class="bg-pink-50 rounded-lg p-4 flex items-center"
    >
      <div class="text-2xl mr-4">{{ item.icon }}</div>
      <div>
        <div class="font-bold text-pink-600">{{ item.name }}</div>
        <div class="text-sm text-gray-500">{{ item.reward }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rewards = [
  { name: 'นก', icon: '🐦', reward: 'เครดิตฟรี 10 บาท' },
  { name: 'แมว', icon: '🐱', reward: 'เครดิตฟรี 20 บาท' },
  { name: 'ไก่', icon: '🐔', reward: 'เครดิตฟรี 30 บาท' },
  { name: 'หมา', icon: '🐶', reward: 'เครดิตฟรี 50 บาท' },
  { name: 'ปลา', icon: '🐟', reward: 'เครดิตฟรี 70 บาท' },
  { name: 'เต่า', icon: '🐢', reward: 'เครดิตฟรี 100 บาท' },
  { name: 'กระต่าย', icon: '🐰', reward: 'เครดิตฟรี 150 บาท' },
  { name: 'แพนด้า', icon: '🐼', reward: 'เครดิตฟรี 200 บาท' }
]
</script>
