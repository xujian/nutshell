import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { useDesignProps, useVariantProps } from '../../props'

export const searchProps = {
  label: {
    type: String
  },
  placeholder: {
    type: String,
  },
  ...useDesignProps(),
  ...useVariantProps(),
}

export type SearchEmits = {
}

const searchEmits: SearchEmits = {
}

export type SearchSlots = {
  default: never,
}

export type SearchProps = MakePropsType<typeof searchProps, SearchEmits>

/**
 * 搜索框 组件 <ns-search>
 */
export const NsSearch = defineComponent({
  name: 'NsSearch',
  props: searchProps,
  emits: searchEmits,
  setup (props, ctx) {

    const icon = () => h('i', {
      class: ['icon']
    })

    const input = () => h('input', {
      class: [
        'input'
      ],
      name: 'search',
      placeholder: props.placeholder,
    })

    const cssVars = {
      ...props.fill ? { '--fill': props.fill } : {},
    }

    return () => h('div', {
        class: [
          'ns-search',
          ...props.variant ? [`variant-${props.variant}`] : [],
          ...props.round ? ['round'] : [],
        ],
        styles: {
          ...cssVars,
        }
      }, h('div', {class: ['content', 'row', 'align-center']}, [
          icon(),
          input()
        ])
    )
  }
})
