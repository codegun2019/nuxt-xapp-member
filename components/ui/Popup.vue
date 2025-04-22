<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="closeOnBackdrop">
        <Transition :name="animation">
          <div v-if="modelValue" class="bg-white rounded-3xl max-w-md w-full mx-4 shadow-xl overflow-hidden" @click.stop>
            <!-- ปุ่มปิด -->
            <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <!-- เนื้อหา -->
            <div class="p-6 pt-8">
              <slot></slot>
            </div>
            
            <!-- ปุ่มด้านล่าง -->
            <div class="px-6 pb-6">
              <slot name="actions">
                <button 
                  @click="close" 
                  class="w-full rounded-full font-bold flex items-center justify-center transition-all duration-200 hover:scale-[1.02] relative overflow-hidden py-4 px-8 text-lg bg-gradient-to-b from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg shadow-pink-500/20"
                >
                  ตกลง
                </button>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  animation: {
    type: String,
    default: "scale-in",
    validator: (value) => ["scale-in", "slide-down", "slide-up", "bounce-in"].includes(value)
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(["update:modelValue"])

const close = () => {
  emit("update:modelValue", false)
}

const closeOnBackdrop = () => {
  if (props.closeOnOutsideClick) {
    close()
  }
}
</script>

<style scoped>
/* Animation: fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation: scale-in */
.scale-in-enter-active,
.scale-in-leave-active {
  transition: all 0.3s ease;
}
.scale-in-enter-from,
.scale-in-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Animation: slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

/* Animation: slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

/* Animation: bounce-in */
.bounce-in-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
