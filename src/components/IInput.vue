<script setup>
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
</script>

<template>
  <div class="w-full text-black flex flex-col mb-4">
    <label class="block">
      <span class="block px-4 mb-2 text-[12px]">{{ props.label }}</span>
      <input
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        v-bind="{ ...$props, ...$attrs }"
        class="px-3 py-2 w-full bg-[#FFF] border-[1px] border-lightGrey rounded-md text-[14px] focus:outline-none focus:border-primary placeholder:text-grey"
      />
    </label>
  </div>
</template>
