<script setup>
import { loginUser } from '../components/api/user'
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { useRouter } from 'vue-router'
import { useMutation } from '../composables/useMutation'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleLoginUser
} = useMutation({
  mutationFn: loginUser,
  onSuccess: () => router.replace('/map')
})
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
