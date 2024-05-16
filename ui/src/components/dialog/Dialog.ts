import { ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useDimensionProps, useModelValuePropsForBoolean } from '../../props'
import { Color } from '../../composables/theme'
import { buildDesignStyles } from '../../props/design'

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
  mask: {
    type: Boolean,
    default: true,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  ...useDesignProps(),
  ...useModelValuePropsForBoolean(),
  ...useDimensionProps(),
}

export type DialogEmits = {
  'update:modelValue': (value: boolean) => void,
  ok (): boolean,
  show (): void,
  hide (): void,
  close (): void,
}

export const dialogEmits: DialogEmits = {
  'update:modelValue': (value: boolean) => void 0,
  ok () { return true},
  show () {},
  hide () {},
  close () {},
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
      props: {
        style: {
          // 输出 CSS varibales 给内部结构使用
          ...props.fill ? { '--dialog-content': props.fill }: {}
        }
      }
    }
  }
})

// 另见
// $n.dialog(options: DialogOptions)
//
