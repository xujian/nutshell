import { h } from 'vue'
import { SelectProps } from '../../../../components'

export const Select = (props: SelectProps) => {

  const columns = props.options?.map(o => ({
    text: o.label, value: o.value
  }))
  return h(NutPicker, {
    columns,
  })
}