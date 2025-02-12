import { defineComponent, h, ref } from 'vue'
import { marginProps } from '../../../../utils'
import { timeInputProps, timeInputEmits } from '../../../../components/input'
import { renderFormItem } from '../../utils'

export const TimeInput = defineComponent({
  name: 'NutuiTimeInput',
  props: {
    ...timeInputProps,
    ...marginProps
  },
  emits: timeInputEmits,
  setup: (props, { slots, emit }) => {
    const $bus = useBus()
    const pickerOpen = ref(false)
    const openPicker = () => {
        pickerOpen.value = true
      },
      closePicker = () => {
        pickerOpen.value = false
      }

    const onPick = (value: string) => {
      console.log('===value', value)
    }

    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
            'ns-time-input',
          ].join(' '),
      }, [
        h(NutInput, {
          name: props.name,
          placeholder: props.placeholder,
          modelValue: props.modelValue,
          readonly: true,
          onClick: openPicker,
          inputAlign: props.variant === 'solid' ? 'left' : 'right',
        }),
        h(NutPopup, {
            class: [
              'time-input-picker'
            ],
            style: {
              height: '50vh'
            },
            visible: pickerOpen.value,
            position: 'bottom',
            round: true,
            onOpen: () => {
              $bus.emit('picker.open')
            },
            onClose: () => {
              pickerOpen.value = false
              $bus.emit('picker.close')
            }
          }, {
          default:
            () => h(NutDatePicker, {
                  class: ['time-input-picker'],
                  modelValue: props.modelValue,
                  type: props.hasSeconds ? 'time' : 'hour-minute',
                  minuteStep: props.minuteStep,
                  onConfirm: ({selectedValue}) => {
                    const result = selectedValue.join(':')
                    props['onUpdate:modelValue']?.(result)
                    pickerOpen.value = false
                  },
                  onCancel: () => {
                    pickerOpen.value = false
                  }
                })
        })
      ])
    )
  }
})
