import { defineComponent, h, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useBus } from '../../composables'

export type PageContentColorMode = 'light' | 'dark'

export const pageContentProps = {
  /**
   * Page content 允许滚动
   */
  scrollable: {
    type: Boolean,
    default: false,
  },
  /**
   * 底部为 tabbar 让出的空间
   */
  bottom: {
    type: Number,
    default: 0
  }
}

export type PageContentmits = {
}

export const pageContentEmits: PageContentmits = {
}

export type PageContentProps = MakePropsType<typeof pageContentProps, PageContentmits>

export const NsPageContent = defineComponent({
  name: 'NsPageContent',
  props: pageContentProps,
  emits: pageContentEmits,
  setup (props, { slots, emit }) {

    const $bus = useBus()

    const cssVars = {
    }

    const onScroll = (e: any) => {
      $bus.emit('scroll', {
        x: e.detail.scrollLeft,
        y: e.detail.scrollTop
      })
    }

    const renderScrollview = (content: any) => h('scroll-view', {
        class: ['page-content-scroll-view'],
        style: cssVars,
        'scroll-y': true,
        onScroll,
      }, content)

    const content = () => h('div', {
        class: [
          'ns-page-content',
          'page-content',
          'grow',
          'column',
          'align-stretch'
        ],
        style: {
          paddingBottom: `${props.bottom}px`
        }
      }, slots)

    return () => props.scrollable
      ? renderScrollview(content())
      : content()
  }
})
