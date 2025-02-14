import { defineComponent, getCurrentInstance, h, PropType, SlotsType, VNode } from 'vue'
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
  backUrl: {
    type: String,
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

export interface PageHeaderSlots extends SlotsType {
  prepend: () => VNode,
}

const pageHeaderSlots: SlotsType<PageHeaderSlots> = {}

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
      : h('div', { class: ['title-heading', 'column', 'align-center', 'justify-center']}, [
          h('h5', { class: ['h5'] }, props.title),
          ...props.caption ? [h('p', { class: 'caption' }, props.caption)] : []
      ])

    const onBackButtonClick = () => {
      // 如果用户使用了 @back/onBack, 则执行
      if ($props?.onBack) {
        $props?.onBack()
      } else {
        if (page.minimal) {
          page.back?.()
        } else {
          Taro.navigateBack()
        }
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
          : null,
        slots.prepend
          ? h('div', {
              class: ['prepend', 'row', 'align-center', 'justify-center'],
            }, [
              slots.prepend?.()
            ])
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
    slots: pageHeaderSlots,
  })
