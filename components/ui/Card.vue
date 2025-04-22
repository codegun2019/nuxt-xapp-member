<!-- components/ui/Card.vue -->
<template>
  <div :class="['card', className]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.card {
  @apply bg-white rounded-2xl shadow-sm p-6 border border-gray-100;
}
</style>