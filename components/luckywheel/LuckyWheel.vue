<template>
  <div class="relative w-80 h-80 mx-auto mb-6">
    <!-- วงล้อ -->
    <div
      class="w-full h-full rounded-full border-8 border-amber-300 relative transition-transform duration-[3000ms] ease-out overflow-hidden bg-white shadow-lg"
      :style="{ 
        transform: `rotate(${currentRotation}deg)`,
        boxShadow: '0 0 0 4px rgba(251, 191, 36, 0.5), inset 0 0 10px rgba(0,0,0,0.1)'
      }"
    >
      <!-- Gold dots around the border -->
      <div v-for="dot in 16" :key="`dot-${dot}`" class="absolute w-3 h-3 rounded-full bg-amber-200"
        :style="{
          top: `${50 - 48 * Math.cos(dot * Math.PI / 8)}%`,
          left: `${50 + 48 * Math.sin(dot * Math.PI / 8)}%`,
          transform: 'translate(-50%, -50%)'
        }"
      ></div>

      <!-- Alternating colored segments using CSS background -->
      <div class="absolute inset-0 wheel-segments"></div>

      <!-- Dotted lines radiating from center -->
      <div v-for="line in 8" :key="`line-${line}`" 
        class="absolute top-1/2 left-1/2 h-1/2 w-0 border-r border-amber-300 border-dashed"
        :style="{
          transformOrigin: 'top',
          transform: `rotate(${line * 45}deg)`
        }"
      ></div>

      <!-- Rewards positioned within segments -->
      <div v-for="(reward, index) in rewards" :key="`reward-${index}`"
        class="absolute"
        :style="{
          top: `${50 - 30 * Math.cos((index * 45 + 22.5) * Math.PI / 180)}%`,
          left: `${50 + 30 * Math.sin((index * 45 + 22.5) * Math.PI / 180)}%`,
          transform: 'translate(-50%, -50%)'
        }"
      >
        <div class="flex flex-col items-center">
          <!-- Ticket/coupon -->
          <div 
            :class="[
              'rounded px-3 py-1 mb-1 flex items-center justify-center text-sm font-bold',
              getTicketColor(index + 1)
            ]"
          >
            {{ getTicketValue(index + 1) }}
          </div>
          <div class="text-xs text-amber-800 font-medium text-center">{{ reward }}</div>
        </div>
      </div>
    </div>

    <!-- Center GO button -->
    <div  
      @click="handleSpin"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center z-10 border-4 border-amber-100 shadow-lg cursor-pointer"
      :class="{ 'opacity-75 cursor-not-allowed': spinning }"
      :disabled="spinning"
    >
      <span class="text-white text-3xl font-bold">GO</span>
    </div>

    <!-- Pointer indicator (clear and prominent) -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
      <!-- Triangle pointer -->
      <div class="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-red-500"></div>
      
      <!-- Backing circle for emphasis -->
      <div class="w-5 h-5 rounded-full bg-red-500 -mt-1 flex items-center justify-center">
        <div class="w-3 h-3 rounded-full bg-white"></div>
      </div>
    </div>
    
    <!-- Confetti canvas -->
    <canvas ref="confettiCanvas" class="fixed inset-0 w-full h-full pointer-events-none z-50" style="display: none;"></canvas>
  </div>

  <!-- ปุ่มหมุน -->
  <div class="flex justify-center">
    <button
      :disabled="spinning"
      @click="handleSpin"
      class="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-8 py-3 font-medium flex items-center shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
      หมุนเลย!
    </button>
  </div>
  
  <!-- Winner Modal -->
  <div v-if="showWinnerModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
    <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl transform transition-all animate-bounce-in">
      <div class="text-center">
        <div class="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-2.83 1.17l-.1.1a4 4 0 000 5.66l.1.1A4 4 0 005.45 10H8m4-7v7m0 0v7m0-7h4a4 4 0 014 4v.5a4 4 0 01-4 4H8" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">ยินดีด้วย!</h3>
        <p class="text-gray-600 mb-4">คุณได้รับรางวัล {{ currentPrize }}</p>
        <button @click="closeWinnerModal" class="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-6 py-2 font-medium">
          รับรางวัล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  rotation: {
    type: Number,
    default: 0
  },
  isSpinning: {
    type: Boolean,
    default: false
  },
  rewards: {
    type: Array,
    default: () => [
      '1รางวัล', 
      '2รางวัล', 
      '3รางวัล', 
      '4รางวัล', 
      '5รางวัล',
      '6รางวัล', 
      '7รางวัล', 
      '8รางวัล'
    ]
  }
})

