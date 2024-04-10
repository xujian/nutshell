import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../utils'
import { useModelValuePropsForBoolean } from '../../props'
import { PopoverPositionType } from './Popover'
import { Color } from '../../composables/theme'

export const popoverConfirmProps = {
  ...useModelValuePropsForBoolean(),
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
  overlayClassName: {
    type: String,
  },
  color: {
    type: String as PropType<Color>
  },
}

export type PopoverConfirmProps = ExtractPublicPropTypes<typeof popoverConfirmProps>

export type PopoverConfirmEmits = {
}

const popoverConfirmEmits: PopoverConfirmEmits = {
}

export type PopoverConfirmSlots = {
  content: never
  title: never
}

/**
 *  组件 <ns-popover-confirm>
 */
export const NsPopoverConfirm = define({
  name: 'NsPopoverConfirm',
  props: popoverConfirmProps,
  emits: popoverConfirmEmits,
  setup(props, ctx) {
    return {}
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
