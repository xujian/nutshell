import { reactive, InjectionKey, Reactive, inject, provide, computed } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps } from '../../props'

/**
 * page scroll
 * 滚动有三
 * 1. <page> 负责滚动, <ns-page> 高度是内容高度
 * 2. <ns-page> 负责滚动 高度 100vh
 * 3. <na-page-content> 负责滚动
 * <ns-page> 高度
 **/



/**
 *
 */
export const pageProps = {
  title: {
    type: String
  },
  /**
   * 某些场景下可禁止<ns-page>滚动 (<na-page-content>负责滚动)
   */
  scrollable: {
    type: Boolean,
    default: void 0,
  },
  fit: {
    type: Boolean
  },
  /**
   * 没有 dialog/sheet/drawer
   */
  minimal: {
    type: Boolean,
  },
  ...useDesignProps(),
}

export type PageEmits = {
  back: () => void
}

export const pageEmits: PageEmits = {
  back: () => true
}

export type PageSlots = {
  default: never,
}

export type PageProps = MakePropsType<typeof pageProps, PageEmits>

export type PageConfig = {
  contentScrollable?: boolean,
  hasHeader?: boolean,
  hasFooter?: boolean,
  minimal?: boolean,
  back?: () => void
}

export const PageSymbol: InjectionKey<Reactive<PageConfig>> = Symbol('ns-page')

/**
 *  组件 <ns-page>
 */
export const NsPage = define({
  name: 'NsPage',
  props: pageProps,
  emits: pageEmits,
  setup (props, { emit }) {

    const pageConfig = reactive<PageConfig>({
      contentScrollable: false,
      hasHeader: false,
      hasFooter: false,
      minimal: props.minimal,
      back: () => emit('back')
    })

    provide(PageSymbol, pageConfig)

    const classes = computed<string[]>(() => {
      return [
      ...pageConfig.hasHeader ? ['has-header'] : [],
      ...pageConfig.contentScrollable ? ['content-scrollable'] : [],
      ...pageConfig.hasFooter ? ['has-footer'] : [],
      ...props.fit ? ['fit'] : []
    ]})
    // 分别为 desktop/小程序 渲染页面所需要的基本组件
    // 包含
    // 1. 页头 page-header
    // 2. 重要通知 notice
    // 3. 侧栏 drawer
    return {
      props: {
        classes
      }
    }
  }
})

export const usePage = () => {
  return inject(PageSymbol)!
}
