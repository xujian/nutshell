import { h, ref } from 'vue'
import { defineComponent } from 'vue'

// 这是一个复合组件
export const DateInput = defineComponent({
  name: 'DateInput',
  setup: (props, ctx) => {
    const classes = [
      'ns-date-input',
    ].join(' ')
    const visible = ref(false)
    const open = () => {
      console.log('DateInput.......open')
      visible.value = true
    },
    close = () => {
      console.log('DateInput.......close')
      visible.value = false
    }
    return () => h('div', {
        class: classes,
      }, [
        h(NutCell, {
          title: '选择日期',
          onClick: open
        }),
        h(NutCalendar, {
          class: classes,
          visible: visible.value,
          onClose: close,
          defaultValue: '2023-08-17',
        })
      ])
  }
})
