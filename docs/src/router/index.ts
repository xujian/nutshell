import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../layouts/MasterLayout.vue'

const HomePage = () => import('../pages/HomePage.vue')
const AboutPage = () => import('../pages/AboutPage.vue')
const PalettesPage = () => import('../pages/design/PalettesPage.vue')
const DesignPropsPage = () => import('../pages/design/DesignPropsPage.vue')
const GlassmorphismPage = () => import('../pages/design/GlassmorphismPage.vue')
const GradientsPage = () => import('../pages/design/GradientsPage.vue')
const PatternsPage = () => import('../pages/design/PatternsPage.vue')
const MotionsPage = () => import('../pages/design/MotionsPage.vue')
const StyleSystemPage = () => import('../pages/develop/StyleSystemPage.vue')
const ButtonPage = () => import('../pages/components/ButtonPage.vue')
const ButtonGroupPage = () => import('../pages/components/ButtonGroupPage.vue')
const ButtonGroupInputPage = () => import('../pages/components/ButtonGroupInputPage.vue')
const DropdownPage = () => import('../pages/components/DropdownPage.vue')
const ChipPage = () => import('../pages/components/ChipPage.vue')
const CardPage = () => import('../pages/components/CardPage.vue')
const InputPage = () => import('../pages/components/InputPage.vue')
const FormPage = () => import('../pages/components/FormPage.vue')
const CheckboxPage = () => import('../pages/components/CheckboxPage.vue')
const DateInputPage = () => import('../pages/components/DateInputPage.vue')
const RatingInputPage = () => import('../pages/components/RatingInputPage.vue')
const SwitchPage = () => import('../pages/components/SwitchPage.vue')
const ChipsInputPage = () => import('../pages/components/ChipsInputPage.vue')
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
const RepeatorPage = () => import('../pages/components/RepeatorPage.vue')
const MenuPage = () => import('../pages/components/MenuPage.vue')
const DividerPage = () => import('../pages/components/DividerPage.vue')
const LineChartPage = () => import('../pages/plot/LineChartPage.vue')
const BarChartPage = () => import('../pages/plot/BarChartPage.vue')
const PieChartPage = () => import('../pages/plot/PieChartPage.vue')
const DialogPage = () => import('../pages/interactive/DialogPage.vue')
const SheetPage = () => import('../pages/interactive/SheetPage.vue')
const ToastPage = () => import('../pages/interactive/ToastPage.vue')
const DrawerPage = () => import('../pages/interactive/DrawerPage.vue')
const FontPage = () => import('../pages/tokens/FontPage.vue')
const SizingPage = () => import('../pages/tokens/SizingPage.vue')
const SpacingPage = () => import('../pages/tokens/SpacingPage.vue')
const TablePerfPage = () => import('../pages/labs/TablePerfPage.vue')
const ComponentListPage = () => import('../pages/labs/ComponentList.vue')
const TooltipPage = () => import('../pages/directives/TooltipPage.vue')
const LoadingPage = () => import('../pages/directives/LoadingPage.vue')
const RowPage = () => import('../pages/components/RowPage.vue')
const ColumnPage = () => import('../pages/components/ColumnPage.vue')
const AvatarPage = () => import('../pages/components/AvatarPage.vue')
const NotFoundPage = () => import('../pages/NotFoundPage.vue')
const CustomerListPage = () => import('../pages/scenarios/data/customer-list.vue')
const ContractListPage = () => import('../pages/scenarios/data/contract-list.vue')
const FileListPage = () => import('../pages/scenarios/data/user-list.vue')
const ContractFormPage = () => import('../pages/scenarios/form/contract-form.vue')
const CustomerFormPage = () => import('../pages/scenarios/form/customer-form.vue')
const ImageFormPage = () => import('../pages/scenarios/form/image-form.vue')
const AccountInfoPage = () => import('../pages/scenarios/presentation/account-info.vue')
const BusinessInfoPage = () => import('../pages/scenarios/presentation/business-info.vue')
const FollowInfoPage = () => import('../pages/scenarios/presentation/follow-info.vue')
const OrderInfoPage = () => import('../pages/scenarios/presentation/order-info.vue')
const ScenariosTabsPage = () => import('../pages/scenarios/interactive/tabs.vue')
const ScenariosUploadPage = () => import('../pages/scenarios/interactive/upload.vue')

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
          path: 'design',
          name: 'design',
          component: DesignPropsPage
        },
        {
          path: '/design/palettes',
          name: 'palettes',
          component: PalettesPage
        },
        {
          path: 'design/glassmorphism',
          name: 'design-glassmorphism',
          component: GlassmorphismPage
        },
        {
          path: 'design/gradients',
          name: 'design-gradients',
          component: GradientsPage
        },
        {
          path: 'design/motions',
          name: 'design-motions',
          component: MotionsPage
        },
        {
          path: 'design/patterns',
          name: 'design-patterns',
          component: PatternsPage
        },
        {
          path: 'develop/style',
          name: 'develop-style',
          component: StyleSystemPage
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
          path: '/components/chips-input',
          name: 'components-chips-input',
          component: ChipsInputPage
        },
        {
          path: '/components/button-group',
          name: 'components-button-group',
          component: ButtonGroupPage
        },
        {
          path: '/components/button-group-input',
          name: 'components-button-group-input',
          component: ButtonGroupInputPage
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
          path: '/components/repeator',
          name: 'components-repeator',
          component: RepeatorPage
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
          path: '/components/avatar',
          name: 'components-avatar',
          component: AvatarPage
        },
        {
          path: '/plot/line',
          name: 'plot-line',
          component: LineChartPage,
        },
        {
          path: '/plot/bar',
          name: 'plot-bar',
          component: BarChartPage,
        },
        {
          path: '/plot/pie',
          name: 'plot-pie',
          component: PieChartPage,
        },
        {
          path: '/interactive/dialog',
          name: 'interactive-dialog',
          component: DialogPage
        },
        {
          path: '/interactive/sheet',
          name: 'interactive-sheet',
          component: SheetPage
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
          path: '/layout/row',
          name: 'layout-row',
          component: RowPage
        },
        {
          path: '/layout/column',
          name: 'layout-column',
          component: ColumnPage
        },
        {
          path: '/interactive/menu',
          name: 'interactive-menu',
          component: MenuPage
        },
        {
          path: '/tokens/font',
          name: 'tokens-font',
          component: FontPage
        },
        {
          path: '/tokens/sizing',
          name: 'tokens-sizing',
          component: SizingPage
        },
        {
            path: '/tokens/spacing',
            name: 'tokens-spacing',
            component: SpacingPage
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
          path: '/directives/tooltip',
          name: 'directives-tooltip',
          component: TooltipPage
        },
        {
          path: '/directives/loading',
          name: 'directives-loading',
          component: LoadingPage
        },
        {
          path: '/scenarios/customer-list',
          name: 'scenarios-customer-list',
          component: CustomerListPage
        },
        {
          path: '/scenarios/contract-list',
          name: 'scenarios-contract-list',
          component: ContractListPage
        },
        {
          path: '/scenarios/user-list',
          name: 'scenarios-user-list',
          component: FileListPage
        },
        {
          path: '/scenarios/contract-form',
          name: 'scenarios-contract-form',
          component: ContractFormPage
        },
        {
          path: '/scenarios/customer-form',
          name: 'scenarios-customer-form',
          component: CustomerFormPage
        },
        {
          path: '/scenarios/image-form',
          name: 'scenarios-image-form',
          component: ImageFormPage
        },
        {
          path: '/scenarios/account-info',
          name: 'scenarios-account-info',
          component: AccountInfoPage
        },
        {
          path: '/scenarios/business-info',
          name: 'scenarios-business-info',
          component: BusinessInfoPage
        },
        {
          path: '/scenarios/follow-info',
          name: 'scenarios-follow-info',
          component: FollowInfoPage
        },
        {
          path: '/scenarios/order-info',
          name: 'scenarios-order-info',
          component: OrderInfoPage
        },
        {
          path: '/scenarios/tabs',
          name: 'scenarios-tabs',
          component: ScenariosTabsPage
        },
        {
          path: '/scenarios/upload',
          name: 'scenarios-upload',
          component: ScenariosUploadPage
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
