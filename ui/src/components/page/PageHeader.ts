import { defineComponent, h, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useSafeArea } from '../../composables'
import { buildDesignClasses, buildDesignStyles, buildDesignVariables, type TextAlign, useDesignProps } from '../../props'

export const pageBottomProps = {
  ...useDesignProps()
}

export type PageBottomProps = MakePropsType<typeof pageBottomProps>

export const NsPageBottom = defineComponent({
  name: 'NsPageBottom',
  props: pageBottomProps,
  setup (props, { slots }) {

    const style = {
      ...buildDesignVariables(props),
      ...buildDesignStyles(props),
    }

    return () => h('div', {
      class: [
        'page-bottom',
        ...buildDesignClasses(props),
      ],
      style,
    }, slots)
  }
})

export type PageHeaderColorMode = 'light' | 'dark'

export const pageHeaderProps = {
  title: {
    type: String,
  },
  titleAlign: {
    type: String as PropType<TextAlign>,
  },
  sticky: {
    type: Boolean,
    default: true,
  },
  colorMode: {
    type: String as PropType<PageHeaderColorMode>,
    default: 'light'
  },
  hasBackButton: {
    type: Boolean,
    default: false,
  },
  /**
   * 简化版
   */
  minimal: {
    type: Boolean,
  },
  reveal: {
    type: Boolean,
  },
  ...useDesignProps(),
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
      ...props.titleAlign ? { '--titleAlign': props.titleAlign } : {},
    }

    const heading = () => slots.title
      ? h('div', { class: 'title-content'}, slots.title())
      : h('div', { class: 'title-heading'}, props.title)

    const title = () => h('div', {
        class: ['title']
      }, [
        heading(),
        props.hasBackButton
          ? h('div', {
              class: 'back-button',
              onClick: () => {
                wx.navigateBack()
                emit('close')
              }
            })
          : null
      ])

    const content = () => h('div', { class: ['content'] }, { default: slots.default })

    return () => h('div', {
      class: [
        'ns-page-header',
        'page-header',
        `color-mode-${props.colorMode}`,
        // 默认不用圆角
        ...props.round ? ['round'] : ['square'],
        ...props.minimal ? ['minimal'] : [],
        ...props.hasBackButton ? ['has-back-button'] : [],
        ...props.reveal ? ['reveal'] : [],
        ...props.sticky ? ['sticky'] : [],
        ...buildDesignClasses(props),
      ],
      style: {
        ...cssVars,
        ...buildDesignStyles(props),
      }
    }, [
      title(),
      content(),
    ])
  }
})
