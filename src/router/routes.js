/*
 * @Descripttion: app routes
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: {
      auth: true,
      title: 'Dashboard',
      icon: 'el-icon-s-home',
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
