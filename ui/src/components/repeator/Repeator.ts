import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useDesignProps, useFlexProps } from '../../props'
import { NsEmpty } from '../empty'

export type Swipable = {
    label: string,
    click (item: any): void
  }

export const repeatorProps = {
  /**
   * 平铺数据
   */
  items: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  /**
   * 主轴排列数
   */
  divides: {
    type: Number,
  },
  /**
   * 支持滑动手势
   */
  swipable: {
    type: [Boolean, Array] as PropType<boolean | Swipable[]>
  },
  ...useDesignProps(),
  ...useFlexProps()
}

export type RepeatorEmits = {
}

const repeatorEmits: RepeatorEmits = {
}

export type RepeatorSlots = {
  default: never,
  swipe: never,
}

export type RepeatorProps = MakePropsType<typeof repeatorProps, RepeatorEmits>


// 直接渲染组件
// 不使用 vendor

/**
 * 连续平铺组件 <ns-repeator>
 */
export const NsRepeator = defineComponent({
  name: 'NsRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots }) {

    const classes = [
      'ns-repeator-item',
      'flex-item',
      ...buildDesignClasses(props),
    ]

    const item = () => props.items.map(
      item => h('div', {
            class: classes,
            style: buildDesignStyles(props),
          }, [
            props.swipable
              ? h(NutSwipe, {
                  class: ['swipe'],
                }, {
                  default: () => slots.default?.(item),
                  right: () => slots.swipe?.(item)
                })
              : slots.default?.(item),
          ])
      )

    const style = {
      ...buildFlexStyles(props),
      ...props.divides && {
        '--divides': props.divides,
      },
    }

    return () => h('div', {
      class: [
        'ns-repeator',
        ...props.divides ? ['has-divides'] : [],
        ...buildFlexClasses(props),
        ...props.swipable ? ['swipable'] : []
      ],
      style
    }, props?.items?.length ? item() : h(NsEmpty))
  }
})
