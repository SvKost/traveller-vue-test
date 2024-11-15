<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    }
  }
})

const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-button-gradient' : 'bg-lightPrimary'
})
</script>

<template>
  <button
    class="flex content-center justify-center m-auto rounded-xl py-[14px] px-10 text-white text-base font-bold -tracking-tight"
    :class="bgStyles"
  >
    <slot></slot>
  </button>
</template>
