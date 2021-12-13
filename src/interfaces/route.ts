import { ReactNode } from 'react'
import { RouteProps } from 'react-router'

export interface RouteMeta {
  auth?: boolean
  hideHeader?: boolean
  hideSlider?: boolean
  name?: string
  title?: ReactNode
  icon?: ReactNode
  visible?: boolean
}

export interface RouteConfig extends RouteProps {
  meta?: RouteMeta
  routes?: RouteConfig[]
  path?: string
}