const emit = defineEmits(['spin'])

// Refs
const confettiCanvas = ref(null)
const currentRotation = ref(props.rotation || 0)
const spinning = ref(props.isSpinning || false)
const showWinnerModal = ref(false)
const currentPrize = ref('')

// Get ticket color based on index
const getTicketColor = (index) => {
  const colors = {
    1: 'bg-amber-200 text-amber-800',  // $1
    2: 'bg-blue-200 text-blue-800',    // $2
    3: 'bg-amber-200 text-amber-800',  // $3
    4: 'bg-blue-200 text-blue-800',    // $4
    5: 'bg-amber-200 text-amber-800',  // $5
    6: 'bg-blue-200 text-blue-800',    // $6
    7: 'bg-amber-200 text-amber-800',  // $7
    8: 'bg-blue-200 text-blue-800'     // $8
  }
  return colors[index] || 'bg-amber-200 text-amber-800'
}

// Get ticket value based on index
const getTicketValue = (index) => {
  const values = {
    1: '$1',
    2: '$2',
    3: '$3',
    4: '$4',
    5: '$5',
    6: '$6',
    7: '$7',
    8: '$8'
  }
  return values[index] || ''
}

// Handle spin button click
const handleSpin = () => {
  if (spinning.value) return
  emit('spin')
  spinWheel()
}

// Spin the wheel
const spinWheel = () => {
  spinning.value = true
  
  // Random number of full rotations (3-5) plus a random angle
  const fullRotations = 3 + Math.floor(Math.random() * 3)
  const randomAngle = Math.floor(Math.random() * 360)
  const totalRotation = fullRotations * 360 + randomAngle
  
  // Animate the wheel
  const startRotation = currentRotation.value
  const startTime = Date.now()
  const duration = 3000 // 3 seconds
  
  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for slowing down at the end
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    
    currentRotation.value = startRotation + totalRotation * easeOut(progress)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      // Determine the winning prize
      const normalizedRotation = currentRotation.value % 360
      const sectionSize = 360 / props.rewards.length
      const prizeIndex = Math.floor(normalizedRotation / sectionSize) % props.rewards.length
      
      // Set the current prize
      currentPrize.value = `${getTicketValue(prizeIndex + 1)} (${props.rewards[prizeIndex]})`
      
      // Show confetti and winner modal
      spinning.value = false
      showConfetti()
      showWinnerModal.value = true
    }
  }
  
  animate()
}

// Show confetti animation
const showConfetti = async () => {
  if (process.client) {
    // Dynamically import confetti only on client side
    const confetti = await import('canvas-confetti').then(module => module.default)
    
    // Make canvas visible
    if (confettiCanvas.value) {
      confettiCanvas.value.style.display = 'block'
      
      // Create confetti instance
      const myConfetti = confetti.create(confettiCanvas.value, {
        resize: true,
        useWorker: true
      })
      
      // Fire confetti
      myConfetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#FCD34D', '#F59E0B', '#D97706', '#78350F', '#FBBF24']
      })
      
      // Fire another burst after a delay
      setTimeout(() => {
        myConfetti({
          particleCount: 100,
          angle: 60,
          spread: 80,
          origin: { x: 0 },
          colors: ['#FCD34D', '#F59E0B', '#D97706', '#78350F', '#FBBF24']
        })
      }, 250)
      
      setTimeout(() => {
        myConfetti({
          particleCount: 100,
          angle: 120,
          spread: 80,
          origin: { x: 1 },
          colors: ['#FCD34D', '#F59E0B', '#D97706', '#78350F', '#FBBF24']
        })
      }, 400)
    }
  }
}

// Close winner modal
const closeWinnerModal = () => {
  showWinnerModal.value = false
  if (confettiCanvas.value) {
    confettiCanvas.value.style.display = 'none'
  }
}

// Initialize
onMounted(() => {
  if (process.client) {
    // Preload confetti library
    import('canvas-confetti')
  }
})
</script>

<style scoped>
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-bounce-in {
  animation: bounce-in 0.5s ease-out;
}

/* Wheel segments with alternating colors using CSS */
.wheel-segments {
  background: conic-gradient(
    #FEF3C7 0deg 45deg,
    #FFFFFF 45deg 90deg,
    #FEF3C7 90deg 135deg,
    #FFFFFF 135deg 180deg,
    #FEF3C7 180deg 225deg,
    #FFFFFF 225deg 270deg,
    #FEF3C7 270deg 315deg,
    #FFFFFF 315deg 360deg
  );
  border-radius: 50%;
}
</style>