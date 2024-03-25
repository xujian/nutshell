import { h, SetupContext } from 'vue'
import { Tabs as AntdvTabs, TabPane as AntdvTabPane } from 'ant-design-vue'
import { TabsItem, TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit, slots }: SetupContext) => {


  const defaultSlot = props.items?.map(item => h(AntdvTabPane, {
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
