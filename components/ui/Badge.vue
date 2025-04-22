<!-- components/ui/Badge.vue -->
<template>
  <span :class="[badgeClass, className]">
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'warning', 'error', 'balance'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const badgeClass = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'badge-success'
    case 'warning':
      return 'badge-warning'
    case 'error':
      return 'badge-error'
    case 'balance':
      return 'badge-balance'
    default:
      return 'badge-default'
  }
})
</script>

<style scoped>
.badge-default {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800;
}

.badge-success {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800;
}

.badge-warning {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800;
}

.badge-error {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800;
}

.badge-balance {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-balance-bg text-balance-text;
}
</style>