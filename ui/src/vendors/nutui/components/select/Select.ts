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
        onClick: openPicker,
        readonly: true,
        inputAlign: props.variant === 'solid' ? 'left' : 'right',
      }),
      h(NutPopup, {
        visible: pickerOpen.value,
        position: 'bottom',
        onClose: closePicker,
        round: true,
      }, {
        default: () => h(NutPicker, {
          // @ts-ignore
          modelValue: props.modelValue ? [props.modelValue] : [columns[0].value],
          columns: columns!,
          onConfirm: onPickerConfirm,
          onCancel: closePicker,
        })
      }
    )
  ]))
}
