import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, useDesignProps, useVariantProps, useModelValuePropsForInput } from '../../props'

export const searchProps = {
  label: {
    type: String
  },
  placeholder: {
    type: String,
  },
  ...useDesignProps(),
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
}

export type SearchEmits = {
  keyup: (code: string) => void
  enter: () => void
}

const searchEmits: SearchEmits = {
  keyup: (code: string) => {
    return true
  },
  enter: () => {
    return true
  },
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

    const input = () => h(NutInput, {
      class: [
        'input'
      ],
      name: 'search',
      modelValue: props.modelValue,
      placeholder: props.placeholder,
      onConfirm: () => {
        ctx.emit('enter')
      },
      "onUpdate:modelValue": (val: string) => {
        props['onUpdate:modelValue']?.(val)
      },
    })

    return () => h('div', {
        class: [
          'ns-search',
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
