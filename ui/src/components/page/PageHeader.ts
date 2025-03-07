import { defineComponent, getCurrentInstance, h, PropType, SlotsType, VNode } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, type TextAlign, useDesignProps, useTitle, useTitleProps } from '../../props'
import { usePage } from './Page'

export const pageHeaderProps = {
  ...useTitleProps(),
  titleAlign: {
    type: String as PropType<TextAlign>,
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
  /**
   * 曲线结构
   */
  curved: {
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
      $props = getCurrentInstance()?.vnode.props,
      title = useTitle(props)

    if (page && props.curved) {
      page.hasHeader = true
      page.header.curved = !!props.curved
      page.header.fill = props.fill
    }

    const cssVars = {
      ...props.titleAlign ? { '--titleAlign': props.titleAlign } : {},
    }

    const heading = () => slots.title
      ? h('div', { class: 'title-content'}, slots.title())
      : title()

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

    // 标题条部分
    const bar = () => h('div', {
        class: ['bar']
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
      bar(),
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
