import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'
import { useModelValuePropsForInput } from '../../props'

export type TabData = {
  label: string,
  value: string,
}

export type TabsVariant = 'line' | 'card'

export const tabsProps = {
  items: {
    type: Array as PropType<Tab[]>
  },
  variant: {
    type: String as PropType<TabsVariant>,
    default: 'line'
  },
  ...useModelValuePropsForInput(),
}

export type TabsProps = ExtractPublicPropTypes<typeof tabsProps>

export interface TabsEmits extends ObjectEmitsOptions {
}

const emits: TabsEmits = {
}

export interface TabsSlots extends SlotsType {
  default: never,
}


/**
 * Tabs 组件 <ns-tabs>
 */
export const NsTabs = define({
  name: 'NsTabs',
  props: tabsProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// + import => ./index.ts, ../components.ts