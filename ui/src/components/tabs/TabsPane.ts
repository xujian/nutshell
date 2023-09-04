import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'

export const tabsPaneProps = {
  label: {
    type: String
  }
}

export type TabsPaneProps = ExtractPublicPropTypes<typeof tabsPaneProps>

export interface TabsPaneEmits extends ObjectEmitsOptions {
}

const emits: TabsPaneEmits = {
}

export interface TabsPaneSlots extends SlotsType {
  default: never,
}


/**
 * TabsPane 组件 <ns-tabs-pane>,
 * <ns-tabs> 的子组件
 */
export const NsTabsPane = define({
  name: 'NsTabsPane',
  props: tabsPaneProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts