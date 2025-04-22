<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-gray-700 font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="[
          'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
          'focus:outline-none focus:ring-2',
          disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-white',
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/20'
        ]"
      />
      
      <div v-if="error" class="mt-1 text-sm text-red-500">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substring(2, 9)}`
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
