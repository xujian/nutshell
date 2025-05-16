import { PropType, SlotsType, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps } from '../../props'

export const scrollableProps = {
  /**
   * 可纵向滚动
   */
  enabledY: {
    type: Boolean,
    default: true,
  },
  /**
   * 可横向滚动
   */
  enabledX: {
    type: Boolean,
    default: false,
  },
  /**
   * 可下拉刷新
   */
  refreshable: {
    type: Boolean,
  },
  ...useDimensionProps(),
}

export type ScrollableEmits = {
  /**
   * 下拉刷新时
   */
  refresh: (callback: () => void) => void,
  /**
   * 上拉加载
   */
  bottomReached: () => void,
}

export const scrollableEmits: ScrollableEmits = {
  refresh: (callback: () => void) => true,
  bottomReached: () => true,
}

export type ScrollableSlots = {
  default?: () => VNode[],
  refreshIndicator?: () => VNode[],
}

export const scrollableSlots: SlotsType<ScrollableSlots> = {
}

export type ScrollableProps = MakePropsType<typeof scrollableProps, ScrollableEmits>

/**
 * 可滚动区域 组件 <ns-scrollable>
 */
export const NsScrollable = define({
  name: 'NsScrollable',
  props: scrollableProps,
  emits: scrollableEmits,
  slots: scrollableSlots,
  setup (props, ctx) {
    return {
    }
  }
})
