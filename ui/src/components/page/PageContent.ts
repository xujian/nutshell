import { defineComponent, h, inject, PropType, watch } from 'vue'
import { MakePropsType } from '../../utils'
import { useBus } from '../../composables'
import { PageSymbol, usePage } from './Page'

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

    const page = usePage()

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

    watch(() => props.scrollable, () => {
      page.contentScrollable = props.scrollable
    })

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
          ...props.bottom ? { '--bottom': `${props.bottom}px` } : {}
        }
      },
      props.scrollable
        ? renderScrollview(slots)
        : slots
    )
  }
})
