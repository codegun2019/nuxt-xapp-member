<template>
  <div class="feature-buttons-grid">
    <button 
      v-for="(button, index) in buttons" 
      :key="index"
      class="feature-button"
      :class="button.colorClass"
      @click="$emit('button-click', button.id)"
    >
      <div class="button-icon">
        <component :is="button.icon" />
      </div>
      <span class="button-label">{{ button.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { h } from 'vue'

const emit = defineEmits(['button-click'])

// Icon components
const GiftIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('polyline', { points: '20 12 20 22 4 22 4 12' }),
  h('rect', { x: '2', y: '7', width: '20', height: '5' }),
  h('line', { x1: '12', y1: '22', x2: '12', y2: '7' }),
  h('path', { d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' }),
  h('path', { d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' })
])

const WalletIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M21 12V7H5a2 2 0 0 1 0-4h14v4' }),
  h('path', { d: 'M3 5v14a2 2 0 0 0 2 2h16v-5' }),
  h('path', { d: 'M18 12a2 2 0 0 0 0 4h4v-4Z' })
])

const ShareIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '18', cy: '5', r: '3' }),
  h('circle', { cx: '6', cy: '12', r: '3' }),
  h('circle', { cx: '18', cy: '19', r: '3' }),
  h('line', { x1: '8.59', y1: '13.51', x2: '15.42', y2: '17.49' }),
  h('line', { x1: '15.41', y1: '6.51', x2: '8.59', y2: '10.49' })
])

const CalendarIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
  h('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
  h('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
  h('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
])

const WheelIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('path', { d: 'M12 8v8' }),
  h('path', { d: 'M8 12h8' })
])

const SparklesIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M12 3v5' }),
  h('path', { d: 'M5 8h14' }),
  h('path', { d: 'M18 12H6' }),
  h('path', { d: 'M12 16v5' })
])

const MessageIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
])

const RefreshIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M23 4v6h-6' }),
  h('path', { d: 'M1 20v-6h6' }),
  h('path', { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10' }),
  h('path', { d: 'M20.49 15a9 9 0 0 1-14.85 3.36L1 14' })
])

const PackageIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z' }),
  h('polyline', { points: '2.32 6.16 12 11 21.68 6.16' }),
  h('line', { x1: '12', y1: '22.76', x2: '12', y2: '11' })
])

const TrophyIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }),
  h('path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }),
  h('path', { d: 'M4 22h16' }),
  h('path', { d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }),
  h('path', { d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }),
  h('path', { d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' })
])

// Button data
const buttons = [
  {
    id: 'promotion',
    label: 'โปรโมชั่น',
    icon: GiftIcon,
    colorClass: 'bg-pink'
  },
  {
    id: 'deposit',
    label: 'ฝาก',
    icon: WalletIcon,
    colorClass: 'bg-green'
  },
  {
    id: 'withdraw',
    label: 'ถอน',
    icon: WalletIcon,
    colorClass: 'bg-blue'
  },
  {
    id: 'share',
    label: 'แชร์รายได้',
    icon: ShareIcon,
    colorClass: 'bg-pink-light'
  },
  {
    id: 'checkin',
    label: 'เช็คอิน',
    icon: CalendarIcon,
    colorClass: 'bg-pink'
  },
  {
    id: 'wheel',
    label: 'กงล้อโชค',
    icon: WheelIcon,
    colorClass: 'bg-pink-light'
  },
  {
    id: 'quest',
    label: 'เควส',
    icon: SparklesIcon,
    colorClass: 'bg-purple'
  },
  {
    id: 'contact',
    label: 'ติดต่อเรา',
    icon: MessageIcon,
    colorClass: 'bg-orange'
  },
  {
    id: 'cashback',
    label: 'คืนยอดเสีย',
    icon: RefreshIcon,
    colorClass: 'bg-pink-light'
  },
  {
    id: 'redenvelope',
    label: 'เปิดอั่งเปา',
    icon: PackageIcon,
    colorClass: 'bg-pink'
  },
  {
    id: 'freecredit',
    label: 'เครดิตฟรี',
    icon: GiftIcon,
    colorClass: 'bg-pink'
  },
  {
    id: 'ranking',
    label: 'อันดับนักเล่น',
    icon: TrophyIcon,
    colorClass: 'bg-pink-light'
  }
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
  border-radius: 12px;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
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

/* Button background colors */
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

@media (max-width: 1024px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .feature-buttons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .button-label {
    font-size: 12px;
  }
}
</style>