import { h, SetupContext } from 'vue'
import { TabsItem, TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit, slots }: Omit<SetupContext, 'expose'>) => {
  // 确定 children
  // slots 优先级高于 items
  // 如果定义了 slots, items 失效
  // @ts-ignore
  const items: TabsItem[] = slots.default?.().map((s, index) => {
    // @ts-ignore
    const tabSlot = s.children?.tab?.()
    return {
      value: s.props?.key as string,
      label: tabSlot || s.props?.tab || `Tab-${index}` as string,
      content: s.children
    }
  }) || props.items || []

  const defaultSlot = () => items?.map(item => h(NutTabPane, {
        class: ['tab-pane'],
        paneKey: item.value || item.label,
        title: item.label
      }, item.content)
    )

  return h(NutTabs, {
    class: [
      `tabs-align-${props.align || 'start'}`,
    ],
    swipeable: true,
    align: 'left',
    modelValue: props.modelValue,
    tabChange: (item: any) => {
      emit('update:modalValue', item.paneKey)
    }
  }, {
    default: defaultSlot,
    rightExtra: slots.after,
    leftExtra: slots.before
  })
}
