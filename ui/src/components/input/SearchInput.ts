import { h } from 'vue'
import { InputProps, NsInput } from './Input'

const defaultProps: Partial<InputProps> = {
  type: 'text',
}


/**
 * 搜索框 <ns-search-input>
 */
export const NsSearchInput = (props: InputProps) => {
  return h(NsInput, {
    ...defaultProps,
    ...props,
  }, {
    prepend: () => h('i', {
      class: [
        'ns-icon',
        'ns-icon-search'
      ]
    }),
    append: () => h('a', {
      href: 'javascript:void(0)',
      class: [
        'link'
      ],
      onClick () {
        props.onChange?.(props.modelValue)
      }
    }, '搜索')
  })
}
