import { defineComponent, h, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useBus, useSafeArea } from '../../composables'
import { buildDesignClasses, buildDesignStyles, buildDesignVariables, type TextAlign, useDesignProps } from '../../props'

export type PageContentColorMode = 'light' | 'dark'

export const pageContentProps = {
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

    return () => h('scroll-view', {
        class: ['page-content-scroll-view'],
        style: cssVars,
        'scroll-y': true,
        onScroll,
      }, h('div', {
          class: [
            'ns-page-content',
            'page-content',
          ]
        }, slots)
      )
    }
})
