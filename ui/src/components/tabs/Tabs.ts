import { PropType, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useModelValuePropsForInput, useSizeProps } from '../../props'
import { UniDataItem } from '../../shared'

export type TabsItem = {
  content?: string | VNode,
} & UniDataItem

export type TabsVariant = 'line' | 'card' | 'button' | 'plain'
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
  ...useModelValuePropsForInput(),
  ...useSizeProps(),
  ...useDesignProps(),
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

    return {
    }
  }
})
// + import => ./index.ts, ../components.ts
