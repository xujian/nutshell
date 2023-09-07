import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../layouts/MasterLayout.vue'
import HomePage from '../pages/HomePage.vue'
import PalettesPage from '../pages/themes/PalettesPage.vue'
import ButtonPage from '../pages/components/ButtonPage.vue'
import InputPage from '../pages/components/InputPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: MasterLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/palettes',
          name: 'palettes',
          component: PalettesPage,
        },
        {
          path: '/components/button',
          name: 'components-button',
          component: ButtonPage,
        },
        {
          path: '/components/input',
          name: 'components-input',
          component: InputPage,
        },  
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../pages/AboutPage.vue')
        }
      ]
    },
  ]
})

export default router
