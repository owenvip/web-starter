/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由懒加载
const Me = () => import('@/components/Me.vue')
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: { name: 'introduce' } },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('@/components/Me.vue'),
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/components/test'),
    },
  ],
})

export default router
