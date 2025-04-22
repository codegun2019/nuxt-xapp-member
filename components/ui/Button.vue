<!-- components/ui/Button.vue -->
<template>
  <button 
    :class="[
      'transition-colors font-semibold',
      variant === 'primary' && 'bg-brand-500 hover:bg-brand-600 text-white',
      variant === 'secondary' && 'bg-gray-200 hover:bg-gray-300 text-gray-800',
      variant === 'deposit' && 'bg-gradient-to-r from-deposit-500 to-deposit-600 text-white',
      rounded ? 'rounded-full' : 'rounded-md',
      size === 'sm' && 'px-3 py-1 text-sm',
      size === 'md' && 'px-4 py-2',
      size === 'lg' && 'px-6 py-3 text-lg',
      block && 'w-full',
      className
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'deposit', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  rounded: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>