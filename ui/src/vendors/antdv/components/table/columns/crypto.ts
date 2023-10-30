import { defineComponent, h, ref, Fragment, PropType, SetupContext, VNode } from 'vue'
import { CryptoSecret, CustomColumnFunctionalRender, CustomColumnRender, TableColumnCryptoProps, TableColumnData, TableColumnProps } from '../../../../../components'

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
  const component = defineComponent<TableColumnData, {}, string, {}>(
    (props: TableColumnData, ctx: SetupContext) => {
      if (!props.value) return h('div')
      let data: Record<string, string> = {}
      try {
        data = JSON.parse(props.value)
      } catch (e) {
        return () => ''
      }
      if (!data.mask) return () => ''

      const content = ref(data.mask),
        state = ref('masked')

      const onIconClick = () => {
        if (!attrs.onDecrypt) return
        if (!props.row) return
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

      return h(Fragment, {}, [
          h('label', {class: 'number'}, content.value.replace(/\*/g, '∗')),
          icon()
        ]
      )
    }, {
    props: {
      value: {
        type: String,
      },
      row: {
        type: Object as PropType<Record<string, any>>,
      },
      index: {
        type: Number,
        require: false,
      }
    }
  })

  return component
}