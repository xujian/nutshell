import { PropType, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useModelValuePropsForBoolean, usePopupProps, useSizeProps } from '../../props'
import { Dimension } from '../../types'
import { Color } from '../../composables'

export type SheetAnchor = 'top' | 'right' | 'bottom' | 'left'

export const sheetProps = {
  title: {
    type: String,
  },
  width: {
    type: [Number, String] as PropType<Dimension>,
  },
  height: {
    type: [Number, String] as PropType<Dimension>,
  },
  okColor: {
    type: String as PropType<Color>,
  },
  cancelColor: {
    type: String as PropType<Color>,
  },
  okText: {
    type: String,
  },
  cancelText: {
    type: String
  },
  className: {
    type: String,
  },
  footer: {
    type: Boolean,
    default: false,
  },
  ...usePopupProps(),
  ...useModelValuePropsForBoolean(),
  ...useSizeProps(),
  ...useDesignProps(),
}

export type SheetEmits = {
  ok: () => boolean,
  open: () => void,
  hide: () => void,
  close: () => void,
  complete: (result: any) => void,
}

export const sheetEmits: SheetEmits = {
  ok: () => true,
  open: () => true,
  hide: () => true,
  close: () => true,
  complete: (result: any) => true,
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
