import { h, ref } from 'vue'
import { DatePicker } from 'ant-design-vue'
import { defineComponent } from 'vue'

/**
 * Antdv DateInput
 */
export const DateInput = defineComponent({
  name: 'DateInput',
  setup: (props, ctx) => {
    const classes = [
      'ns-date-input',
      'ns-border-auto',
      'ns-rounded-auto'
    ].join(' ')
    const visible = ref(false)
    const open = () => {
      console.log('DateInput.Antdv......open')
      visible.value = true
    },
    close = () => {
      console.log('DateInput.Antdv......close')
      visible.value = false
    }
    return () => 
      h(DatePicker, {
        class: classes,
        visible: visible.value,
        onClose: close,
      })
  }
})
