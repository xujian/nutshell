import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useTriggerProps } from '../../props'


export const popoverProps = {
  ...useModelValuePropsForBoolean(),
  ...useTriggerProps(),
  title: {
    type: String,
    require: false
  },
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
}

export type PopoverEmits = {
  mouseleave (): void,
  mouseenter (): void,
  click (): void,
}

const popoverEmits: PopoverEmits = {
  mouseleave () {},
  mouseenter () {},
  click () {},
}

export type PopoverSlots = {
  content: never
  title: never
}

export type PopoverProps = MakePropsType<typeof popoverProps, PopoverEmits>

/**
 *  气泡卡片组件 <ns-popover>
 */
export const NsPopover = define({
  name: 'NsPopover',
  props: popoverProps,
  emits: popoverEmits,
  setup (props, { slots }) {
    return {}
  }
})
