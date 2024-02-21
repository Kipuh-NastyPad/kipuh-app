import { createRouter, createWebHistory } from 'vue-router'

// Central Pages
import HomeView from '@/kipuh!/views/home/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
