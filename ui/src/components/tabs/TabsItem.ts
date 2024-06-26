import { ObjectEmitsOptions, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { TabsItem } from './Tabs'

/*
 * <ns-tabs-item>
 * 用来定义 tabs 内容
 *
 * 属性冲突
 * 当 <ns-tabs> 内使用 <ns-tabs-item> 定义内容时,
 * 若 <ns-tabs-item> 提供了 tab 属性或者 tab slot
 * <ns-tabs> 的 items 自动失效
 */

export const tabsItemProps = {
  /** 指定 tab 文本 */
  tab: {
    type: String
  },
  /** 指定 tab 文本 */
  key: {
    type: String,
  }
}

export type TabsItemEmits = {
  click: (item: TabsItem) => void
}

const emits: TabsItemEmits = {
  click: (item: TabsItem) => void 0
}

export type TabsItemSlots = {
  default: never,
  tab: never
}

export type TabsItemProps = MakePropsType<typeof tabsItemProps, TabsItemEmits>

/**
 * TabsItem 组件 <ns-tabs-item>,
 * <ns-tabs> 的子组件
 */
export const NsTabsItem = define({
  name: 'NsTabsItem',
  props: tabsItemProps,
  emits,
  setup (props, ctx) {

    return {
    }
  }
})

