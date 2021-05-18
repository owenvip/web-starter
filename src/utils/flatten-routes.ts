import { RouteRecordRaw } from 'vue-router'

const flattenRoutes = (routes: RouteRecordRaw[], flattenedRoutes = []): RouteRecordRaw[] => {
  routes.forEach((route) => {
    // @ts-ignore
    flattenedRoutes.push(route)
    if (Array.isArray(route.children)) {
      flattenRoutes(route.children, flattenedRoutes)
    }
  })
  return flattenedRoutes
}
export default flattenRoutes
