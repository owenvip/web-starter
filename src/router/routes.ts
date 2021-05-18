const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: {
      auth: true,
      icon: 'el-icon-s-home',
      title: 'Dashboard',
    },
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo'),
    meta: {
      auth: true,
      title: '示例',
      icon: 'el-icon-menu',
    },
  },
]

export default routes
