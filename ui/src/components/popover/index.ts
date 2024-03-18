import { ExtractPublicPropTypes, PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useTriggerProps } from '../../props'

export type PopoverTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'
export type PopoverPlacementType =
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
export type PopoverListType = {
  title: string
  caption: string
  icon: string
}

export const Props = {
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
    type: String as PropType<PopoverPlacementType>,
    default: 'top',
    require: false
  },
  list: {
    type: Array as PropType<PopoverListType[]>,
    require: false
  }
}

export type PopoverProps = ExtractPublicPropTypes<typeof Props>

export type popoverEmits = {}

const Emits: popoverEmits = {}

export type popoverSlots = {
  content: never
  title: never
}

export type popoverProps = MakePropsType<typeof Props, popoverEmits>

/**
 *  组件 <ns-popover>
 */
export const NsPopover = define({
  name: 'NsPopover',
  props: Props,
  emits: Emits,
  setup(props, ctx) {
    return {}
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
