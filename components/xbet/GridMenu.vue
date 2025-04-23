<template>
  <TransitionGroup name="fade-scale" tag="div" class="feature-buttons-grid">
    <button
      v-for="(button, index) in buttons"
      :key="button.id"
      class="feature-button border border-white/20 rounded-lg shadow-sm"
      :class="button.colorClass"
      @click="$emit('button-click', button.id)"
    >
      <div class="button-icon">
        <component :is="button.icon" class="w-6 h-6" />
      </div>
      <span class="button-label">{{ button.label }}</span>
    </button>
  </TransitionGroup>
</template>

<script setup>
import {
  GiftIcon,
  WalletIcon,
  ShareIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
  CubeIcon,
  TrophyIcon
} from '@heroicons/vue/24/outline'

defineEmits(['button-click'])

const buttons = [
  { id: 'promotion', label: 'โปรโมชั่น', icon: GiftIcon, colorClass: 'bg-pink' },
  { id: 'deposit', label: 'ฝาก', icon: WalletIcon, colorClass: 'bg-green' },
  { id: 'withdraw', label: 'ถอน', icon: WalletIcon, colorClass: 'bg-blue' },
  { id: 'share', label: 'แชร์รายได้', icon: ShareIcon, colorClass: 'bg-pink-light' },
  { id: 'checkin', label: 'เช็คอิน', icon: CalendarDaysIcon, colorClass: 'bg-pink' },
  { id: 'wheel', label: 'กงล้อโชค', icon: Cog6ToothIcon, colorClass: 'bg-pink-light' },
  { id: 'quest', label: 'เควส', icon: SparklesIcon, colorClass: 'bg-purple' },
  { id: 'contact', label: 'ติดต่อเรา', icon: ChatBubbleBottomCenterTextIcon, colorClass: 'bg-orange' },
  { id: 'cashback', label: 'คืนยอดเสีย', icon: ArrowPathIcon, colorClass: 'bg-pink-light' },
  { id: 'redenvelope', label: 'เปิดอั่งเปา', icon: CubeIcon, colorClass: 'bg-pink' },
  { id: 'freecredit', label: 'เครดิตฟรี', icon: GiftIcon, colorClass: 'bg-pink' },
  { id: 'ranking', label: 'อันดับนักเล่น', icon: TrophyIcon, colorClass: 'bg-pink-light' }
]
</script>

<style scoped>
.feature-buttons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.feature-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.3s ease;
}

.feature-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-button:active {
  transform: scale(0.98);
}

.button-icon {
  margin-bottom: 8px;
}

.button-label {
  font-size: 14px;
  font-weight: 500;
}

/* Background Gradients */
.bg-pink {
  background: linear-gradient(135deg, #F06292 0%, #E91E63 100%);
}

.bg-pink-light {
  background: linear-gradient(135deg, #EC407A 0%, #D81B60 100%);
}

.bg-green {
  background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
}

.bg-blue {
  background: linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%);
}

.bg-purple {
  background: linear-gradient(135deg, #AB47BC 0%, #9C27B0 100%);
}

.bg-orange {
  background: linear-gradient(135deg, #FFA726 0%, #FF9800 100%);
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 480px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .button-label {
    font-size: 12px;
  }
}

/* ✨ Animation on Enter */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.35s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
