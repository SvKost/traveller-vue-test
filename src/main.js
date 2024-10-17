import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { svgSpritePlugin } from 'vue-svg-sprite'

const app = createApp(App)

app.use(createPinia())

app.use(svgSpritePlugin, {
  url: './assets/img/icons/icons.svg',
  class: 'w-4 h-4 fill-primary'
})

app.mount('#app')
