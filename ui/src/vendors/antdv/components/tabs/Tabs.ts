import { h, SetupContext } from 'vue'
import { Tabs as AntdvTabs, TabPane as AntdvTabPane } from 'ant-design-vue'
import { TabData, TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit, slots }: SetupContext) => {
  // 从子组件读取 items
  const getItems: () => TabData[] | undefined = () => {
    if (!slots.default) return void 0
    if (!slots.default().length) return void 0
    return slots.default().map((s) => ({
      label: s.props?.tab,
      value: s.props?.key as string,
      slots: s.children
    }))
  }

  const items = getItems() || props.items

  return h(
    AntdvTabs,
    {
      class: [
        'ns-tabs',
        ...(props.variant ? [`variant-${props.variant}`] : []),
        `tabs-align-${props.align || 'start'}`
      ],
      type: props.variant === 'card' ? 'card' : 'line',
      activeKey: props.modelValue,
      'onUpdate:activeKey': (value) => {
        emit('update:modelValue', value as string)
      }
      // onChange: (value) => {
      //   props.onChange?.(value)
      // }
    },
    {
      default: () =>
        items?.map((item) =>
          h(
            AntdvTabPane,
            {
              class: 'na-tabs-pane',
              tab: item.label,
              key: item.value
            },
            item.slots
          )
        ),
      rightExtra: slots.after,
      leftExtra: slots.before
    }
  )
}
