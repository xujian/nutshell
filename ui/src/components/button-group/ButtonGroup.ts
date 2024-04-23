import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'
import { BRANDS, Color, type BrandColor } from '../../composables/theme'
import { NsButton } from '../button/Button'

export const buttonGroupProps = {
  ...useModelValuePropsForStringArray(),
  ...useVariantProps(),
  ...useDimensionProps(),
  ...useSizeProps(),
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
  },
  options: {
    type: Array as PropType<UniDataItem[]>,
    default: []
  },
  round: {
    type: Boolean,
    default: false,
  }
}

export type ButtonGroupEmits = {
}

const buttonGroupEmits: ButtonGroupEmits = {
}

export type ButtonGroupSlots = {
  default: never,
}

export type ButtonGroupProps = MakePropsType<typeof buttonGroupProps, ButtonGroupEmits>

/**
 * 按钮组 <ns-button-group>
 */
export const NsButtonGroup = defineComponent({
  name: 'NsButtonGroup',
  props: buttonGroupProps,
  emits: buttonGroupEmits,
  setup (props, ctx) {
    const { color } = props
    const colorIsBrand = BRANDS.includes(color as BrandColor)

    const item = (item: UniDataItem) => h(NsButton, {
      class: [
        ...props.size ? [`size-${props.size}`] : [],
        ...colorIsBrand ? [`color-${color}`] : [],
        ...props.variant ? [`variant-${props.variant}`] : [],
      ],
      round: props.round,
      label: item.label || ''
    })

    const items = () => props.options.map(i => item(i))

    return () => h('div', {
      class: [
        'ns-button-group',
        ...props.size ? [`size-${props.size}`] : [],
        ...colorIsBrand ? [`color-${color}`] : [],
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...props.round ? ['round'] : [],
      ]
    }, items())
  }
})
