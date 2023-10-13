import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpCenter from '../views/HelpCenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/help-center',
      component: HelpCenter
    },
    {
      path: '/help-center/:subpath(.*)',
      component: HelpCenter
    }
  ]
})

export default router
