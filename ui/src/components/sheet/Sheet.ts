import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useSizeProps } from '../../props'

export type SheetAnchor = 'top' | 'right' | 'bottom' | 'left'

export const sheetProps = {
  title: {
    type: String,
  },
  anchor: {
    type: String as PropType<SheetAnchor>,
    default: 'right'
  },
  hasBackdrop: {
    type: Boolean,
    default: true,
  },
  height: {
    type: Number,
  },
  className: {
    type: String,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
  },
  ...useModelValuePropsForBoolean(),
  ...useSizeProps(),
}

export type SheetEmits = {
}

const sheetEmits: SheetEmits = {
}

export interface SheetSlots extends SlotsType {
  default: never,
}

export type SheetProps = MakePropsType<typeof sheetProps, SheetEmits>

/**
 *  底部上滑对话框 <ns-sheet>
 */
export const NsSheet = define({
  name: 'NsSheet',
  props: sheetProps,
  emits: sheetEmits,
  setup (props, ctx) {
    return {
    }
  }
})
