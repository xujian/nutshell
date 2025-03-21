import { defineComponent, h, onMounted, watch } from 'vue'
import { MakePropsType } from '../../utils'
import { useBus } from '../../composables'
import { usePage } from './Page'
import { buildDesignClasses, buildDesignStyles, useDesignProps } from '../../props'
import { ScrollView } from '@tarojs/components'

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
  },
  ...useDesignProps(),
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

    const onScroll = (e: any) => {
      $bus.emit('scroll', {
        x: e.detail.scrollLeft,
        y: e.detail.scrollTop
      })
    }

    const renderScrollview = (content: any) => h(ScrollView, {
        class: ['page-content-scroll-view', 'scroll'],
        'scroll-y': true,
        onScroll,
        lowerThreshold: 50,
        onScrolltoupper () {
          // console.log('===onScrollToUpper===')
        },
        onScrolltolower () {
          // console.log('===bindscrolltolower===')
          // console.log('===onScrolltolower===', props)
          emit('bottomReached')
        }
      },
      h('div', {
        class: 'page-content-scroll-content'
      }, content)
    )

    watch(() => props.scrollable, () => {
      page.contentScrollable = props.scrollable
    })

    onMounted(() => {
      page.contentScrollable = props.scrollable
    })

    return () => h('div', {
        class: [
          'ns-page-content',
          'page-content',
          'grow',
          'align-start',
          ...props.scrollable ? ['scrollable'] : [],
          ...buildDesignClasses(props),
        ],
        style: {
          ...props.bottom ? { '--bottom': `${props.bottom}px` } : {},
          ...buildDesignStyles(props),
        }
      },
      props.scrollable
        ? renderScrollview(slots)
        : slots
    )
  }
})
