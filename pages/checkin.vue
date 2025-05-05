<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader />

    <div class="container mx-auto p-4 max-w-lg">
      <div class="flex items-center justify-between mb-4">
        <!-- Back Button -->
        <button
          class="flex items-center text-pink-600 bg-white rounded-full px-4 py-2 shadow-sm"
          @click="goBack"
        >
          <ChevronLeftIcon class="h-5 w-5 mr-1" />
          <span>หน้าหลัก</span>
        </button>

        <!-- Points Display -->
        <div class="flex items-center bg-white rounded-full px-3 py-2 shadow-sm">
          <SparklesIcon class="h-5 w-5 text-yellow-500" />
          <span class="ml-2 text-gray-700 font-medium">{{ totalPoints }}</span>
        </div>
      </div>

      <CheckInCard />

      <CheckInHistory />

    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { ChevronLeftIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import CheckInCard from '~/components/checkin/CheckInCard.vue'
import CheckInHistory from '~/components/checkin/CheckInHistory.vue'
import BaseButton from '~/components/common/BaseButton.vue'

const router = useRouter()
const totalPoints = ref(416)

const goBack = () => {
  router.back()
}

</script>
