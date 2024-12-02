import { PropType, defineComponent, h, } from 'vue'
import {  MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useDesignProps, useDimensionProps, useFlexProps, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
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
  change: (value: string) => void
}

const buttonGroupEmits: ButtonGroupEmits = {
  change: (value: string) => true
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
        ...item.value == props.modelValue ? ['active'] : [],
      ],
      onClick () {
        if (props.selectable === false) {
          return
        }
        props['onUpdate:modelValue']?.(`${item.value}`)
        emit('change', `${item.value}`)
      },
      size: props.size || 'sm',
      color: props.color,
      fill: props.fill,
      foreground: props.foreground,
      variant: props.variant,
      round: props.round,
      label: item.label,
      thick: props.thick,
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
        ...buildFlexClasses(props),
        ...buildDesignClasses(props),
      ],
      style: {
        ...buildFlexStyles(props),
        ...buildDesignStyles(props),
      },
    }, content())
  }
})
