import { h } from 'vue'
import { InputGroup as AntInputGroup } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { inputGroupProps, inputEmits } from '../../../../components/input'
import { marginProps } from '../../../../utils/private/helpers'
import { renderFormItem } from '../../utils'
import { SizeType } from 'ant-design-vue/es/config-provider'

/**
 * Antdv Input Group
 */
export const InputGroup = defineComponent({
  name: 'InputGroup',
  props: {
    ...inputGroupProps,
    ...marginProps
  },
  emits: inputEmits,
  setup: (props, { emit, slots }) => {
    return () =>
      renderFormItem(
        props, slots,
        () => h(AntInputGroup, {
          compact: props.compact || true,
          size: (props.size !== 'xs' ? 'default' : 'small') as SizeType,
        }, slots)
      )
  }
})


