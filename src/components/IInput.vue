<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const baseStyles =
  'px-3 py-2 w-full bg-[#FFF] border-[1px] border-lightGrey rounded-md text-[14px] focus:outline-none focus:border-primary placeholder:text-grey'

const isTextarea = computed(() => {
  return props.type === 'textarea'
})

const inputStyles = computed(() => {
  return isTextarea.value ? baseStyles + ' resize-none' : baseStyles
})

const componentName = computed(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
  <div class="w-full text-black flex flex-col mb-4">
    <label class="block">
      <span class="block px-4 mb-2 text-[12px]">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        v-bind="{ ...$props, ...$attrs }"
      />
    </label>
  </div>
</template>
