import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
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
  },
  ...useModelValuePropsForString(),
  selectable: {
    type: Boolean,
    default: true,
  }
}

export type ButtonGroupEmits = {
  click: (value: string) => void,
  change: (value: string) => void
}

const buttonGroupEmits: ButtonGroupEmits = {
  click: (value: string) => void 0,
  change: (value: string) => void 0
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
  setup (props, { emit }) {
    const colorIsBrand = BRANDS.includes(props.color as BrandColor)

    const item = (item: UniDataItem) => h(NsButton, {
      class: [
        ...props.size ? [`size-${props.size}`] : [],
        ...colorIsBrand ? [`color-${props.color}`] : [],
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...item.value === props.modelValue ? ['active'] : [],
      ],
      onClick () {
        if (props.selectable === false) {
          return
        }
        props['onUpdate:modelValue']?.(`${item.value}`)
        emit('change', `${item.value}`)
      },
      size: props.size,
      color: props.color,
      variant: props.variant,
      round: props.round,
      label: item.label || ''
    })

    const items = () => props.options.map(i => item(i))

    return () => h('div', {
      class: [
        'ns-button-group',
      ]
    }, { default: items })
  }
})
