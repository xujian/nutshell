import { defineComponent, h } from 'vue'
import { DialogProps, dialogProps } from '../../../../components/dialog'
import { Modal as AntdvModal } from 'ant-design-vue'

const buttonTypesMap = {
  negtive: 'danger'
}

export const Dialog = defineComponent({
  name: 'AntdvDialogVendor',
  props: dialogProps,
  setup (props: DialogProps, ctx) {
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
      cancelText: props.cancelText,
      keyboard: true,
      'onUpdate:open': (value: boolean) => {
        console.log('antdv modal.......onUpdate:open', value, Object.keys(props), props['onUpdate:modelValue'])
        props['onUpdate:modelValue']?.(value)
      },
      onOK: () => {
        console.log('on ok')
        props['onUpdate:modelValue']?.(false)
        props['onHide']?.()
      },
      onCancel: () => {
        console.log('on cancel')
        props['onClose']?.()
      },
      onClose: () => {
        console.log('on close')
        props['onClose']?.()
      },
    }, slots)
  }
})
