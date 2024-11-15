<script setup>
import FavoritePlaceIconButton from './FavoritePlaceIconButton.vue'
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
</script>

<template>
  <section class="mb-5 last:mb-0 text-grey">
    <div class="flex items-center justify-center gap-4">
      <img class="w-[76px] h-[76px] shrink-0 border-none rounded-[4px]" src="" alt="" />
      <div>
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-[14px] text-black font-bold">Пункт незламності</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconButton><EditIcon /></FavoritePlaceIconButton>
            <FavoritePlaceIconButton><DeleteIcon /></FavoritePlaceIconButton>
          </div>
        </div>
        <p class="text-[12px] line-clamp-3">
          Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих
          обстрілів критичної інфраструктури з боку Росії під час російсько-української війни.
        </p>
      </div>
    </div>

    <div class="h-[1px] w-full bg-lightGrey mt-4"></div>
  </section>
</template>
