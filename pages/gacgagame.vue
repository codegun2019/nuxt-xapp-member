<template>
  <div class="min-h-screen bg-amber-50">
    <AppHeader />
    <div class="container mx-auto p-4 max-w-lg">
      <div class="flex items-center justify-between mb-4">
        <!-- Back Button -->
        <button
          class="flex items-center text-amber-600 bg-white rounded-full px-4 py-2 shadow-sm"
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
    </div>
  <div class="bg-amber-50 flex flex-col items-center py-8 px-4">
  
    <!-- Main Gacha Board -->
    <div class="w-full max-w-md relative">
      <!-- Gold frame with dots -->
      <div class="rounded-2xl bg-gradient-to-b from-amber-300 to-amber-400 p-4 shadow-xl border-8 border-amber-200 relative overflow-hidden"
        :class="{ 'shake-animation': isShaking }"
      >
        <!-- Decorative dots -->
        <div v-for="dot in 20" :key="`dot-${dot}`" class="absolute w-3 h-3 rounded-full bg-white opacity-60"
          :style="{
            top: `${Math.floor(dot / 5) * 33}%`,
            left: `${(dot % 5) * 25}%`,
            transform: 'translate(-50%, -50%)'
          }"
        ></div>
        
        <!-- Light effect during spin -->
        <div v-if="isSpinning" class="absolute inset-0 bg-white opacity-0 z-20 spin-light-effect"></div>
        
        <!-- Grid of items -->
        <div class="grid grid-cols-3 gap-3 relative z-10">
          <div v-for="(item, index) in gachaItems" :key="`item-${index}`" 
            class="bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-3 flex flex-col items-center justify-center shadow-md border border-amber-200 transition-all duration-300"
            :class="{ 
              'from-amber-400 to-amber-500 text-white': index === 4,
              'spin-item-animation': isSpinning && index !== 4,
              'highlight-animation': highlightedIndex === index && index !== 4
            }"
          >
            <template v-if="index === 4">
              <!-- Center GO button -->
              <button 
                @click="spinGacha" 
                :disabled="isSpinning || userPoints < 100"
                class="text-3xl font-bold w-full h-full flex items-center justify-center transition-transform duration-200"
                :class="{ 'opacity-70 scale-95': isSpinning, 'hover:scale-105': !isSpinning && userPoints >= 100 }"
              >
                GO
              </button>
            </template>
            <template v-else>
              <!-- Item ticket -->
              <div class="w-16 h-10 bg-amber-200 transform -rotate-3 flex items-center justify-center rounded shadow-sm mb-2 transition-all duration-300"
                :class="{ 'rotate-animation': isSpinning }"
              >
                <span class="font-bold text-amber-800">{{ item.value }}</span>
              </div>
              <div class="text-xs text-amber-800 text-center">{{ item.name }}</div>
            </template>
          </div>
        </div>
      </div>
      
      <!-- Pity System Indicators -->
      <div class="mt-4 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg p-3 shadow-md">
        <h3 class="text-center text-amber-800 font-bold mb-2 text-sm">โอกาสการันตี</h3>
        <div class="grid grid-cols-3 gap-2">
          <!-- Rare Pity -->
          <div class="bg-blue-50 rounded-lg p-2 flex flex-col items-center">
            <div class="flex items-center mb-1">
              <div class="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span class="text-xs font-medium text-blue-700">Rare</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                :style="{ width: `${Math.min(100, (pityCounts.rare / pityThresholds.rare) * 100)}%` }"></div>
            </div>
            <div class="text-xs text-blue-700 mt-1">{{ pityCounts.rare }}/{{ pityThresholds.rare }}</div>
          </div>
          
          <!-- Epic Pity -->
          <div class="bg-purple-50 rounded-lg p-2 flex flex-col items-center">
            <div class="flex items-center mb-1">
              <div class="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
              <span class="text-xs font-medium text-purple-700">Epic</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full transition-all duration-300" 
                :style="{ width: `${Math.min(100, (pityCounts.epic / pityThresholds.epic) * 100)}%` }"></div>
            </div>
            <div class="text-xs text-purple-700 mt-1">{{ pityCounts.epic }}/{{ pityThresholds.epic }}</div>
          </div>
          
          <!-- Legendary Pity -->
          <div class="bg-yellow-50 rounded-lg p-2 flex flex-col items-center">
            <div class="flex items-center mb-1">
              <div class="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <span class="text-xs font-medium text-yellow-700">Legendary</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
                :style="{ width: `${Math.min(100, (pityCounts.legendary / pityThresholds.legendary) * 100)}%` }"></div>
            </div>
            <div class="text-xs text-yellow-700 mt-1">{{ pityCounts.legendary }}/{{ pityThresholds.legendary }}</div>
          </div>
        </div>
      </div>
      
      <!-- User stats bar -->
      <div class="mt-4  gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 p-2 flex justify-between items-center shadow-md">
        <div class="bg-amber-100 rounded-full px-4 py-2 flex flex-col items-center w-1/3">
          <div class="text-xl font-bold text-amber-800">{{ userPoints }}</div>
          <div class="text-xs text-amber-700">คะแนนสะสม</div>
        </div>
        
        <button @click="showCollection = true" class="bg-amber-100 rounded-full px-6 py-2 flex items-center justify-center hover:bg-amber-50 transition-colors duration-200">
          <span class="text-amber-800 text-xs">ตรวจสอบ</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <div class="bg-amber-100 rounded-full px-4 py-2 flex flex-col items-center w-1/3">
          <div class="text-xl font-bold text-amber-800">{{ collectedItems.length }}</div>
          <div class="text-xs text-amber-700">ไอเทมที่ได้</div>
        </div>
      </div>
      
      <!-- Recent winners -->
      <div class="mt-4 bg-amber-100 rounded-xl p-4 shadow-md border border-amber-200">
        <h3 class="text-center text-amber-800 font-bold mb-2 ">รายการล่าสุด</h3>
        <transition-group name="list" tag="div">
          <div v-for="(winner, index) in recentWinners" :key="`winner-${winner.id}`" class="text-amber-700 text-xs mb-1 flex">
            <span class="truncate">{{ winner.user }}: </span>
            <span class="font-medium ml-1 truncate">{{ winner.item }}</span>
          </div>
        </transition-group>
      </div>
    </div>
    
    <!-- Gacha Result Modal -->
    <Teleport to="body">
      <transition name="modal">
        <div v-if="showResult" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeResult">
          <div class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div class="relative z-10 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-6 max-w-sm w-full shadow-2xl border-4 border-amber-300 transform transition-all animate-bounce-in">
            <div class="text-center">
              <div class="text-xl font-bold text-amber-800 mb-2">ยินดีด้วย!</div>
              
              <div class="relative w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <!-- Pity indicator if applicable -->
                <div v-if="isPityReward" class="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full z-30 animate-bounce">
                  การันตี!
                </div>
                
                <!-- Rarity rays -->
                <div v-if="currentResult.rarity !== 'rare'" class="absolute inset-0 rays-animation"
                  :class="{
                    'bg-purple-400': currentResult.rarity === 'epic',
                    'bg-yellow-400': currentResult.rarity === 'legendary'
                  }"
                ></div>
                
                <!-- Rarity indicator -->
                <div class="absolute inset-0 rounded-full"
                  :class="{
                    'bg-blue-100 animate-pulse': currentResult.rarity === 'rare',
                    'bg-purple-100 animate-pulse': currentResult.rarity === 'epic',
                    'bg-yellow-100 animate-pulse': currentResult.rarity === 'legendary'
                  }"
                ></div>
                
                <!-- Item display with flip animation -->
                <div class="relative z-10 w-32 h-32 bg-amber-200 rounded-xl shadow-md flex flex-col items-center justify-center transform rotate-3 card-flip">
                  <span class="text-3xl font-bold text-amber-800">{{ currentResult.value }}</span>
                  <span class="text-sm text-amber-700 mt-2">{{ currentResult.name }}</span>
                </div>
                
                <!-- Floating particles for legendary items -->
                <div v-if="currentResult.rarity === 'legendary'" class="absolute inset-0">
                  <div v-for="particle in 10" :key="`particle-${particle}`" class="absolute w-2 h-2 rounded-full bg-yellow-300 opacity-80"
                    :style="{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }"
                    :class="'float-particle'"
                  ></div>
                </div>
                
                <!-- Rarity badge -->
                <div class="absolute bottom-0 right-0 px-3 py-1 rounded-full text-white text-xs font-bold scale-in-animation"
                  :class="{
                    'bg-blue-500': currentResult.rarity === 'rare',
                    'bg-purple-500': currentResult.rarity === 'epic',
                    'bg-yellow-500': currentResult.rarity === 'legendary'
                  }"
                >
                  {{ getRarityText(currentResult.rarity) }}
                </div>
              </div>
              
              <p class="text-amber-700 mb-4">คุณได้รับ {{ currentResult.name }} มูลค่า {{ currentResult.value }}</p>
              
              <div class="flex space-x-3">
                <button @click="spinAgain" class="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full py-2 font-medium hover:from-amber-600 hover:to-amber-700 transition-colors duration-200 transform hover:scale-105">
                  สุ่มอีกครั้ง
                </button>
                <button @click="closeResult" class="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full py-2 font-medium hover:from-amber-500 hover:to-amber-600 transition-colors duration-200 transform hover:scale-105">
                  เก็บรางวัล
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
    
    <!-- Collection Modal -->
    <Teleport to="body">
      <transition name="modal">
        <div v-if="showCollection" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showCollection = false">
          <div class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div class="relative z-10 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-6 max-w-md w-full shadow-2xl border-4 border-amber-300">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold text-amber-800">คอลเลกชันของฉัน</h2>
              <button @click="showCollection = false" class="text-amber-700 hover:text-amber-900 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- Collection Stats -->
            <div class="mb-4 grid grid-cols-3 gap-2 bg-amber-50 p-3 rounded-lg">
              <div class="text-center">
                <div class="text-blue-600 font-bold">{{ getRarityCount('rare') }}</div>
                <div class="text-xs text-blue-700">Rare</div>
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-bold">{{ getRarityCount('epic') }}</div>
                <div class="text-xs text-purple-700">Epic</div>
              </div>
              <div class="text-center">
                <div class="text-yellow-600 font-bold">{{ getRarityCount('legendary') }}</div>
                <div class="text-xs text-yellow-700">Legendary</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto p-1">
              <transition-group name="collection-item">
                <div v-for="(item, index) in collectedItems" :key="`collection-${index}`" 
                  class="bg-white rounded-lg p-3 shadow flex flex-col items-center border hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  :class="{
                    'border-blue-300': item.rarity === 'rare',
                    'border-purple-300': item.rarity === 'epic',
                    'border-yellow-300': item.rarity === 'legendary'
                  }"
                >
                  <div class="w-16 h-10 bg-amber-200 flex items-center justify-center rounded shadow-sm mb-2">
                    <span class="font-bold text-amber-800">{{ item.value }}</span>
                  </div>
                  <div class="text-xs text-amber-800 text-center mb-1">{{ item.name }}</div>
                  <div class="text-xs px-2 py-0.5 rounded-full text-white"
                    :class="{
                      'bg-blue-500': item.rarity === 'rare',
                      'bg-purple-500': item.rarity === 'epic',
                      'bg-yellow-500': item.rarity === 'legendary'
                    }"
                  >
                    {{ getRarityText(item.rarity) }}
                  </div>
                </div>
              </transition-group>
              
              <div v-if="collectedItems.length === 0" class="col-span-3 py-8 text-center text-amber-700">
                คุณยังไม่มีไอเทมในคอลเลกชัน เริ่มสุ่มเพื่อรับไอเทม!
              </div>
            </div>
            
            <div class="mt-4 flex justify-center">
              <button @click="showCollection = false" class="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full px-6 py-2 font-medium hover:from-amber-600 hover:to-amber-700 transition-colors duration-200 transform hover:scale-105">
                กลับไปสุ่ม
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
    
    <!-- Confetti canvas -->
    <canvas ref="confettiCanvas" class="fixed inset-0 pointer-events-none z-50" style="display: none;"></canvas>
  </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import { ChevronLeftIcon, SparklesIcon } from '@heroicons/vue/24/outline'
