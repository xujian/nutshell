import { computed, h, ref, SetupContext } from 'vue'
import type { SelectProps } from '../../../../components/select'
import { UniDataItem } from '../../../../shared'
import { renderFormItem } from '../../utils'

export const Select = (props: SelectProps, { slots }: Omit<SetupContext, 'expose'>) => {
  const $bus = useBus()

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
    $bus.emit('picker.open')
  }
  const closePicker = () => {
    pickerOpen.value = false
    $bus.emit('picker.close')
  }

  const onPickerConfirm = ({selectedValue}: any) => {
    props['onUpdate:modelValue']?.(selectedValue?.[0] || void 0)
    pickerOpen.value = false
  }

  return renderFormItem(props, slots,

    () => h('div', {
      class: [
        ...props.formatter ? ['has-formatter'] : [],
        ...props.modelValue !== void 0 ? ['has-value'] : []
      ]
    }, [
      h(NutInput, {
        class: ['placeholder-input'],
        name: props.name,
        placeholder: props.placeholder,
        modelValue: selected.value.label,
        // disabled: props.disabled,
        onClick: openPicker,
        readonly: true,
        inputAlign: props.variant === 'solid' ? 'left' : 'right',
        formatter: props.formatter,
        formatTrigger: 'onChange'
      }, {
        right: () => h('i', { class: ['icon', 'arrow'] })
      }),
      props.formatter
        ? h('div', {
            class: ['formatter-mask'],
            onClick: openPicker,
          }, {
            default: () => props.formatter?.(selected.value.value)
          })
        : null,
      h(NutPopup, {
        popClass: 'input-picker',
        visible: pickerOpen.value,
        position: 'bottom',
        onClose: closePicker,
        onOpen: () => {
          $bus.emit('picker.open')
        },
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
