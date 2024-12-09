import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useFlexProps } from '../../props'

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

export const repeatorEmits: RepeatorEmits = {
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
export const NsRepeator = define({
  name: 'NsRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots }) {
    return {}
  }
})
