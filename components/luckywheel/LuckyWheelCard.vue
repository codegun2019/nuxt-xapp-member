<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <LuckyWheel :rotation="rotation" :isSpinning="isSpinning" @spin="handleSpin" />
    <RewardTabs v-model="activeTab" />
    <RewardList v-if="activeTab === 'rewards'" />
    <SpinHistory v-if="activeTab === 'history'" :history="spinHistory" />
    <!-- <RewardModal v-if="showRewardModal" :amount="currentReward" @close="showRewardModal = false" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LuckyWheel from './LuckyWheel.vue'
import RewardTabs from './RewardTabs.vue'
import RewardList from './RewardList.vue'
import SpinHistory from './SpinHistory.vue'
// import RewardModal from './RewardModal.vue'

const activeTab = ref('rewards')
const rotation = ref(0)
const isSpinning = ref(false)
// const showRewardModal = ref(false)
const currentReward = ref(0)
const spinHistory = ref([])

const rewards = [10, 20, 30, 50, 100, 200]

function handleSpin() {
  if (isSpinning.value) return
  isSpinning.value = true
  const randomAngle = Math.floor(Math.random() * 360)
  const rewardIndex = Math.floor(randomAngle / (360 / rewards.length))
  currentReward.value = rewards[rewardIndex]
  rotation.value += 1440 + randomAngle

  setTimeout(() => {
    isSpinning.value = false
    // showRewardModal.value = true
    spinHistory.value.unshift({
      date: new Date().toLocaleDateString('th-TH'),
      reward: 'เครดิตฟรี',
      amount: currentReward.value
    })
  }, 3000)
}
</script>
