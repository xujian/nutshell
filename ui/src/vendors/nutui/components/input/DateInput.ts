import { defineComponent, h, ref, type DefineComponent } from 'vue'
import { marginProps } from '../../../../utils'
import { dateInputProps, dateInputEmits } from '../../../../components'
import { renderFormItem } from '../../utils'
import dayjs from 'dayjs'
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
    const pickerOpen = ref(false)
    const openPicker = () => {
      pickerOpen.value = true
      },
      closePicker = () => {
        console.log('===ddd', )
        pickerOpen.value = false
      }

    const onPick = (value: string) => {
      console.log('===value', value)
    }

    dayjs().locale('en')
    const today = dayjs().format('YYYY-MM-DD')

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
            onClose: () => {
              pickerOpen.value = false
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
