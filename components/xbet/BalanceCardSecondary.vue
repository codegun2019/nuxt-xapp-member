<template>
  <div class="secondary-cards-container">
    <div class="secondary-card" v-for="(card, index) in cards" :key="index">
      <div class="card-icon">
        <component :is="card.icon" />
      </div>
      <div class="card-label">{{ card.label }}</div>
      <div class="card-value">
        <span v-if="card.prefix">{{ card.prefix }}</span>
        {{ card.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

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

const DiamondIcon = () => h('svg', {
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
  h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
])

const cards = [
  {
    icon: RefreshIcon,
    label: 'คืนยอดเสีย',
    value: '0.00',
    prefix: '฿'
  },
  {
    icon: GiftIcon,
    label: 'เครดิตฟรี',
    value: '0.00',
    prefix: '฿'
  },
  {
    icon: DiamondIcon,
    label: 'เพชร',
    value: '0',
    prefix: ''
  }
]
</script>

<style scoped>
.secondary-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.secondary-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.secondary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(233, 30, 99, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  color: #E91E63;
}

.card-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
  text-align: center;
}

.card-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

@media (max-width: 768px) {
  .secondary-cards-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  .secondary-card {
    padding: 12px;
  }
  
  .card-icon {
    width: 36px;
    height: 36px;
  }
  
  .card-label {
    font-size: 12px;
  }
  
  .card-value {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .card-label {
    font-size: 11px;
  }
  
  .card-value {
    font-size: 14px;
  }
}
</style>