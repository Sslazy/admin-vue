import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404.vue'
import { hideFullLoading, showFullLoading } from '../utils/tool'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '仪表盘'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录页'
    }
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
  // 全局显示进度条
  showFullLoading()

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

  // 设置页面标题
  let title = '后台系统-' + to.meta.title ? to.meta.title : ''
  document.title = title

  next()
})

// 全局后置守卫
router.afterEach(() => hideFullLoading())

export default router
