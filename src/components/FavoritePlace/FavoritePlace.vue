<script setup>
import FavoritePlaceIconButton from './FavoritePlaceIconButton.vue'
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean
  }
})
</script>

<template>
  <section class="mb-5 last:mb-0 text-grey">
    <div class="flex justify-center gap-4">
      <img class="w-[76px] h-[76px] shrink-0 border-none rounded-[4px]" :src="props.img" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-[14px] text-black font-bold">{{ title }}</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconButton>
              <EditIcon />
            </FavoritePlaceIconButton>
            <FavoritePlaceIconButton>
              <DeleteIcon />
            </FavoritePlaceIconButton>
          </div>
        </div>
        <p class="text-[12px] line-clamp-3">
          {{ description }}
        </p>
      </div>
    </div>

    <div
      class="h-[1px] w-full bg-lightGrey mt-4"
      :class="{ 'bg-primary': isActive, 'bg-lightGrey': !isActive }"
    ></div>
  </section>
</template>
