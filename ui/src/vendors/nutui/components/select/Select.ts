import { h } from 'vue'

export const Select = (props, ctx) => {

  const columns = props.options.map(o => ({
    text: o.label, value: o.value
  }))
  return () => h(NutPicker, {
    columns,
  })
}