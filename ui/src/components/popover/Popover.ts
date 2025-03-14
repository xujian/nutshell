import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useModelValuePropsForBoolean, useTitleProps, useTriggerProps } from '../../props'

export const popoverProps = {
  ...useModelValuePropsForBoolean(),
  ...useTriggerProps(),
  ...useTitleProps(),
  content: {
    type: String,
    require: false
  },
  placement: {
    type: String,
    require: false
  },
  trigger: {
    type: String,
    default: 'mouseenter',
  },
  light: {
    type: Boolean,
    default: false,
  },
  ...useDesignProps(),
}

export type PopoverEmits = {
  mouseleave (): void,
  mouseenter (): void,
}

export const popoverEmits: PopoverEmits = {
  mouseleave: () => true,
  mouseenter: () => true,
}

export type PopoverSlots = {
  content: never
  title: never
}

export type PopoverProps = MakePropsType<typeof popoverProps, PopoverEmits>

/**
 *  气泡组件 <ns-popover>
 */
export const NsPopover = define({
  name: 'NsPopover',
  props: popoverProps,
  emits: popoverEmits,
  setup (props, { slots }) {
    return {
      structured: true,
    }
  }
})
