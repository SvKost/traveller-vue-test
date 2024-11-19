<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton.vue'
</script>

<template>
  <div class="px-6 text-grey">
    <div class="mb-[18px]">Додані маркери</div>
    <FavoritePlace v-for="n in 2" :key="n" />
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
