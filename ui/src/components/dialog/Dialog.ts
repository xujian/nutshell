import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { define } from '../../utils'
import { useDimensionProps, useModelValuePropsForBoolean } from '../../props'
import { EmitsToProps } from '../../utils/private/helpers'
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
  ...useModelValuePropsForBoolean(),
  ...useDimensionProps(),
}

export interface DialogEmits extends ObjectEmitsOptions {
  'update:modelValue': (value: boolean) => void,
  show: () => void,
  hide: () => void,
  close: () => void,
}

const dialogEmits: DialogEmits = {
  'update:modelValue': (value: boolean) => void 0,
  'show': () => void 0,
  'hide': () => void 0,
  'close': () => void 0,
}

export interface DialogSlots extends SlotsType {
  default: never,
}

export type DialogProps = ExtractPublicPropTypes<typeof dialogProps> & Partial<EmitsToProps<DialogEmits>>

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
    }
  }
})

// 另见
// $n.dialog(options: DialogOptions)
// 
