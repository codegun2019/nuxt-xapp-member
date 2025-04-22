<!-- components/atoms/Label.vue -->
<template>
  <label 
    :for="htmlFor"
    :class="[
      'block font-medium',
      size === 'sm' ? 'text-sm' : '',
      size === 'md' ? 'text-base' : '',
      size === 'lg' ? 'text-lg' : '',
      error ? 'text-red-500' : 'text-gray-700',
      className
    ]"
  >
    <slot></slot>
  </label>
</template>

<script setup>
defineProps({
  htmlFor: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md'
  },
  error: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})
</script>