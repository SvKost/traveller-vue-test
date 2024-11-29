import { apiFetch } from '../apiFetch'

export const TOKEN_KEY = 'token'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    apiFetch.defaults.headers.common = { Authorization: `Bearer ${token}` }
    this.#token = token
  }

  clearToken() {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
    apiFetch.defaults.headers.common = {}
  }

  async registerUser(body) {
    const { data } = await apiFetch.post('user/register', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async loginUser(body) {
    const { data } = await apiFetch.post('user/login', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async logoutUser() {
    await apiFetch.get('user/logout')

    this.clearToken()
  }

  async refreshUser() {
    return apiFetch.post('user/refresh')
  }
}

export const authService = new AuthService()
