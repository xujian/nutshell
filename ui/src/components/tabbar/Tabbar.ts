import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { define, MakePropsType } from '../../utils'
import { NsIcon } from '../icon'

export type TabbarItem = {
  label: string,
  icon: string,
}

export const tabbarProps = {
  items: {
    type: Array as PropType<TabbarItem[]>
  }
}

export type TabbarEmits = {
}

const tabbarEmits: TabbarEmits = {
}

export type TabbarSlots = {
  default: never,
}

export type TabbarProps = MakePropsType<typeof tabbarProps, TabbarEmits>

/**
 * Tabbar 组件 <ns-tabbar>
 */
export const NsTabbar = defineComponent({
  name: 'NsTabbar',
  props: tabbarProps,
  emits: tabbarEmits,
  setup (props, ctx) {
    const icon = (name: string) => h(NsIcon, {
        name,
        size: 'sm'
      }),
      label = (text: string) => h('label', {
        class: [
          'tabbar-item-label'
        ]
      }, text)
    const items = h('ul', {
      class: [
        'tabbar-list',
        'flex',
        'row',
        'justify-around',
      ]},
      props.items?.map(item => {
        return h('li', {
          class: [
            'tabbar-item',
          ]
        }, [
          icon(item.icon),
          label(item.label)
        ])
      })
    )
    return () => h('nav', {
      class: [
        'ns-tabbar',
      ]
    }, items)
  }
})
