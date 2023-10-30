import { defineComponent, h, ref, Fragment, PropType, SetupContext, VNode, ObjectEmitsOptions } from 'vue'
import { CryptoSecret, CustomColumnFunctionalRender, CustomColumnRender, TableColumnCryptoProps, TableColumnData, TableColumnProps } from '../../../../../components'
import { EmitsOptions } from 'vue'

/**
 * Table custom column: button
 * @param column 
 * @param custom 
 */
export default function crypto (
    attrs: TableColumnCryptoProps,
  ) {
  // 脱敏字段
  // 手机号脱敏
  // 这是带有状态的 table column, 所以用 defineComponent 定义
  // 不能用 functional component
  const render: CustomColumnFunctionalRender = ({value, row, index}) => {
    if (!value) return h('div')
    let data: Record<string, string> = {}
    try {
      data = JSON.parse(value)
    } catch (e) {
      return () => ''
    }
    if (!data.mask) return () => ''

    const content = ref(data.mask),
      state = ref('masked')

    const onIconClick = () => {
      if (!attrs.onDecrypt) return
      if (!row) return
      if (state.value === 'masked') {
        attrs.onDecrypt.call(null, data as CryptoSecret).then((answer: string) => {
          if (answer) {
            content.value = answer
            state.value = 'decrypted'
          }
        })
      } else {
        state.value = 'masked'
        content.value = data.mask
      }
    }
    
    const icon = () => h('i', {
      class: ['icon', `icon-${state.value}`],
      onClick: onIconClick
    })

    const result = h('div', {}, [
        h('label', {class: 'number'}, content.value.replace(/\*/g, '∗')),
        icon()
      ]
    )
    return result
  }

  return render
}