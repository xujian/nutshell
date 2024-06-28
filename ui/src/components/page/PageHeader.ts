import { defineComponent, h, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useSafeArea } from '../../composables'

export const NsPageBottom = defineComponent({
  name: 'NsPageBottom',
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'page-bottom'
      ]
    }, slots)
  }
})

export type PageHeaderColorMode = 'light' | 'dark'

export const pageHeaderProps = {
  title: {
    type: String,
  },
  colorMode: {
    type: String as PropType<PageHeaderColorMode>,
  },
  /**
   * 底图
   */
  texture: {
    type: String,
  },
  /**
   * 简化版
   */
  minimal: {
    type: Boolean,
  },
  fill: {
    type: String,
  }
}

export type PageHeadermits = {
  close (): void
}

export const pageHeaderEmits: PageHeadermits = {
  close: () => {}
}

export type PageHeaderProps = MakePropsType<typeof pageHeaderProps, PageHeadermits>

export const NsPageHeader = defineComponent({
  name: 'NsPageHeader',
  props: pageHeaderProps,
  emits: pageHeaderEmits,
  setup (props, { slots, emit }) {

    const safeArea = useSafeArea()

    const cssVars = {
      '--top': `${safeArea.status}px`,
      '--height': `${safeArea.nav}px`,
      ...props.texture ? { '--texture': `url(${props.texture})` } : {},
      ...props.fill ? { '--fill': props.fill } : {},
    }

    const title = () => h('div', {
        class: ['title']
      }, [
        slots.title
          ? slots.title()
          : h('div', { class: 'title-heading'}, props.title),
        h('div', {
          class: 'back-button',
          onClick: () => {
            emit('close')
          }
        })
      ])

    const content = () => h('div', { class: ['content'] }, { default: slots.default })

    return () => h('div', {
      class: [
        'ns-page-header',
        `color-mode-${props.colorMode}`,
        ...props.minimal ? ['minimal'] : []
      ],
      style: cssVars,
    }, [
      title(),
      content(),
    ])
  }
})
