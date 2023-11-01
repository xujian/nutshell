import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'
import { useModelValuePropsForInput } from '../../props'
import { useSlots } from 'vue'
import { EmitsToProps } from 'src/utils/private/helpers'

export type TabData = {
  label: string,
  value: string,
  slots: any
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
    type: String as PropType<TabsAlign>,
  },
  ...useModelValuePropsForInput(),
}

export interface TabsEmits extends ObjectEmitsOptions {
  change: (value: string) => void
}

const emits: TabsEmits = {
  change: (value: string) => {}
}

export interface TabsSlots extends SlotsType {
  default: never,
}

export type TabsProps = ExtractPublicPropTypes<typeof tabsProps> & EmitsToProps<TabsEmits>

/**
 * Tabs 组件 <ns-tabs>
 */
export const NsTabs = define({
  name: 'NsTabs',
  props: tabsProps,
  emits,
  setup (props, ctx) {

    // 从子组件读取 items 
    const getItems: () => TabData[] | undefined = () => {
      const { default: defaultSlot } = useSlots()
      if (!defaultSlot) return void 0
      const slots = defaultSlot()
      if (!slots.length) return void 0
      return slots.map(s => ({
        label: s.props?.tab,
        value: s.props?.key as string,
        slots: s.children
      }))
    }

    const items = getItems()

    return {
      props: {
        items
      }
    }
  }
})
// + import => ./index.ts, ../components.ts