const router = useRouter()
const totalPoints = ref(416)

const goBack = () => {
  router.back()
}
// Game state
const isSpinning = ref(false)
const isShaking = ref(false)
const showResult = ref(false)
const showCollection = ref(false)
const userPoints = ref(1000)
const currentResult = ref(null)
const confettiCanvas = ref(null)
const highlightedIndex = ref(-1)
const isPityReward = ref(false)
let confettiInstance = null
let spinInterval = null
let animationTimeouts = [] // Array to track all animation timeouts

// Collection of items
const collectedItems = ref([])

// Pity system
const pityThresholds = {
  rare: 5,      // Guarantee a rare item after 5 attempts
  epic: 10,     // Guarantee an epic item after 10 attempts
  legendary: 20 // Guarantee a legendary item after 20 attempts
}

const pityCounts = ref({
  rare: 0,
  epic: 0,
  legendary: 0
})

// Gacha items
const gachaItems = [
  { value: '⚔️', name: 'ดาบตำนาน', rarity: 'legendary', chance: 5 },
  { value: '🛡️', name: 'โล่มังกร', rarity: 'epic', chance: 15 },
  { value: '🏹', name: 'ธนูเวทย์', rarity: 'epic', chance: 15 },
  { value: '🔮', name: 'คริสตัลเวท', rarity: 'rare', chance: 25 },
  { value: 'GO', name: 'สุ่ม', rarity: 'none', chance: 0 },
  { value: '🧪', name: 'ยาวิเศษ', rarity: 'rare', chance: 25 },
  { value: '📜', name: 'คัมภีร์โบราณ', rarity: 'epic', chance: 15 },
  { value: '👑', name: 'มงกุฎราชา', rarity: 'legendary', chance: 5 },
  { value: '💎', name: 'เพชรเจียระไน', rarity: 'rare', chance: 25 }
]

