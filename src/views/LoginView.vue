<script setup>
import { ref } from 'vue'
import { loginUser } from '../components/api/user'
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)

const handleLoginUser = async (userData) => {
  isLoading.value = true
  try {
    await loginUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
</template>
