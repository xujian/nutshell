import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { define, MakePropsType } from '../../utils'
import { NsIcon } from '../icon'
import { useModelValuePropsForString } from '../../props/model'
import { UniDataItem } from '../../shared'

export const tabbarProps = {
  ...useModelValuePropsForString(),
  items: {
    type: Array as PropType<UniDataItem[]>
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
 * 标签栏组件 <ns-tabbar>
 */
export const NsTabbar = defineComponent({
  name: 'NsTabbar',
  props: tabbarProps,
  emits: tabbarEmits,
  setup (props, ctx) {
    const icon = (name: string) => h(NsIcon, {
        name,
        format: 'svg',
        size: 'sm'
      }),
      label = (text: string) => h('label', {
        class: [
          'tabbar-item-label'
        ]
      }, text)
    const items = () => h('ul', {
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
            props.modelValue == item.label ||
              props.modelValue == item.value && 'selected'
          ],
          onClick () {
            const value = item.value || item.label || ''
            if (value == props.modelValue) {
              return
            }
            props['onUpdate:modelValue']?.(`${value}`)
          }
        }, [
          icon(item.icon),
          label(item.label || '')
        ])
      })
    )
    return () => h('nav', {
      class: [
        'ns-tabbar'
      ]
    }, items())
  }
})
