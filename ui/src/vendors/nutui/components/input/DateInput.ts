import { defineComponent, h, ref, type DefineComponent } from 'vue'
import { marginProps } from '../../../../utils'
import { dateInputProps, dateInputEmits } from '../../../../components'

// 这是一个复合组件
export const DateInput = defineComponent({
  name: 'DateInput',
  props: {
    ...dateInputProps,
    ...marginProps
  },
  emits: dateInputEmits,
  setup: (props, { slots }) => {
    const calendarOpen = ref(false)
    const openCalendar = () => {
        calendarOpen.value = true
      },
      closeCalendar = () => {
        console.log('===ddd', )
        calendarOpen.value = false
      }
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
          onFocus: openCalendar
        }),
        h(NutCalendar, {
          visible: calendarOpen.value,
          onClose: closeCalendar,
        })
      ])
    )
  }
})
