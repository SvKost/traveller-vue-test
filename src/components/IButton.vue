<script setup>
import { computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient'].includes(value)
    }
  },
  to: String,
  isLoading: {
    default: false,
    type: Boolean
  }
})

const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-button-gradient' : 'bg-lightPrimary'
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="flex content-center justify-center m-auto rounded-xl py-[14px] px-10 text-white text-base font-bold -tracking-tight"
    :class="bgStyles"
    :to="link"
  >
    <template v-if="isLoading"> ...Loading </template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
