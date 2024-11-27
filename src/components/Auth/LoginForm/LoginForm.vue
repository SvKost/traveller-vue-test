<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../../../components/IButton.vue'
import IInput from '../../../components/IInput.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput placeholder="email@gmail.com" label="Електронна пошта" v-model="userData.email" />
    <IInput type="password" label="Пароль" v-model="userData.password" />
    <IButton class="w-full mt-10" variant="gradient" type="submit">Увійти</IButton>
  </form>
</template>
