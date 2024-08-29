import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { define, MakePropsType } from '../../utils'

// page scroll
// 滚动有三
// 1. <page> 负责滚动, <ns-page> 高度自由
// 2. <ns-page> 负责滚动
// 3. <na-page-content> 负责滚动


export const pageProps = {
  title: {
    type: String
  },
  /**
   * 某些场景下可禁止<ns-page>滚动 (<na-page-content>负责滚动)
   */
  scrollable: {
    type: Boolean,
    default: false,
  }
}

export type PageEmits = {
}

export const pageEmits: PageEmits = {
}

export type PageSlots = {
  default: never,
}

export type PageProps = MakePropsType<typeof pageProps, PageEmits>

/**
 *  组件 <ns-page>
 */
export const NsPage = define({
  name: 'NsPage',
  props: pageProps,
  emits: pageEmits,
  setup (props, ctx) {

    // 分别为 desktop/小程序 渲染页面所需要的基本组件
    // 包含
    // 1. 页头 page-header
    // 2. 重要通知 notice
    // 3. 侧栏 drawer
    return {
    }
  }
})
