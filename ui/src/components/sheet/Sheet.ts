import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, usePopupProps, useSizeProps } from '../../props'

export type SheetAnchor = 'top' | 'right' | 'bottom' | 'left'

export const sheetProps = {
  title: {
    type: String,
  },
  anchor: {
    type: String as PropType<SheetAnchor>,
    default: 'right'
  },
  height: {
    type: Number,
  },
  className: {
    type: String,
  },
  ...usePopupProps(),
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
