<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup>
import * as Icons from '@heroicons/vue/24/outline'
const props = defineProps({ icon: String })
const iconComponent = computed(() => Icons[props.icon])
</script>
