import { PropType, defineComponent, h, } from 'vue'
import {  MakePropsType } from '../../utils'
import { buildFlexClasses, buildFlexStyles, useDesignProps, useDimensionProps, useFlexProps, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'
import { Color } from '../../composables/theme'
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
  setup (props, { emit }) {

    const button = (item: UniDataItem) => h(NsButton, {
      class: [
        ...props.size ? [`size-${props.size}`] : [],
        // ...isBrand(props.color) ? [`fill-${props.color}`] : [],
        // ...props.variant ? [`variant-${props.variant}`] : ['variant-plain'],
        ...item.value == props.modelValue ? ['active'] : [],
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
      fill: props.fill,
      foreground: props.foreground,
      variant: props.variant,
      round: props.round,
      label: item.label,
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
        ...props.variant ? [`variant-${props.variant}`] : ['variant-plain'],
        ...buildFlexClasses(props),
      ],
      style: {
        ...buildFlexStyles(props),
      },
    }, content())
  }
})
