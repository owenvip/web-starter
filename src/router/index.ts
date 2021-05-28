import React, { lazy } from 'react'
import { DashboardOutlined, DatabaseOutlined } from '@ant-design/icons'
import { RouteConfig } from '@/interfaces/route'
import routes from './routes'

const baseRoutes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    exact: true,
    meta: {
      auth: true,
      icon: <DashboardOutlined />,
      title: 'Dashboard',
    },
  },
  {
    path: '/demo',
    component: lazy(() => import('@/pages/demo')),
    exact: true,
    meta: {
      auth: true,
      title: '示例',
      icon: <DatabaseOutlined />,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...baseRoutes, ...routes],
})
export default router
