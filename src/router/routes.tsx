import React, { lazy } from 'react'
import { DashboardOutlined, DatabaseOutlined } from '@ant-design/icons'
import { RouteConfig } from '@/interfaces/route'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('@/views/home')),
    exact: true,
    meta: {
      auth: true,
      icon: <DashboardOutlined />,
      title: 'Dashboard',
    },
  },
  {
    path: '/demo',
    component: lazy(() => import('@/views/demo')),
    exact: true,
    meta: {
      auth: true,
      title: '示例',
      icon: <DatabaseOutlined />,
    },
  },
]

export default routes
