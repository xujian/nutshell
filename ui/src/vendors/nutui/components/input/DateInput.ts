import { defineComponent, h, ref } from 'vue'
import dayjs from 'dayjs'
import { marginProps } from '../../../../utils'
import { dateInputProps, dateInputEmits } from '../../../../components/input'
import { renderFormItem } from '../../utils'

// import 'dayjs/locale/zh-cn'
// import 'dayjs/locale/zh-hk'

// 这是一个复合组件
export const DateInput = defineComponent({
  name: 'NutuiDateInput',
  props: {
    ...dateInputProps,
    ...marginProps
  },
  emits: dateInputEmits,
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

    dayjs().locale('en')
    const today = new Date()

    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
            'ns-date-input',
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
              'date-input-picker'
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
            () => props.hasCalendar
              ? h(NutCalendar, {
                  class: ['date-input-calendar'],
                  onClose: closePicker,
                  poppable: false,
                  showTitle: false,
                  showSubTitle: false,
                  onChoose: (params) => {
                    props['onUpdate:modelValue']?.(params[3])
                    pickerOpen.value = false
                  }
                })
              : h(NutDatePicker, {
                  class: ['date-input-date-picker'],
                  modelValue: props.modelValue || today,
                  type: props.hasTime ? 'time' : 'date',
                  onConfirm: ({selectedValue}) => {
                    const result = selectedValue.join('-')
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
