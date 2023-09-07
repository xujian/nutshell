import { h, ref, defineComponent, Ref } from 'vue'
import { FormItem as AntFormItem, DatePicker } from 'ant-design-vue'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { dateInputProps } from '../../../../components'
import { transformRules } from './rules'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { computed } from 'vue'
import { ComputedRef } from 'vue'
import { FullValidationRule } from '../../../../props/field'

/**
 * Antdv DateInput
 */
export const DateInput = defineComponent({
  name: 'DateInput',
  props: dateInputProps,
  setup: (props, ctx) => {
    const classes = [
      'ns-date-input',
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
    const rules = transformRules(props.rules as FullValidationRule[])
    const value: Ref<Dayjs> = ref<Dayjs>(dayjs(props.modelValue))

    return () => h(AntFormItem, {
      name: props.name,
      class: 'ns-form-item',
      label: props.label,
      rules,
    }, () => h(DatePicker, {
        class: classes,
        visible: visible.value,
        onClose: close,
        locale,
        value: value.value,
        'onUpdate:value': (value: Dayjs) => {
          console.log('2222', value)
          props['onUpdate:modelValue']?.(value.valueOf())
        }
      })
    )
  }
})
