<script setup>
import { ref } from 'vue'
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import IModal from './components/IModal/IModal.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import NewPlace from './components/FavoritePlace/NewPlace.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue'

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <button @click="openModal">Open Modal</button>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white shadow-[0px_4px_31px_0px_rgba(44,44,44,0.10)] h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->

  <!-- <RegistrationForm @submit="console.log" /> -->
  <!-- <LoginForm @submit="console.log" /> -->

  <NewPlace @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal"></IModal>
</template>
