import { createRouter, createWebHistory } from 'vue-router'

// Central Pages
import HomeView from '@/kipuh!/views/home/home-view.vue'
import ProductMainViewVue from '@/kipuh!/views/products/product-main-view.vue'
import SaleMainView from '@/kipuh!/views/sales/sale-main-view.vue'

// Product SubPages
import ProductListView from '@/kipuh!/views/products/product-list-view.vue'

// Sale SubPages
import SaleStationView from '@/kipuh!/views/sales/sale-station-view.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductMainViewVue,
      children: [
        {
          path: 'list',
          name: 'product-list-view',
          component: ProductListView
        }
      ]
    },
    {
      path: '/sale',
      name: 'sale',
      component: SaleMainView,
      children: [
        {
          path: 'station',
          name: 'sale-station-view',
          component: SaleStationView
        }
      ]
    }
  ]
})

export default router
