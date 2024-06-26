import { computed, defineComponent, h, ref, type DefineComponent } from 'vue'
import { marginProps } from '../../../../utils'
import { dateRangeInputProps, dateRangeInputEmits } from '../../../../components'
import { DateAsStringOrNumber, DateRange } from '../../../../types'

// 这是一个复合组件
export const DateRangeInput = defineComponent({
  name: 'DateRangeInput',
  props: {
    ...dateRangeInputProps,
    ...marginProps
  },
  emits: dateRangeInputEmits,
  setup: (props, { slots }) => {

    const pickerSeg = ref<number>(0),
      pickerValue = computed(() => props.modelValue?.[pickerSeg.value])
    const pickerOpen = ref(false)

    const openPicker = (value: string, seg: number) => {
        pickerSeg.value = seg
        pickerOpen.value = true
      },
      closePicker = () => {
        pickerOpen.value = false
      }

    const onPick = (value: string) => {
    }

    const seperator = () => h('div', {
          class: ['seperator']
        }
      )


    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
            'ns-date-input',
          ].join(' '),
      }, [
        h('div', { class: ['row', 'justify-between', 'align-center']}, [
            h(NutInput, {
              name: props.name,
              onFocus: ({detail}) => openPicker(detail.value, 0),
              placeholder: '开始日期',
              modelValue: props.modelValue?.[0],
              inputAlign: props.variant === 'solid' ? 'left' : 'right',
            }),
            seperator(),
            h(NutInput, {
              name: props.name,
              onFocus: ({detail}) => openPicker(detail.value, 1),
              placeholder: '结束日期',
              modelValue: props.modelValue?.[1],
              inputAlign: props.variant === 'solid' ? 'left' : 'right',
            }),
          ]
        ),
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
            () => h(NutDatePicker, {
              class: ['date-input-picker'],
              modelValue: new Date(pickerValue.value || Date.now()),
              onConfirm: ({selectedValue}) => {
                const result: DateRange = [props.modelValue?.[0], props.modelValue?.[1]]
                result[pickerSeg.value] = selectedValue.join('-') as DateAsStringOrNumber
                // @ts-ignore
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
