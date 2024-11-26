import { createWebHistory, createRouter } from 'vue-router'

const GreetingPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')
const LoginPage = () => import('../views/LoginView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomePage },
  {
    path: '/auth',
    component: AuthPage,
    children: [
      { path: 'registration', component: RegistrationPage },
      { path: 'login', component: LoginPage }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
