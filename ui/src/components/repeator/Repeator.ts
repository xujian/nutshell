import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useFlexProps, useGroupingProps } from '../../props'
import { useSelectable, useSelectableProps, selectableEmits, SelectableEmits } from '../../props/selectable'

export type Swipable = {
    label: string,
    click (item: any): void
  }

export const repeatorProps = {
  /**
   * 平铺数据
   */
  data: {
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
  /**
   * 显示分隔线
   * @values true, false, @Color
   */
  seperator: {
    type: [Boolean, String] as PropType<boolean | Color>,
    default: false
  },
  ...useGroupingProps(),
  ...useDesignProps(),
  ...useFlexProps(),
  ...useSelectableProps(),
}

export type RepeatorEmits = {
  
} & SelectableEmits

export const repeatorEmits: RepeatorEmits = {
  ...selectableEmits,
}

export type RepeatorSlots = {
  default: never,
  swipe: never,
}

export type RepeatorProps = MakePropsType<typeof repeatorProps, RepeatorEmits>

/**
 * 连续平铺组件 <ns-repeator>
 */
export const NsRepeator = define({
  name: 'NsRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots, emit }) {

    return {}
  }
})
