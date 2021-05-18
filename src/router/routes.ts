const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    props: {
      auth: true,
      icon: 'el-icon-s-home',
      title: 'Dashboard',
    },
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo'),
    props: {
      auth: true,
      title: '示例',
      icon: 'el-icon-menu',
    },
  },
]

export default routes
