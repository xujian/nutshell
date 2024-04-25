import { h } from 'vue'
import { defineComponent } from 'vue'
import { marginProps } from '../../../../utils/private/helpers'
import { amountChinese, amountFormatter } from '../../../../composables/amount'
import { renderFormItem } from '../../utils'
import { textProps } from '../../../../components/text'

/**
 * Text
 */
export const Text = defineComponent({
  name: 'Text',
  props: {
    ...textProps,
    ...marginProps
  },
  setup: (props, { slots }) => {
    return () =>
      renderFormItem(props, slots, () => [
        h('div', { class: 'ns-text-content' }, [
          h(
            'div',
            { class: 'ns-text-content-text' },
            props.hasAmount ? amountFormatter(String(props.modelValue)) : props.modelValue
          ),
          slots.append ? slots.append() : null
        ]),
        props.hasAmount
          ? h(
              'div',
              { class: 'ns-number-amount' },
              amountChinese(Number(props.modelValue) * props.amountRate)
            )
          : null
      ])
  }
})
