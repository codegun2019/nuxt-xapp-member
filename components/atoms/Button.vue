<template>
  <button
    :class="[
      'rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] relative overflow-hidden py-4 px-8 text-lg shadow-lg w-full',
      variant === 'primary' ? 'bg-gradient-to-b from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-pink-500/20' : '',
      variant === 'secondary' ? 'bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 shadow-gray-500/10' : '',
      variant === 'success' ? 'bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/20' : '',
      variant === 'danger' ? 'bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/20' : '',
      disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '',
      className
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="animate-spin mr-2">⟳</span>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
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