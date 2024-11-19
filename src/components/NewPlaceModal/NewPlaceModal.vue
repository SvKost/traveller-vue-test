<script setup>
import { computed, reactive, toRaw } from 'vue'
import IButton from '../IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputUploadImg from '../InputUploadImg/InputUploadImg.vue'

const emit = defineEmits(['close', 'submit'])

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  }
})

const formData = reactive({
  location: '',
  description: '',
  img: ''
})

const handleUploaded = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', toRaw(formData))" class="min-w-[420px]">
      <div class="flex gap-2 justify-center text-[16px] text-center font-bold mb-10">
        <MarkerIcon />Додати маркер
      </div>
      <IInput placeholder="Золоті Ворота" label="Локація" v-model="formData.location" />
      <IInput
        type="textarea"
        placeholder="Введіть текст"
        label="Опис"
        v-model="formData.description"
      />
      <div class="flex items-center gap-2 mb-10">
        <img
          v-if="formData.img"
          :src="formData.img"
          alt="location image"
          class="w-6 h-6 object-cover"
        />
        <InputUploadImg @uploaded="handleUploaded">{{ uploadText }}</InputUploadImg>
      </div>

      <IButton class="w-full mt-10" variant="gradient" type="submit">Додати</IButton>
    </form>
  </IModal>
</template>
