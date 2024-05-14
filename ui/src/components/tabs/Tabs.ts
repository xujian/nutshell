import { PropType, ObjectEmitsOptions, SlotsType, useSlots, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForInput } from '../../props'

export type TabsItem = {
  tab: string,
  key?: string,
  content?: string | VNode,
}

export type TabsVariant = 'line' | 'card' | 'plain'
export type TabsAlign = 'start' | 'center' | 'end'

export const tabsProps = {
  items: {
    type: Array as PropType<TabsItem[]>
  },
  /** 样式 */
  variant: {
    type: String as PropType<TabsVariant>,
    default: 'line'
  },
  /** 页签对齐方向 */
  align: {
    type: String as PropType<TabsAlign>
  },
  ...useModelValuePropsForInput()
}

export type TabsEmits = {
  change: (value: string) => void
}

const emits: TabsEmits = {
  change: (value: string) => {}
}

export type TabsSlots = {
  default: () => VNode,
  before: () => VNode,
  after: () => VNode,
}

export type TabsProps = MakePropsType<typeof tabsProps, TabsEmits>
/**
 * 标签页组件 <ns-tabs>
 */
export const NsTabs = define({
  name: 'NsTabs',
  props: tabsProps,
  emits,
  setup (props, { slots }) {

    return {}
  }
})
// + import => ./index.ts, ../components.ts
