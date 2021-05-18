import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/app/login'),
    props: {
      auth: false,
      header: null,
      slider: null,
      visible: false,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...baseRoutes, ...routes],
})
export default router
