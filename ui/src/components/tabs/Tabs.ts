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
    type: Array as PropType<TabData[]>
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
 * Tabs 组件 <ns-tabs>
 */
export const NsTabs = define({
  name: 'NsTabs',
  props: tabsProps,
  emits,
  setup (props, { slots }) {

    // 确定 children
    // slots 优先级高于 items
    // 如果定义了 slots, items 失效
    const items: TabsItem[] = slots.default?.().map((s, index) => {
      // @ts-ignore
      const tabSlot = s.children?.tab?.()
      return {
        key: s.props?.key as string,
        tab: tabSlot || s.props?.tab || `Tab-${index}` as string,
        content: s.children
      }
    }) || props.items || []

    return {
      props: {
        items
      }
    }
  }
})
// + import => ./index.ts, ../components.ts