// Recent winners (mock data)
const recentWinners = ref([
  { id: 1, user: 'User123****', item: 'ได้รับ ดาบตำนาน (Legendary)' },
  { id: 2, user: 'User456****', item: 'ได้รับ โล่มังกร (Epic)' },
  { id: 3, user: 'User789****', item: 'ได้รับ ยาวิเศษ (Rare)' }
])

// Get text representation of rarity
const getRarityText = (rarity) => {
  switch (rarity) {
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return '';
  }
}

// Get count of items by rarity
const getRarityCount = (rarity) => {
  return collectedItems.value.filter(item => item.rarity === rarity).length
}

// Clear all animation timeouts and intervals
const clearAllAnimations = () => {
  // Clear spin interval
  if (spinInterval) {
    clearInterval(spinInterval)
    spinInterval = null
  }
  
  // Clear all animation timeouts
  animationTimeouts.forEach(timeout => clearTimeout(timeout))
  animationTimeouts = []
  
  // Reset animation states
  isSpinning.value = false
  isShaking.value = false
  highlightedIndex.value = -1
}

// Check if pity should be applied and get the appropriate item
const getPityItem = () => {
  // Check if legendary pity is reached
  if (pityCounts.value.legendary >= pityThresholds.legendary) {
    // Get a random legendary item
    const legendaryItems = gachaItems.filter(item => item.rarity === 'legendary' && item.chance > 0)
    const randomLegendary = legendaryItems[Math.floor(Math.random() * legendaryItems.length)]
    isPityReward.value = true
    
    // Reset legendary pity counter
    pityCounts.value.legendary = 0
    // Also reset lower rarity counters
    pityCounts.value.epic = 0
    pityCounts.value.rare = 0
    
    return { ...randomLegendary }
  }
  
  // Check if epic pity is reached
  if (pityCounts.value.epic >= pityThresholds.epic) {
    // Get a random epic item
    const epicItems = gachaItems.filter(item => item.rarity === 'epic' && item.chance > 0)
    const randomEpic = epicItems[Math.floor(Math.random() * epicItems.length)]
    isPityReward.value = true
    
    // Reset epic pity counter
    pityCounts.value.epic = 0
    // Also reset rare counter
    pityCounts.value.rare = 0
    // Increment legendary counter
    pityCounts.value.legendary++
    
    return { ...randomEpic }
  }
  
  // Check if rare pity is reached
  if (pityCounts.value.rare >= pityThresholds.rare) {
    // Get a random rare item
    const rareItems = gachaItems.filter(item => item.rarity === 'rare' && item.chance > 0)
    const randomRare = rareItems[Math.floor(Math.random() * rareItems.length)]
    isPityReward.value = true
    
    // Reset rare pity counter
    pityCounts.value.rare = 0
    // Increment epic and legendary counters
    pityCounts.value.epic++
    pityCounts.value.legendary++
    
    return { ...randomRare }
  }
  
  // No pity applied
  return null
}

