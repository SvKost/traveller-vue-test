<script setup>
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { authService } from '../api/authService'
import { useRouter } from 'vue-router'
import { useMutation } from '../composables/useMutation'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleLoginUser
} = useMutation({
  mutationFn: (data) => authService.loginUser(data),
  onSuccess: () => router.replace('/map')
})

// const handleLoginUser = async (userData) => {
//   isLoading.value = true
//   try {
//     await loginUser(userData)
//     router.replace('/map')
//   } catch (error) {
//     console.error(error)
//   } finally {
//     isLoading.value = false
//   }
// }
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
