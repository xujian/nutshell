import { h, SetupContext } from 'vue'
import { Tabs as AntdvTabs, TabPane as AntdvTabPane } from 'ant-design-vue'
import { TabsItem, TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit, slots }: SetupContext) => {
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

  const defaultSlot = items?.map(item => h(AntdvTabPane, {
    key: item.key || item.tab,
    tab: item.tab
  }, item.content))

  return h(AntdvTabs, {
    class: [
      'ns-tabs',
      ...props.variant ? [`variant-${props.variant}`] : [],
      `tabs-align-${props.align || 'start'}`
    ],
    type: props.variant === 'card' ? 'card' : 'line',
    activeKey: props.modelValue,
    'onUpdate:activeKey': (value) => {
      emit('update:modelValue', value as string)
    },
    // onChange: (value) => {
    //   props.onChange?.(value)
    // }
  }, {
    default: () => defaultSlot,
    rightExtra: slots.after,
    leftExtra: slots.before
  }
  )
}
