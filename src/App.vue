<script setup>
// import { ref } from 'vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/settings'
import MarkerIcon from './components/icons/MarkerIcon.vue'
import { ref } from 'vue'

// const isOpen = ref(true)

// const closeModal = () => {
//   isOpen.value = false
// }

// const openModal = () => {
//   isOpen.value = true
// }

const favoritePlaces = [
  {
    id: 1,
    title: 'title 1',
    description: 'fav place 1',
    img: '',
    lngLat: [30.523333, 50.490001]
  },
  {
    id: 2,
    title: 'title 2',
    description: 'fav place 2',
    img: '',
    lngLat: [30.523333, 50.455001]
  }
]

const activeId = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}
</script>

<template>
  <main class="flex h-screen">
    <div
      class="bg-white h-full w-[400px] shadow-[0px_4px_31px_0px_rgba(44,44,44,0.10)] shrink-0 overflow-auto pb-10"
    >
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" />
    </div>

    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="[30.523333, 50.450001]"
        :zoom="10"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lng-lat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="w-7 h-7" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>

<!-- <RegistrationForm @submit="console.log" /> -->
<!-- <LoginForm @submit="console.log" /> -->

<!-- <button @click="openModal">Open Modal</button> -->
<!-- <NewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" /> -->
