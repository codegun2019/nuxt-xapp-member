<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

defineEmits(["update:modelValue"])
</script>
