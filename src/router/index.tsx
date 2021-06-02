import React, { lazy } from 'react'
import definedRoutes from './routes'
import { RouteConfig } from '@/interfaces/route'

const baseRoutes = [
  {
    path: '/login',
    component: lazy(() => import('@/app/login')),
    exact: true,
    meta: {
      auth: false,
      hideHeader: true,
      hideSlider: true,
      visible: false,
    },
  },
]

const composeRoutes = [...definedRoutes, ...baseRoutes] as Array<RouteConfig>

export default composeRoutes
