import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, useDesignProps, useVariantProps } from '../../props'

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

    return () => h('div', {
        class: [
          'ns-search',
          ...props.variant ? [`variant-${props.variant}`] : [],
          ...buildDesignClasses(props),
        ],
        style: {
          ...buildDesignStyles(props),
        }
      }, h('div', {class: ['content', 'row', 'align-center']}, [
          icon(),
          input()
        ])
    )
  }
})
