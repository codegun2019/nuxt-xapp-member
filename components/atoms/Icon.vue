<!-- components/atoms/Icon.vue -->
<template>
  <div 
    :class="[
      size === 'sm' ? 'h-4 w-4' : '',
      size === 'md' ? 'h-6 w-6' : '',
      size === 'lg' ? 'h-8 w-8' : '',
      className
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md'
  },
  className: {
    type: String,
    default: ''
  }
})
</script>