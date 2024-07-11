import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, useDesignProps, useDimensionProps, useFlexProps, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'
import { BRANDS, Color, type BrandColor } from '../../composables/theme'
import { NsButton } from '../button/Button'

export const buttonGroupProps = {
  ...useModelValuePropsForStringArray(),
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
  ...useModelValuePropsForString(),
  selectable: {
    type: Boolean,
    default: true,
  },
  ...useVariantProps(),
  ...useDesignProps(),
  ...useFlexProps(),
  ...useDimensionProps(),
  ...useSizeProps(),
}

export type ButtonGroupEmits = {
  click: (value: string) => void,
  change: (value: string) => void
}

const buttonGroupEmits: ButtonGroupEmits = {
  click: (value: string) => {
    return true
  },
  change: (value: string) => {
    return true
  }
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

    const button = (item: UniDataItem) => h(NsButton, {
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

    const items = () => h('div', {
      class: ['row', 'buttons']
    }, props.options.map(i => button(i)))

    const content = () => h('scroll-view', {
        'scroll-x': true,
        class: ['button-group-scroll-view'],
      }, items())

    return () => h('div', {
      class: [
        'ns-button-group',
        'row',
        ...buildDesignClasses(props),
      ],
      style: {
        ...buildDesignStyles(props),
      },
    }, content())
  }
})
