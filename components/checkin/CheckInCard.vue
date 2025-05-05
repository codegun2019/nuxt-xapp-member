<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <!-- Check-in Progress / Status -->
    <div class="text-pink-500 font-medium mb-4">เช็คอินรับรางวัล</div>
    <div class="grid grid-cols-3 gap-3 mb-4">
      <DailyRewardItem
        v-for="(item, index) in dailyRewards"
        :key="index"
        :day="item.day"
        :amount="item.amount"
        :claimed="item.claimed"
      />
    </div>

    <!-- รางวัลพิเศษวันที่ 7 -->
    <div class="bg-pink-50 rounded-lg p-4 text-center mb-6">
      <div class="text-pink-500 font-medium mb-2">วันที่ 7 - รางวัลพิเศษ!</div>
      <div class="w-12 h-12 rounded-full bg-pink-100 mx-auto flex items-center justify-center mb-2">
        <GiftIcon class="w-8 h-8 text-pink-500" />
      </div>
      <div class="text-pink-500 font-medium">รางวัลพิเศษ</div>
    </div>

    <!-- เช็คอินวันนี้ -->
    <CheckInButton :isCheckedInToday="isCheckedInToday" @check-in="checkIn" />

    <!-- ภารกิจโบนัส -->
    <div class="mt-6">
      <h2 class="text-pink-500 font-medium mb-4">ทำภารกิจรับเพิ่ม!</h2>
      <BonusActivityItem
        v-for="(item, index) in bonusActivities"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { GiftIcon } from '@heroicons/vue/24/outline'
import Swal from 'sweetalert2'

import DailyRewardItem from './DailyRewardItem.vue'
import BonusActivityItem from './BonusActivityItem.vue'
import CheckInButton from './CheckInButton.vue'

const isCheckedInToday = ref(false)

const checkIn = () => {
  Swal.fire({
    icon: 'success',
    title: 'ยืนยันการเช็คอิน',
    text: `เช็คอินสำเร็จ!`,
    confirmButtonText: 'ตกลง'
  });
  isCheckedInToday.value = true
}

const dailyRewards = [
  { day: 1, amount: 10, claimed: true },
  { day: 2, amount: 10, claimed: false },
  { day: 3, amount: 10, claimed: false },
  { day: 4, amount: 10, claimed: false },
  { day: 5, amount: 10, claimed: false },
  { day: 6, amount: 10, claimed: false },
]

const bonusActivities = [
  { icon: 'CalendarIcon', title: 'เช็คอิน 3 วันติดต่อกัน', description: 'รับโบนัสเพิ่ม', points: 20 },
  { icon: 'PuzzlePieceIcon', title: 'เล่นเกมครบ 2 เกม', description: 'เล่นเกม 2 เกมต่างกันในวัน', points: 100 },
  { icon: 'BanknotesIcon', title: 'ฝากเงินครบ 2 ครั้ง', description: 'ฝากเงิน 2 ครั้งในวัน', points: 150 }
]
</script>
