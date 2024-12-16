import { h, SetupContext } from 'vue'
import { TabsItem, TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit, slots }: Omit<SetupContext, 'expose'>) => {


  const defaultSlot = () => {
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

    return items?.map(item => h(NutTabPane, {
        class: ['tab-pane'],
        paneKey: item.value || item.label,
        title: item.label
      }, item.content)
    )
  }

  return h(NutTabs, {
    class: [
      `tabs-align-${props.align || 'start'}`,
      ...props.size ? [`size-${props.size}`] : [],
      ...props.variant ? [`variant-${props.variant}`] : [],
    ],
    swipeable: true,
    titleScroll: true,
    align: 'left',
    ellipsis: props.ellipsis === true
      ? true
      : false,
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
