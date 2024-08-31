import { defineComponent, h, inject, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useBus } from '../../composables'
import { PageSymbol } from './Page'

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

export type PageContentEmits = {
  /**
   * 可滚动部件达到底部
   */
  bottomReached: () => void
}

export const pageContentEmits: PageContentEmits = {
  bottomReached: () => true
}

export type PageContentProps = MakePropsType<typeof pageContentProps, PageContentEmits>

export const NsPageContent = defineComponent({
  name: 'NsPageContent',
  props: pageContentProps,
  emits: pageContentEmits,
  setup (props, { slots, emit }) {

    const page = inject(PageSymbol)

    if (props.scrollable) {
      page && (page.contentScrollable = true)
    }

    const $bus = useBus()

    const cssVars = {
    }

    const onScroll = (e: any) => {
      $bus.emit('scroll', {
        x: e.detail.scrollLeft,
        y: e.detail.scrollTop
      })
    }

    const renderScrollview = (content: any) => h(ScrollView, {
        class: ['page-content-scroll-view', 'scroll'],
        style: cssVars,
        'scroll-y': true,
        onScroll,
        lowerThreshold: 50,
        onScrolltoupper () {
          console.log('===onScrollToUpper===')
        },
        onScrolltolower () {
          console.log('===bindscrolltolower===')
          console.log('===onScrolltolower===', props)
          emit('bottomReached')
        }
      }, h('div', {
        class: 'page-content-scroll-content'
      }, content)
    )

    return () => h('div', {
        class: [
          'ns-page-content',
          'page-content',
          'grow',
          'column',
          'align-stretch',
          ...props.scrollable ? ['scrollable'] : [],
        ],
        style: {
          paddingBottom: `${props.bottom}px`
        }
      },
      props.scrollable
        ? renderScrollview(slots)
        : slots
    )
  }
})