// Update pity counters based on result
const updatePityCounters = (result) => {
  // If it's a pity reward, counters were already reset in getPityItem
  if (isPityReward.value) return
  
  // If not a pity reward, update counters based on what was obtained
  switch (result.rarity) {
    case 'legendary':
      // Reset all counters when a legendary is obtained naturally
      pityCounts.value.rare = 0
      pityCounts.value.epic = 0
      pityCounts.value.legendary = 0
      break
    case 'epic':
      // Reset rare counter, increment legendary counter
      pityCounts.value.rare = 0
      pityCounts.value.epic = 0
      pityCounts.value.legendary++
      break
    case 'rare':
      // Reset rare counter, increment epic and legendary counters
      pityCounts.value.rare = 0
      pityCounts.value.epic++
      pityCounts.value.legendary++
      break
    default:
      // Increment all counters for non-rare results
      pityCounts.value.rare++
      pityCounts.value.epic++
      pityCounts.value.legendary++
  }
}

// Spin the gacha
const spinGacha = async () => {
  if (isSpinning.value || userPoints.value < 100) return
  
  // Clear any existing animations first
  clearAllAnimations()
  
  isSpinning.value = true
  userPoints.value -= 100 // Cost to spin
  isPityReward.value = false
  
  // Check if pity should be applied
  const pityItem = getPityItem()
  
  // If no pity, create a weighted pool of items based on their chance
  let selectedItem
  if (!pityItem) {
    const pool = []
    gachaItems.forEach(item => {
      if (item.chance > 0) {
        for (let i = 0; i < item.chance; i++) {
          pool.push(item)
        }
      }
    })
    
    // Get random item from pool
    const randomIndex = Math.floor(Math.random() * pool.length)
    selectedItem = { ...pool[randomIndex] }
    
    // Update pity counters based on the result
    updatePityCounters(selectedItem)
  } else {
    // Use the pity item
    selectedItem = pityItem
  }
  
  // Set the current result early (but don't show it yet)
  currentResult.value = selectedItem
  
  // Start the spinning animation
  let highlightSpeed = 100
  let highlightCount = 0
  const maxHighlights = 30 // Total number of highlights during spin
  
  // Start the highlight animation
  const runSpinAnimation = () => {
    // Get a valid index (not the center)
    let validIndices = [0, 1, 2, 3, 5, 6, 7, 8]
    highlightedIndex.value = validIndices[Math.floor(Math.random() * validIndices.length)]
    
    highlightCount++
    
    // Gradually slow down
    if (highlightCount > maxHighlights * 0.5) {
      highlightSpeed = 150
    }
    if (highlightCount > maxHighlights * 0.7) {
      highlightSpeed = 200
    }
    if (highlightCount > maxHighlights * 0.8) {
      highlightSpeed = 250
    }
    if (highlightCount > maxHighlights * 0.9) {
      highlightSpeed = 300
    }
    
    // End the spinning animation
    if (highlightCount >= maxHighlights) {
      clearInterval(spinInterval)
      spinInterval = null
      
      // Find the index in gachaItems that matches our result
      const resultItemIndex = gachaItems.findIndex(item => 
        item.value === currentResult.value.value && 
        item.name === currentResult.value.name &&
        item.rarity === currentResult.value.rarity
      )
      
      // Convert to grid index (skip the center)
      let gridIndex = resultItemIndex
      if (gridIndex > 4) gridIndex -= 1
      
      // Final highlight on the winning item
      highlightedIndex.value = gridIndex
      
      // Shake animation for dramatic effect
      isShaking.value = true
      
      // Use timeout to manage animation sequence
      const shakeTimeout = setTimeout(() => {
        isShaking.value = false
        
        // Add to collection
        collectedItems.value.push({ ...currentResult.value, id: Date.now() })
        
        // Add to recent winners
        const winnerId = Date.now()
        recentWinners.value.unshift({
          id: winnerId,
          user: `User${Math.floor(Math.random() * 1000)}****`,
          item: `ได้รับ ${currentResult.value.name} (${getRarityText(currentResult.value.rarity)})`
        })
        
        // Keep only the 3 most recent winners
        if (recentWinners.value.length > 3) {
          recentWinners.value = recentWinners.value.slice(0, 3)
        }
        
        // Reset highlight and show result
        const resultTimeout = setTimeout(() => {
          highlightedIndex.value = -1
          isSpinning.value = false
          showResult.value = true
          
          // Show confetti for epic/legendary or pity rewards
          if (currentResult.value.rarity === 'epic' || currentResult.value.rarity === 'legendary' || isPityReward.value) {
            triggerConfetti()
          }
        }, 500)
        
        // Add timeout to animation tracking array
        animationTimeouts.push(resultTimeout)
      }, 600)
      
      // Add timeout to animation tracking array
      animationTimeouts.push(shakeTimeout)
    }
    
    // Schedule the next animation frame if we're still spinning
    if (highlightCount < maxHighlights && isSpinning.value) {
      clearInterval(spinInterval)
      spinInterval = setTimeout(runSpinAnimation, highlightSpeed)
    }
  }
  
  // Start the animation loop
  spinInterval = setTimeout(runSpinAnimation, highlightSpeed)
}

