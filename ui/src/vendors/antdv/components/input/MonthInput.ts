import {h, ref, defineComponent, Ref, computed, toRaw} from 'vue'
import { FormItem as AntFormItem, DatePicker } from 'ant-design-vue'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { dateInputProps } from '../../../../components'
import { transformRules } from './rules'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { FullValidationRule } from '../../../../props/field'

/**
 * Antdv DateInput
 */
export const MonthInput = defineComponent({
  name: 'MonthInput',
  props: dateInputProps,
  setup: (props, ctx) => {
    const classes = [
      'ns-month-input',
    ].join(' ')
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }
    const rules = transformRules(props.rules as FullValidationRule[])
    const value: Ref<string | Dayjs | undefined> = computed(() => props.modelValue
        ? dayjs(props.modelValue) || dayjs()
        : undefined
      )

    return () => h(AntFormItem, {
      name: props.name,
      class: 'ns-form-item',
      label: props.label,
      rules,
    }, () => h(DatePicker, {
        class: classes,
        visible: visible.value,
        onClose: close,
        picker: 'month',
        placeholder: props.placeholder,
        locale,
        value: value.value ? dayjs(value.value) : void 0,
        getPopupContainer: (triggerNode) => triggerNode.parentNode,
        'onUpdate:value': (value: string | Dayjs) => {
          const val = value === null
            ? ''
            : (typeof value === 'string' ? dayjs(value) : value).format('YYYY-MM')
          props['onUpdate:modelValue']?.(val)
        },
        disabledDate: props.disabledDate,
        disabled: props.disabled ?? false,
      })
    )
  }
})
