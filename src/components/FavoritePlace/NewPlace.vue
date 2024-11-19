<script setup>
import { reactive, ref, toRaw } from 'vue'
import FormContainer from '../Auth/FormContainer.vue'
import IInput from '../IInput.vue'
import IButton from '../IButton.vue'
import InputUploadImg from '../InputUploadImg/InputUploadImg.vue'

const emit = defineEmits(['submit'])
const imgUrlBase64 = ref('')

const formData = reactive({
  location: '',
  description: ''
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(formData))">
    <IInput placeholder="Золоті Ворота" label="Локація" />
    <IInput type="textarea" placeholder="Введіть текст" label="Опис" />
    <img v-if="imgUrlBase64" :src="imgUrlBase64" />
    <InputUploadImg @uploaded="(base64) => (imgUrlBase64 = base64)" />
    <IButton class="w-full mt-10" variant="gradient" type="submit">Додати</IButton>
  </FormContainer>
</template>
