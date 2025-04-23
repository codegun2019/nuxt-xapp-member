<template>
  <div
    class="rounded-xl p-5 mb-5 border shadow-md transition relative"
    :class="[theme.border, theme.bg]"
  >
    <!-- Toggle Button -->
    <button
      class="absolute top-2 right-2 text-xs text-gray-500 hover:text-gray-700 transition"
      @click="toggleExpanded"
    >
      {{ expanded ? 'ซ่อน' : 'แสดง' }}
    </button>

    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <div class="relative w-10 h-10 mr-3">
          <div
            :class="`rounded-full w-full h-full flex items-center justify-center ${theme.color} bg-white/80 shadow`"
          >
            <component :is="levelIcon" class="w-5 h-5" />
          </div>
          <div
            v-if="notifications > 0"
            class="absolute -top-1 -right-1 bg-primary-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow"
          >
            {{ notifications }}
          </div>
        </div>
        <div>
          <div class="text-sm font-semibold text-gray-800">
            {{ currentLevel }}
          </div>
          <div class="text-xs text-gray-500 font-medium mt-0.5">
            ระดับ {{ levelNumber }}
          </div>
        </div>
      </div>

      <!-- Progress small -->
      <Transition name="fade">
        <div v-if="!expanded" class="text-right">
          <div class="text-xs font-semibold text-primary-700">
            {{ animatedPoints }} / {{ requiredPoints }}
          </div>
          <div class="w-24 h-1 bg-white/40 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ease-out rounded-full"
              :style="{ width: `${animatedPercentage}%` }"
            ></div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Expanded -->
    <Transition name="slide-fade">
      <div v-if="expanded" class="mt-4 text-sm">
        <!-- Progress full -->
        <div class="mb-2">
          <div class="w-full h-3 bg-white/40 rounded-full overflow-hidden shadow-inner">
            <div
              class="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-300 ease-out"
              :style="{ width: `${animatedPercentage}%` }"
            ></div>
          </div>
          <div class="text-right text-sm font-medium text-primary-700 mt-1">
            {{ animatedPoints }} / {{ requiredPoints }}
          </div>
        </div>

        <!-- Level Info -->
        <div class="flex items-center justify-between mt-4 text-sm">
          <div class="flex items-center gap-1 text-gray-600">
            <component :is="levelIcon" class="w-4 h-4" :class="theme.color" />
            <span>ระดับ:</span>
            <span class="font-semibold text-gray-800">{{ currentLevel }}</span>
          </div>
          <div class="flex items-center gap-1 text-gray-500">
            <ArrowUpRightIcon class="w-4 h-4 text-green-500" />
            <span>ขั้นต่อไป:</span>
            <span class="font-semibold text-gray-700">{{ nextLevel }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCookie } from '#app'
import {
  ShieldCheckIcon,
  StarIcon,
  TrophyIcon,
  SparklesIcon,
  FireIcon,
  ArrowUpRightIcon
} from '@heroicons/vue/24/outline'

// Props
const props = defineProps({
  currentLevel: { type: String, default: 'Bronze' },
  nextLevel: { type: String, default: 'Silver' },
  currentPoints: { type: Number, default: 400 },
  requiredPoints: { type: Number, default: 1000 },
  notifications: { type: Number, default: 2 },
  levelNumber: { type: Number, default: 1 },
  id: { type: String, default: 'default' }
})

// Cookie - expanded state
const cookieKey = `level-card-expanded-${props.id}`
const expanded = useCookie(cookieKey, { default: () => true })
const toggleExpanded = () => {
  expanded.value = !expanded.value
}

// Icon & theme map
const iconMap = {
  Bronze: ShieldCheckIcon,
  Silver: StarIcon,
  Gold: TrophyIcon,
  Platinum: SparklesIcon,
  Diamond: FireIcon
}

const themeMap = {
  Bronze: {
    border: 'border-amber-400',
    bg: 'bg-gradient-to-r from-amber-100 to-orange-100',
    color: 'text-amber-600'
  },
  Silver: {
    border: 'border-gray-400',
    bg: 'bg-gradient-to-r from-gray-100 to-slate-100',
    color: 'text-gray-600'
  },
  Gold: {
    border: 'border-yellow-400',
    bg: 'bg-gradient-to-r from-yellow-100 to-orange-100',
    color: 'text-yellow-600'
  },
  Platinum: {
    border: 'border-indigo-400',
    bg: 'bg-gradient-to-r from-indigo-100 to-purple-100',
    color: 'text-indigo-600'
  },
  Diamond: {
    border: 'border-sky-400',
    bg: 'bg-gradient-to-r from-sky-100 to-cyan-100',
    color: 'text-sky-600'
  }
}

const levelIcon = computed(() => iconMap[props.currentLevel] || ShieldCheckIcon)
const theme = computed(() => themeMap[props.currentLevel] || themeMap.Bronze)

const progressPercentage = computed(() =>
  Math.min((props.currentPoints / props.requiredPoints) * 100, 100)
)

// Animation state
const animatedPoints = ref(0)
const animatedPercentage = ref(0)

onMounted(() => {
  animateProgress()
})

function animateProgress() {
  const duration = 1000
  const start = performance.now()

  const animate = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)

    animatedPoints.value = Math.floor(progress * props.currentPoints)
    animatedPercentage.value = Math.min(
      (animatedPoints.value / props.requiredPoints) * 100,
      100
    )

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      animatedPoints.value = props.currentPoints
      animatedPercentage.value = progressPercentage.value
    }
  }

  requestAnimationFrame(animate)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
