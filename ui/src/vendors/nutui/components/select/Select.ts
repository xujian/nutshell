import { computed, h, ref, SetupContext } from 'vue'
import { SelectProps } from '../../../../components'
import { UniDataItem } from '../../../../shared'

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
    pickerOpen.value = true
  }
  const closePicker = () => {
    pickerOpen.value = false
  }

  const onPickerConfirm = ({selectedValue}: any) => {
    props['onUpdate:modelValue']?.(selectedValue[0])
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
        onFocus: openPicker,
        inputAlign: props.variant === 'solid' ? 'left' : 'right',
      }),
      h(NutPopup, {
        visible: pickerOpen.value,
        position: 'bottom',
        onClose: closePicker,
        round: true,
      }, {
        default: () => h(NutPicker, {
          columns,
          onConfirm: onPickerConfirm,
          onCancel: closePicker,
        })
      }
    )
  ]))
}
