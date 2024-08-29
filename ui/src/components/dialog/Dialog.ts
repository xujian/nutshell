import { ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useDimensionProps, useModelValuePropsForBoolean, usePopupProps } from '../../props'
import { Color } from '../../composables/theme'

export const dialogProps = {
  title: {
    type: String,
  },
  okText: {
    type: String,
  },
  okColor: {
    type: String as PropType<Color>,
  },
  cancelText: {
    type: String
  },
  footer: {
    type: Boolean,
    default: true,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  top: {
    type: Number,
  },
  left: {
    type: Number,
  },
  ...usePopupProps(),
  ...useDesignProps(),
  ...useModelValuePropsForBoolean(),
  ...useDimensionProps(),
}

export type DialogEmits = {
  ok: () => boolean,
  show: () => void,
  hide: () => void,
  close: () => void,
}

export const dialogEmits: DialogEmits = {
  ok: () => { return true},
  show: () => {},
  hide: () => {},
  close: () => {},
}

export type DialogSlots = {
  default: never,
  footer: never
}

export type DialogProps = MakePropsType<typeof dialogProps, DialogEmits>

/**
 * NsDialog 弹窗组件
 * Static Dialog Component
 * Usage:
 * <ns-dialog v-model="xDialogVisible">
 *   ...
 * </ns-dialog>
 */
export const NsDialog = define({
  name: 'NsDialog',
  props: dialogProps,
  emits: dialogEmits,
  setup (props, ctx) {
    return {
      structured: true,
    }
  }
})

// 另见
// $n.dialog(options: DialogOptions)
//
