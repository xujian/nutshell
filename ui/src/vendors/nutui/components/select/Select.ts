import { computed, h, ref, SetupContext } from 'vue'
import { SelectProps } from '../../../../components'
import { UniDataItem } from '../../../../shared'
import { renderFormItem } from '../../utils'

export const Select = (props: SelectProps, { slots }: Omit<SetupContext, 'expose'>) => {

  const columns = props.options?.map(o => ({
      text: o.label, value: o.value
    }))

  const selected = computed<UniDataItem>(() => {
    if (!props.modelValue) {
      return {
        label: '',
        value: ''
      }
    }
    return props.options?.find(x => x.value === props.modelValue) || {
      label: '',
      value: ''
    }
  })

  const pickerOpen = ref(false)

  const openPicker = () => {
    if (props.disabled) {
      return
    }
    if (props.modelValue && props.options && props.options?.length <= 1) {
      return
    }
    pickerOpen.value = true
  }
  const closePicker = () => {
    pickerOpen.value = false
  }

  const onPickerConfirm = ({selectedValue}: any) => {
    props['onUpdate:modelValue']?.(selectedValue?.[0] || void 0)
    pickerOpen.value = false
  }

  return renderFormItem(props, slots,

    () => h('div', {
      class: [
        ].join(' '),
    }, [
      h(NutInput, {
        name: props.name,
        placeholder: props.placeholder,
        modelValue: selected.value.label,
        // disabled: props.disabled,
        onClick: openPicker,
        readonly: true,
        inputAlign: props.variant === 'solid' ? 'left' : 'right',
      }, {
        right: () => h('img', {
          src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjM2MjEgMjMuOTAxNkMxMC4wNjY3IDI0LjE2ODMgOS45MzkxNyAyNC41Njg5IDEwLjAyNzYgMjQuOTUyNkMxMC4xMTYgMjUuMzM2MiAxMC40MDY5IDI1LjY0NDYgMTAuNzkwNyAyNS43NjE1QzExLjE3NDUgMjUuODc4NCAxMS41OTI5IDI1Ljc4NjIgMTEuODg4MyAyNS41MTk0TDIxLjYzNzggMTYuNzE0NkMyMS44Njg3IDE2LjUwNjIgMjIgMTYuMjEyOSAyMiAxNS45MDU3QzIyIDE1LjU5ODQgMjEuODY4NyAxNS4zMDUxIDIxLjYzNzggMTUuMDk2N0wxMS44ODgzIDYuMjkxODZDMTEuNDMxNiA1Ljg3OTU1IDEwLjcxOTggNS45MDc0NiAxMC4yOTgzIDYuMzU0MjNDOS44NzY5IDYuODAwOTkgOS45MDU0NCA3LjQ5NzQ0IDEwLjM2MjEgNy45MDk3NUwxOS4yMTYyIDE1LjkwNTNMMTAuMzYyMSAyMy45MDE2WiIgZmlsbD0iI0RGREZERiIvPgo8L3N2Zz4K',
          style: {
            width: '16px',
            height: '16px',
          }
        }, '')
      }),
      h(NutPopup, {
        visible: pickerOpen.value,
        position: 'bottom',
        onClose: closePicker,
        round: true,
      }, {
        default: () => h(NutPicker, {
          // @ts-ignore
          modelValue: props.modelValue
            ? [props.modelValue]
            : columns?.length
              ? [columns[0].value]
              : [],
          columns: columns!,
          onConfirm: onPickerConfirm,
          onCancel: closePicker,
        })
      }
    )
  ]))
}
