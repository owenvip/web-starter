import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

type Route = RouteRecordRaw & { meta: Record<string, unknown> }

const baseRoutes: Route[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/login'),
    meta: {
      auth: false,
      header: null,
      sider: null,
      visible: false,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.concat(baseRoutes),
})
export default router
