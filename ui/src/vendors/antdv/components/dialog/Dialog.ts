import { defineComponent, h } from 'vue'
import { type DialogProps, dialogProps, dialogEmits, type DialogEmits } from '../../../../components/dialog'
import { Modal as AntdvModal } from 'ant-design-vue'
import { Color } from '../../../../composables'
import { LegacyButtonType } from 'ant-design-vue/es/button/buttonTypes'

const buttonTypesMap: Record<string, LegacyButtonType> = {
  negtive: 'danger'
}

export const Dialog = defineComponent<DialogProps, DialogEmits>(
  (props, ctx) => {
    const classes = [
      'ns-dialog',
    ].join(' ')
    const { slots, emit } = ctx

    return () => h(AntdvModal, {
      class: classes,
      open: props.modelValue,
      title: props.title,
      width: props.width,
      height: props.height,
      okText: props.okText || '确定',
      okType: props.okColor ? buttonTypesMap[props.okColor] || 'primary' : 'primary',
      cancelText: props.cancelText || '取消',
      keyboard: true,
      'onUpdate:open': (value: boolean) => {
        console.log('antdv modal.......onUpdate:open', value, Object.keys(props), props['onUpdate:modelValue'])
        props['onUpdate:modelValue']?.(value)
      },
      onOk: () => {
        console.log('on ok')
        props['onUpdate:modelValue']?.(false)
        emit('ok')
      },
      onCancel: () => {
        console.log('on cancel')
        emit('cancel')
        emit('close')
      }
    }, slots)
  },
  {
    name: 'AntdvDialogVendor',
    // @ts-ignore
    props: dialogProps,
    emits: dialogEmits,
  }
)
