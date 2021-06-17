/*
 * @Descripttion: router entry
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/app/login'),
    meta: {
      auth: false,
      hideHeader: true,
      hideSlider: true,
      visible: false,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...baseRoutes, ...routes],
})
export default router
