<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../../../components/IButton.vue'
import IInput from '../../../components/IInput.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput placeholder="Ратушняк Ілона" label="Повне ім'я" v-model="userData.name" />
    <IInput placeholder="email@gmail.com" label="Електронна пошта" v-model="userData.email" />
    <IInput type="password" label="Пароль" v-model="userData.password" />

    <IButton class="w-full mt-10" variant="gradient" type="submit" :is-loading="props.isLoading">
      Створити акаунт
    </IButton>
  </form>
</template>
