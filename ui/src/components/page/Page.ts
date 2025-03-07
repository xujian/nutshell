import { reactive, InjectionKey, Reactive, inject, provide, computed, CSSProperties } from 'vue'
import { define, MakePropsType, StyleObject } from '../../utils'
import { useDesignProps } from '../../props'
import type { Color } from '../../composables'

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

/**
 * NsPageHeader 带有 curve 时, 需要让 NsPage 知道
 * 以便控制 NsPageContent 的样式
 * (曲线结构需要让 NsPageContent 实现)
 * (为什么不能 NsPageHeader 实现? 是因为 NsPageContent要遮住圆形结构)
 * 样式见 @Page.scss
 */
export type PageHeaderConfig = {
  curved?: boolean,
  fill?: Color,
}

export type PageConfig = {
  contentScrollable?: boolean,
  hasHeader?: boolean,
  hasFooter?: boolean,
  minimal?: boolean,
  header: PageHeaderConfig,
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
      header: {
        curved: false,
        fill: void 0,
      },
      back: () => emit('back')
    })

    provide(PageSymbol, pageConfig)

    const classes = computed<string[]>(() => {
      return [
      ...pageConfig.hasHeader ? ['has-header'] : [],
      ...pageConfig.contentScrollable ? ['content-scrollable'] : [],
      ...pageConfig.hasFooter ? ['has-footer'] : [],
      ...pageConfig.header?.curved ? ['header-curved'] : [],
      ...props.fit ? ['fit'] : []
    ]})

    const styles = computed<StyleObject>(() => {
      console.log('===Page styles', pageConfig.header?.fill)
      return {
        ...pageConfig.header?.fill
          ? { '--header-fill': pageConfig.header.fill }
          : {}
      }
    })
    // 分别为 desktop/小程序 渲染页面所需要的基本组件
    // 包含
    // 1. 页头 page-header
    // 2. 重要通知 notice
    // 3. 侧栏 drawer
    return {
      props: {
        classes,
        styles,
      }
    }
  }
})

export const usePage = () => {
  return inject(PageSymbol)!
}
