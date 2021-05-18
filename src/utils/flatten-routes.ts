const flattenRoutes = (routes, flattenedRoutes = []) => {
  routes.forEach((route) => {
    flattenedRoutes.push(route)
    if (Array.isArray(route.routes)) {
      flattenRoutes(route.routes, flattenedRoutes)
    }
  })
  return flattenedRoutes
}
export default flattenRoutes
