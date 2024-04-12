import { ExtractPublicPropTypes, PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useTriggerProps } from '../../props'
import { MenuItem } from '../menu'

export type PopoverTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'
export type PopoverPositionType =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

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
  position: {
    type: String as PropType<PopoverPositionType>,
    require: false
  },
  items: {
    type: Array as PropType<MenuItem[]>,
    require: false
  },
  className: {
    type: String,
  }
}

export type PopoverProps = ExtractPublicPropTypes<typeof popoverProps>

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

/**
 *  组件 <ns-popover>
 */
export const NsPopover = define({
  name: 'NsPopover',
  props: popoverProps,
  emits: popoverEmits,
  setup(props, ctx) {
    return {}
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
