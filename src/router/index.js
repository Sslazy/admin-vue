import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  // 没有登录，强制跳转回登录页
  if (!token && to.path != '/login') {
    toast('请先登录', 'error')
    return next({ path: '/login' })
  }

  // 防止重复登录
  if (token && to.path == '/login') {
    toast('请勿重复登录', 'error')
    return next({ path: from.path ? from.path : '/' })
  }

  const { getStoreInfo } = useAdminStore()
  //  如果登录了，就获取用户信息，存储到 pinia
  if (token) {
    await getStoreInfo()
  }

  next()
})

export default router
