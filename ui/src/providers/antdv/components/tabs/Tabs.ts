import { h, SetupContext } from 'vue'
import { Tabs as AntdvTabs, TabPane as AntdvTabPane } from 'ant-design-vue'
import { TabsProps } from '../../../../components'

export const Tabs = (props: TabsProps, { emit }: SetupContext) => {

  return h(AntdvTabs, {
    class: 'ns-tabs',
    type: props.variant === 'card' ? 'card' : 'line',
    activeKey: props.modelValue,
    'onUpdate:activeKey': (value) => emit('update:modelValue', value)
  }, () => props.items.map(
      item => h(AntdvTabPane, {
        class: 'na-tabs-pane',
        tab: item.label,
        key: item.value
      }, () => item.label)
    )
  )
}
