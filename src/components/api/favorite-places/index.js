import { apiFetch } from '../apiFetch'

const BASE_PLACES_URL = 'points'

export const getFavoritePlaces = () => {
  return apiFetch.get(BASE_PLACES_URL)
}

export const addFavoritePlace = (body) => {
  return apiFetch.post(BASE_PLACES_URL, body)
}

export const updateFavoritePlace = (body) => {
  return apiFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlace = (id) => {
  return apiFetch.delete(BASE_PLACES_URL, id)
}
