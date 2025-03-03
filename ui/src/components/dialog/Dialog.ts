import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useDimensionProps, useModelValuePropsForBoolean, usePopupProps, useTitleProps } from '../../props'
import { Color } from '../../composables/theme'

export const dialogProps = {
  ...useTitleProps(),
  okText: {
    type: String,
  },
  okColor: {
    type: String as PropType<Color>,
  },
  cancelText: {
    type: String
  },
  cancelColor: {
    type: String as PropType<Color>,
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

export type DialogCompleteCallback = (result: any) => void | Promise<void>

export type DialogEmits = {
  ok: () => boolean,
  show: () => void,
  hide: () => void,
  close: () => void,
  complete: (result: any) => void,
}

export const dialogEmits: DialogEmits = {
  ok: () => true,
  show: () => true,
  hide: () => true,
  close: () => true,
  complete: async (result: any) => true,
}

export type DialogSlots = {
  default: never,
  footer: never
  title: never
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
