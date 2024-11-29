import axios from 'axios'

export const apiFetch = axios.create({
  baseURL: 'https://back-for-vue.b.goit.study/'
})
