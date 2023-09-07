import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../layouts/MasterLayout.vue'

const HomePage = () => import('../pages/HomePage.vue')
const AboutPage = () => import('../pages/AboutPage.vue')
const PalettesPage = () => import('../pages/themes/PalettesPage.vue')
const ButtonPage = () => import('../pages/components/ButtonPage.vue')
const ChipPage = () => import('../pages/components/ChipPage.vue')
const InputPage = () => import('../pages/components/InputPage.vue')
const DateInputPage = () => import('../pages/components/DateInputPage.vue')
const SelectPage = () => import('../pages/components/SelectPage.vue')
const TablePage = () => import('../pages/components/TablePage.vue')
const DialogPage = () => import('../pages/interactive/DialogPage.vue')
const ToastPage = () => import('../pages/interactive/ToastPage.vue')
const NotFoundPage = () => import('../pages/NotFoundPage.vue')

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
          path: '/components/chip',
          name: 'components-chip',
          component: ChipPage,
        },
        {
          path: '/components/input',
          name: 'components-input',
          component: InputPage,
        },
        {
          path: '/components/date-input',
          name: 'components-date-input',
          component: DateInputPage,
        },
        {
          path: '/components/select',
          name: 'components-select',
          component: SelectPage,
        },
        {
          path: '/components/table',
          name: 'components-table',
          component: TablePage,
        },
        {
          path: '/interactive/dialog',
          name: 'interactive-dialog',
          component: DialogPage,
        },
        {
          path: '/interactive/toast',
          name: 'interactive-toast',
          component: ToastPage,
        },
        {
          path: '/about',
          name: 'about',
          component: () => AboutPage
        },
        {
          path: '/404',
          name: 'not-found',
          component: NotFoundPage
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    },
  ]
})

export default router
