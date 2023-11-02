import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../layouts/MasterLayout.vue'

const HomePage = () => import('../pages/HomePage.vue')
const AboutPage = () => import('../pages/AboutPage.vue')
const PalettesPage = () => import('../pages/themes/PalettesPage.vue')
const ButtonPage = () => import('../pages/components/ButtonPage.vue')
const DropdownPage = () => import('../pages/components/DropdownPage.vue')
const ChipPage = () => import('../pages/components/ChipPage.vue')
const CardPage = () => import('../pages/components/CardPage.vue')
const InputPage = () => import('../pages/components/InputPage.vue')
const FormPage = () => import('../pages/components/FormPage.vue')
const CheckboxPage = () => import('../pages/components/CheckboxPage.vue')
const DateInputPage = () => import('../pages/components/DateInputPage.vue')
const RatingInputPage = () => import('../pages/components/RatingInputPage.vue')
const SelectPage = () => import('../pages/components/SelectPage.vue')
const CascadingSelectPage = () => import('../pages/components/CascadingSelectPage.vue')
const TablePage = () => import('../pages/components/TablePage.vue')
const TabsPage = () => import('../pages/components/TabsPage.vue')
const ListPage = () => import('../pages/components/ListPage.vue')
const DialogPage = () => import('../pages/interactive/DialogPage.vue')
const ToastPage = () => import('../pages/interactive/ToastPage.vue')
const FontPage = () => import('../pages/tokens/FontPage.vue')
const TablePerfPage = () => import('../pages/labs/TablePerfPage.vue')
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
          path: '/components/dropdown',
          name: 'components-dropdown',
          component: DropdownPage,
        },
        {
          path: '/components/checkbox',
          name: 'components-checkbox',
          component: CheckboxPage,
        },
        {
          path: '/components/chip',
          name: 'components-chip',
          component: ChipPage,
        },
        {
          path: '/components/card',
          name: 'components-card',
          component: CardPage,
        },
        {
          path: '/components/tabs',
          name: 'components-tabs',
          component: TabsPage,
        },
        {
          path: '/components/form',
          name: 'components-form',
          component: FormPage,
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
          path: '/components/rating-input',
          name: 'components-rating-input',
          component: RatingInputPage,
        },
        {
          path: '/components/cascading-select',
          name: 'components-cascading-select',
          component: CascadingSelectPage,
        },
        {
          path: '/components/table',
          name: 'components-table',
          component: TablePage,
        },
        {
          path: '/components/list',
          name: 'components-list',
          component: ListPage,
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
          path: '/tokens/font',
          name: 'tokens-toast',
          component: FontPage,
        },
        {
          path: '/about',
          name: 'about',
          component: () => AboutPage
        },
        {
          path: '/labs/table-perf',
          name: 'table-perf',
          component: TablePerfPage
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
