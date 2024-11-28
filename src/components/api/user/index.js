import { apiFetch } from '../apiFetch'

const BASE_USER_URL = 'user'

export const registerUser = (body) => {
  return apiFetch.post(`${BASE_USER_URL}/register`, body)
}

export const loginUser = (body) => {
  return apiFetch.post(`${BASE_USER_URL}/login`, body)
}

export const logoutUser = () => {
  return apiFetch.get(`${BASE_USER_URL}/logout`)
}

export const refreshUser = () => {
  return apiFetch.post(`${BASE_USER_URL}/refresh`)
}
