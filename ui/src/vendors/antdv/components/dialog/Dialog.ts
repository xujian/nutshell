import { defineComponent, h } from 'vue'
import { type DialogProps, dialogProps, dialogEmits, type DialogEmits } from '../../../../components/dialog'
import { Modal as AntdvModal } from 'ant-design-vue'
import { LegacyButtonType } from 'ant-design-vue/es/button/buttonTypes'
import { NsButton } from '../../../../components'

const buttonTypesMap: Record<string, LegacyButtonType> = {
  negtive: 'danger'
}

export const Dialog = defineComponent<DialogProps, DialogEmits>(
  (props, ctx) => {
    const { slots, emit } = ctx

    const onOk = async () => {
      if (props.onOk) {
        const result = await props.onOk()
        if (result) {
          // props['onUpdate:modelValue']?.(false)
          emit('ok')
        }
      } else {
        // props['onUpdate:modelValue']?.(false)
        emit('ok')
      }
    },
    onCancel = () => {
      if (props.onClose) {
        const result = props.onClose()
        if (result) {
          props['onUpdate:modelValue']?.(false)
          emit('hide')
          emit('close')
        }
      } else {
        props['onUpdate:modelValue']?.(false)
        emit('hide')
        emit('close')
      }
    }

    const defaultFooter = () => h('div', {
      class: [
        'dialog-footer',
        'row',
        'justify-end'
      ],
    }, [
      h(NsButton, {
        class: ['cancel-button'],
        color: 'neutral',
        label: props.cancelText || '取消',
        onClick: onCancel,
      }),
      h(NsButton, {
        class: ['ok-button'],
        color: 'primary',
        label: props.okText || '确定',
        onClick: onOk,
      }),
    ])

    return () => h(AntdvModal, {
      style: props.style,
      open: props.modelValue,
      title: props.title,
      width: props.width,
      height: props.height,
      okText: props.okText || '确定',
      footer: props.footer === false
        ? null
        : void 0,
      okType: props.okColor ? buttonTypesMap[props.okColor] || 'primary' : 'primary',
      cancelText: props.cancelText || '取消',
      keyboard: true,
      centered: props.centered,
      ...props.footer !== false ? {
        footer: slots.footer || defaultFooter(),
      }: {},
      'onUpdate:open': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      },
      onOk,
      onCancel,
    }, slots)
  },
  {
    name: 'AntdvDialogVendor',
    // @ts-ignore
    props: dialogProps,
    emits: dialogEmits,
  }
)
