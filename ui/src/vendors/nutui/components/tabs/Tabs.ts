import { defineComponent, h, SetupContext } from 'vue'
import { TabsItem, tabsProps, TabsProps } from '../../../../components/tabs'

export const Tabs = defineComponent({
  name: 'NutuiTabs',
  props: tabsProps,
  setup(props, { emit, slots }) {

    return () => h(NutTabs, {
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
        onChange: (item: any) => {
          emit('update:modelValue', item.paneKey)
        }
      }, {
        default: () => {
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
        },
        rightExtra: slots.after,
        leftExtra: slots.before
      })
  }
})
