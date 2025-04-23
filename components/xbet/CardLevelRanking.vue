<template>
  <div class="member-level-card">
    <div class="level-info">
      <div class="level-icon">
        <img src="" alt="Level Icon" class="coin-image" />
        <div class="notification-badge" v-if="notifications > 0">
          {{ notifications }}
        </div>
      </div>
      <div class="level-name">{{ currentLevel }}</div>
    </div>
    
    <div class="level-progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progressPercentage}%` }"></div>
      </div>
      <div class="progress-text">{{ currentPoints }}/{{ requiredPoints }}</div>
    </div>
    
    <div class="next-level">
      ระดับถัดไป: {{ nextLevel }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentLevel: {
    type: String,
    default: 'Bronze'
  },
  nextLevel: {
    type: String,
    default: 'Silver'
  },
  currentPoints: {
    type: Number,
    default: 0
  },
  requiredPoints: {
    type: Number,
    default: 1000
  },
  notifications: {
    type: Number,
    default: 1
  }
})

const progressPercentage = computed(() => {
  return (props.currentPoints / props.requiredPoints) * 100
})
</script>

<style scoped>
.member-level-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.level-info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.level-icon {
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 12px;
}

.coin-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #E91E63;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid white;
}

.level-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.level-progress-container {
  margin-bottom: 8px;
}

.progress-bar {
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 4px;
}

.progress-fill {
  height: 100%;
  background-color: #E91E63;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #E91E63;
  font-weight: bold;
}

.next-level {
  font-size: 14px;
  color: #666;
}
</style>