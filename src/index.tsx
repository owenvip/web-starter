import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './app'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
    })
  }
}

createApp(App).use(store).use(router).mount('#app')
