/*
 * @Descripttion: app entry
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
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
