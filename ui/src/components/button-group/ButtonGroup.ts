import { PropType, defineComponent, h, } from 'vue'
import {  MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useDesignProps, useDimensionProps, useFlexProps, useModelValuePropsForInput, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'
import { Color } from '../../composables/theme'
import { NsButton } from '../button/Button'

export const buttonGroupProps = {
  ...useModelValuePropsForInput(),
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  items: {
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
  change: (value: UniDataItem) => void
}

const buttonGroupEmits: ButtonGroupEmits = {
  change: (value: UniDataItem) => true
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
        'ns-button-group-item',
        ...props.size ? [`size-${props.size}`] : [],
        ...item.value == props.modelValue ? ['active'] : [],
      ],
      onClick () {
        if (props.selectable === false) {
          return
        }
        props['onUpdate:modelValue']?.(`${item.value}`)
        emit('change', item)
      },
      size: props.size || 'sm',
      fill: props.fill || 'primary',
      foreground: props.foreground,
      variant: props.variant,
      round: props.round,
      label: item.label,
      thick: props.thick,
    })

    const items = () => h('div', {
      class: ['row', 'buttons']
    }, props.items?.map(i => button(i)))

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
