<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed top-5 left-1/2 -translate-x-1/2 bg-white text-pink-600 font-medium px-4 py-2 rounded-lg shadow-lg border border-pink-300"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  message: String,
  duration: {
    type: Number,
    default: 2000
  }
})

const visible = ref(false)

watch(
  () => props.show,
  (val) => {
    if (val) {
      visible.value = true
      setTimeout(() => {
        visible.value = false
      }, props.duration)
    }
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>