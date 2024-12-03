<script setup>
import { onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { getFavoritePlaces } from '../api/favorite-places'
import NewPlaceModal from '../components/NewPlaceModal/NewPlaceModal.vue'
import { useModal } from '../composables/useModal'

const favoritePlaces = ref([])
const activeId = ref(null)
const map = ref(null)
const markerLngLat = ref(null)
const { isOpen, openModal, closeModal } = useModal()

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: '10' })
}

const handleMapClick = ({ lngLat }) => {
  markerLngLat.value = [lngLat.lng, lngLat.lat]
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  favoritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen">
    <div
      class="bg-white h-full w-[400px] shadow-[0px_4px_31px_0px_rgba(44,44,44,0.10)] shrink-0 overflow-auto pb-10"
    >
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
      />
      <NewPlaceModal :is-open="isOpen" @close="closeModal" />
    </div>

    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="markerLngLat" :lngLat="markerLngLat" anchor="bottom">
          <MarkerIcon class="-7 h-7" />
        </MapboxMarker>
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="-7 h-7" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
