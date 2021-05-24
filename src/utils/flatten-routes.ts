import { RouteRecordRaw } from 'vue-router'

const flattenRoutes = (
  routes: RouteRecordRaw[],
  store: RouteRecordRaw[] = []
) => {
  routes.forEach((route) => {
    store.push(route)
    if (Array.isArray(route.children)) {
      flattenRoutes(route.children, store)
    }
  })
  return store
}

export default flattenRoutes