// Trigger confetti animation
const triggerConfetti = async () => {
  if (process.client) {
    try {
      // Make canvas visible
      if (confettiCanvas.value) {
        confettiCanvas.value.style.display = 'block'
        
        // Dynamically import confetti
        const confetti = await import('canvas-confetti').then(module => module.default)
        
        // Create confetti instance
        confettiInstance = confetti.create(confettiCanvas.value, {
          resize: true,
          useWorker: true
        })
        
        // Fire confetti
        confettiInstance({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
        
        // Add more bursts for legendary items or pity rewards
        if (currentResult.value.rarity === 'legendary' || isPityReward.value) {
          const confettiTimeout1 = setTimeout(() => {
            confettiInstance({
              particleCount: 50,
              angle: 60,
              spread: 50,
              origin: { x: 0.2, y: 0.6 },
              colors: ['#FCD34D', '#F59E0B', '#D97706']
            })
          }, 300)
          
          const confettiTimeout2 = setTimeout(() => {
            confettiInstance({
              particleCount: 50,
              angle: 120,
              spread: 50,
              origin: { x: 0.8, y: 0.6 },
              colors: ['#FCD34D', '#F59E0B', '#D97706']
            })
          }, 600)
          
          // Add confetti timeouts to tracking array
          animationTimeouts.push(confettiTimeout1, confettiTimeout2)
        }
      }
    } catch (error) {
      console.error('Error loading confetti:', error)
    }
  }
}

// Close result modal
const closeResult = () => {
  showResult.value = false
  if (confettiCanvas.value) {
    confettiCanvas.value.style.display = 'none'
  }
  
  // Clear any remaining animations
  clearAllAnimations()
}

// Spin again from result modal
const spinAgain = () => {
  closeResult()
  nextTick(() => {
    spinGacha()
  })
}

// Initialize
onMounted(() => {
  if (process.client) {
    // Preload confetti library
    import('canvas-confetti')
    
    // Load saved pity counts from localStorage if available
    try {
      const savedPityCounts = localStorage.getItem('pityCounts')
      if (savedPityCounts) {
        pityCounts.value = JSON.parse(savedPityCounts)
      }
    } catch (error) {
      console.error('Error loading pity counts:', error)
    }
  }
})

// Save pity counts when they change
const savePityCounts = () => {
  if (process.client) {
    try {
      localStorage.setItem('pityCounts', JSON.stringify(pityCounts.value))
    } catch (error) {
      console.error('Error saving pity counts:', error)
    }
  }
}

// Watch for changes to pity counts and save them
import { watch } from 'vue';
watch(pityCounts.value, () => {
  savePityCounts()
}, { deep: true })

// Clean up
onUnmounted(() => {
  // Clear all animations and intervals
  clearAllAnimations()
  
  // Reset confetti
  if (confettiInstance) {
    confettiInstance.reset()
  }
})
</script>

<style scoped>
/* Bounce in animation */
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

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

/* Spinning item animation */
@keyframes spin-item {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.spin-item-animation {
  animation: spin-item 0.5s ease-in-out infinite;
}

/* Highlight animation */
@keyframes highlight {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(251, 191, 36, 0);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.8);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(251, 191, 36, 0);
  }
}

.highlight-animation {
  animation: highlight 0.5s ease-in-out;
  z-index: 20;
}

/* Rotate animation */
@keyframes rotate {
  0% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
}

.rotate-animation {
  animation: rotate 0.5s ease-in-out infinite;
}

/* Shake animation */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.shake-animation {
  animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both;
}

/* Light effect during spin */
@keyframes spin-light {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
}

.spin-light-effect {
  animation: spin-light 1s ease-in-out infinite;
}

/* Card flip animation */
@keyframes card-flip {
  0% {
    transform: rotateY(90deg) rotate(3deg);
    opacity: 0;
  }
  50% {
    transform: rotateY(45deg) rotate(3deg);
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg) rotate(3deg);
    opacity: 1;
  }
}

.card-flip {
  animation: card-flip 0.8s ease-out;
  backface-visibility: hidden;
}

/* Rays animation for epic/legendary items */
@keyframes rays {
  0% {
    opacity: 0;
    clip-path: circle(40% at center);
  }
  50% {
    opacity: 0.3;
    clip-path: circle(60% at center);
  }
  100% {
    opacity: 0;
    clip-path: circle(40% at center);
  }
}

.rays-animation {
  animation: rays 2s ease-in-out infinite;
  mask-image: radial-gradient(transparent 40%, black 70%);
  -webkit-mask-image: radial-gradient(transparent 40%, black 70%);
}

/* Scale in animation for badges */
@keyframes scale-in {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.scale-in-animation {
  animation: scale-in 0.5s ease-out 0.3s both;
}

/* Floating particles animation */
@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0;
  }
}

.float-particle {
  animation: float-particle 3s ease-in-out infinite;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* List transition */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Collection item transition */
.collection-item-enter-active,
.collection-item-leave-active {
  transition: all 0.5s ease;
}
.collection-item-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}
.collection-item-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}
</style>