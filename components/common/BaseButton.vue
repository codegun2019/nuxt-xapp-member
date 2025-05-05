<template>
  <button :class="['flex items-center rounded-full font-medium px-4 py-2', color]" @click="$emit('click')">
    <IconWrapper :icon="icon" class="w-5 h-5 mr-2" v-if="icon" />
    <slot />
  </button>
</template>

<script setup>
defineProps({
  icon: String,
  color: {
    type: String,
    default: 'bg-pink-500 text-white'
  }
})
</script>
