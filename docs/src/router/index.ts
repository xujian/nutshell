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
const SwitchPage = () => import('../pages/components/SwitchPage.vue')
const PopoverPage = () => import('../pages/components/PopoverPage.vue')
const FactsPage = () => import('../pages/components/FactsPage.vue')
const FilesPage = () => import('../pages/components/FilesPage.vue')
const EmptyPage = () => import('../pages/components/EmptyPage.vue')
const SelectPage = () => import('../pages/components/SelectPage.vue')
const CascadingSelectPage = () => import('../pages/components/CascadingSelectPage.vue')
const TablePage = () => import('../pages/components/TablePage.vue')
const IconPage = () => import('../pages/components/IconPage.vue')
const PaginationPage = () => import('../pages/components/PaginationPage.vue')
const TabsPage = () => import('../pages/components/TabsPage.vue')
const NumberPage = () => import('../pages/components/NumberPage.vue')
const TabbarPage = () => import('../pages/components/TabbarPage.vue')
const StepperPage = () => import('../pages/components/StepperPage.vue')
const RadioPage = () => import('../pages/components/RadioPage.vue')
const TimelinePage = () => import('../pages/components/TimelinePage.vue')
const UploadPage = () => import('../pages/components/UploadPage.vue')
const ListPage = () => import('../pages/components/ListPage.vue')
const MenuPage = () => import('../pages/components/MenuPage.vue')
const DividerPage = () => import('../pages/components/DividerPage.vue')
const DialogPage = () => import('../pages/interactive/DialogPage.vue')
const ToastPage = () => import('../pages/interactive/ToastPage.vue')
const DrawerPage = () => import('../pages/interactive/DrawerPage.vue')
const FontPage = () => import('../pages/tokens/FontPage.vue')
const TablePerfPage = () => import('../pages/labs/TablePerfPage.vue')
const ComponentListPage = () => import('../pages/labs/ComponentList.vue')
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
          component: HomePage
        },
        {
          path: '/palettes',
          name: 'palettes',
          component: PalettesPage
        },
        {
          path: '/components/button',
          name: 'components-button',
          component: ButtonPage
        },
        {
          path: '/components/dropdown',
          name: 'components-dropdown',
          component: DropdownPage
        },
        {
          path: '/components/checkbox',
          name: 'components-checkbox',
          component: CheckboxPage
        },
        {
          path: '/components/chip',
          name: 'components-chip',
          component: ChipPage
        },
        {
          path: '/components/card',
          name: 'components-card',
          component: CardPage
        },
        {
          path: '/components/tabs',
          name: 'components-tabs',
          component: TabsPage
        },
        {
          path: '/components/tabbar',
          name: 'components-tabbar',
          component: TabbarPage
        },
        {
          path: '/components/stepper',
          name: 'components-stepper',
          component: StepperPage
        },
        {
          path: '/components/form',
          name: 'components-form',
          component: FormPage
        },
        {
          path: '/components/icon',
          name: 'components-icon',
          component: IconPage
        },
        {
          path: '/components/number',
          name: 'components-number',
          component: NumberPage
        },
        {
          path: '/components/input',
          name: 'components-input',
          component: InputPage
        },
        {
          path: '/components/date-input',
          name: 'components-date-input',
          component: DateInputPage
        },
        {
          path: '/components/select',
          name: 'components-select',
          component: SelectPage
        },
        {
          path: '/components/switch',
          name: 'components-switch',
          component: SwitchPage
        },
        {
          path: '/components/empty',
          name: 'components-empty',
          component: EmptyPage
        },
        {
          path: '/components/popover',
          name: 'components-popover',
          component: PopoverPage
        },
        {
          path: '/components/rating-input',
          name: 'components-rating-input',
          component: RatingInputPage
        },
        {
          path: '/components/cascading-select',
          name: 'components-cascading-select',
          component: CascadingSelectPage
        },
        {
          path: '/components/table',
          name: 'components-table',
          component: TablePage
        },
        {
          path: '/components/list',
          name: 'components-list',
          component: ListPage
        },
        {
          path: '/components/pagination',
          name: 'components-pagination',
          component: PaginationPage
        },
        {
          path: '/components/facts',
          name: 'components-facts',
          component: FactsPage
        },
        {
          path: '/components/files',
          name: 'components-files',
          component: FilesPage
        },
        {
          path: '/components/radio',
          name: 'components-radio',
          component: RadioPage
        },
        {
          path: '/components/timeline',
          name: 'components-timeline',
          component: TimelinePage
        },
        {
          path: '/components/upload',
          name: 'components-upload',
          component: UploadPage
        },
        {
          path: '/components/divider',
          name: 'components-divider',
          component: DividerPage
        },
        {
          path: '/interactive/dialog',
          name: 'interactive-dialog',
          component: DialogPage
        },
        {
          path: '/interactive/toast',
          name: 'interactive-toast',
          component: ToastPage
        },
        {
          path: '/interactive/drawer',
          name: 'interactive-drawer',
          component: DrawerPage
        },
        {
          path: '/interactive/menu',
          name: 'interactive-menu',
          component: MenuPage
        },
        {
          path: '/tokens/font',
          name: 'tokens-toast',
          component: FontPage
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
          path: '/labs/component-list',
          name: 'component-list',
          component: ComponentListPage
        },
        {
          path: '/404',
          name: 'not-found',
          component: NotFoundPage
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
