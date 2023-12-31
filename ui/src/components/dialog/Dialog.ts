import { ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps, useModelValuePropsForBoolean } from '../../props'
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

export type DialogEmits = {
  'update:modelValue': (value: boolean) => void,
  ok (): void,
  show (): void,
  hide (): void,
  close (): void,
}

export const dialogEmits: DialogEmits = {
  'update:modelValue': (value: boolean) => void 0,
  ok () {},
  show () {},
  hide () {},
  close () {},
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
    }
  }
})

// 另见
// $n.dialog(options: DialogOptions)
//
