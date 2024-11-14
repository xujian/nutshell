import { defineComponent, getCurrentInstance, h, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, type TextAlign, useDesignProps } from '../../props'
import { usePage } from './Page'

export const pageHeaderProps = {
  title: {
    type: String,
  },
  titleAlign: {
    type: String as PropType<TextAlign>,
  },
  caption: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: true,
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

export type PageHeaderEmits = {
  /**
   * 返回按钮
   */
  back: () => void
}

export const pageHeaderEmits: PageHeaderEmits = {
  /**
   * 返回按钮
   */
  back: () => true
}

export type PageHeaderProps = MakePropsType<typeof pageHeaderProps, PageHeaderEmits>

export const NsPageHeader = defineComponent<PageHeaderProps, PageHeaderEmits>(
  (props, { slots, emit }) => {

    const page = usePage(),
      $props = getCurrentInstance()?.vnode.props

    page && (page.hasHeader = true)

    const cssVars = {
      ...props.titleAlign ? { '--titleAlign': props.titleAlign } : {},
    }

    const heading = () => slots.title
      ? h('div', { class: 'title-content'}, slots.title())
      : h('div', { class: 'title-heading'}, props.title)

    const onBackButtonClick = () => {
      // 如果用户使用了 @back/onBack, 则执行
      if ($props?.onBack) {
        $props?.onBack()
      } else {
        Taro.navigateBack()
      }
    }

    const title = () => h('div', {
        class: ['title']
      }, [
        heading(),
        props.hasBackButton
          ? h('div', {
              class: 'back-button',
              onClick: onBackButtonClick
            })
          : null
      ])

    const content = () => h('div', {
        class: ['content']
      }, {
        default: slots.default
      }
    )

    return () => h('div', {
      class: [
        'ns-page-header',
        'page-header',
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
        ...buildDesignStyles  (props),
      }
    }, [
      title(),
      content(),
    ])
  },
  {
    name: 'NsPageHeader',
    inheritAttrs: true,
    props: pageHeaderProps,
    emits: pageHeaderEmits,
  })
