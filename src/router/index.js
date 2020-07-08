import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rinrin',
    name: 'Rinrin',
    component: () => import('../views/Rinrin.vue')
  },
  {
    path: '/chiebukuro',
    name: 'ChieBukuro',
    component: () => import('../views/ChieBukuro.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
