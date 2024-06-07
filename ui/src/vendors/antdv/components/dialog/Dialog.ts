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

    const styleFromProps = {
      ...props.top
        ? {
          top: `${props.top}px`
        } : {},
      ...props.left
        ? {
          left: `${props.left}px`
        } : {}
    }

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
      style: {
        ...styleFromProps
      },
      open: props.modelValue,
      closable: props.closable === false ? false : true,
      title: props.title,
      width: props.width || 540,
      height: props.height,
      okText: props.okText || '确定',
      footer: props.footer === false
        ? null
        : void 0,
      okType: props.okColor ? buttonTypesMap[props.okColor] || 'primary' : 'primary',
      cancelText: props.cancelText || '取消',
      keyboard: true,
      mask: props.mask,
      destroyOnClose: props.destroyOnClose,
      centered: props.centered,
      ...props.footer !== false ? {
        footer: slots.footer?.() || defaultFooter(),
      }: {},
      'onUpdate:open': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      },
      onOk,
      onCancel,
    }, {
      ...slots,
      closeIcon: h('i', { class: 'ns-dailog-x'}, '')
    })
  },
  {
    name: 'AntdvDialogVendor',
    // @ts-ignore
    props: dialogProps,
    emits: dialogEmits,
  }
)
