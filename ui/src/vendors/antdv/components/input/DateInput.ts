import {h, ref, defineComponent, Ref, computed, toRaw} from 'vue'
import { DatePicker } from 'ant-design-vue'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { dateInputProps } from '../../../../components'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { FullValidationRule } from '../../../../props/field'
import { renderFormItem } from '../../utils'

/**
 * Antdv DateInput
 */
export const DateInput = defineComponent({
  name: 'DateInput',
  props: dateInputProps,
  setup: (props, ctx) => {
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }
    const value: Ref<string | Dayjs | undefined> = computed(() => props.modelValue
        ? dayjs(props.modelValue) || dayjs()
        : undefined
      )
    return () => renderFormItem(
      props, ctx.slots,
      () => h(DatePicker, {
          visible: visible.value,
          onClose: close,
          placeholder: props.placeholder,
          showTime: props.hasTime,
          locale,
          ...value.value
            ? { value: dayjs(value.value) }
            : {},
          'onUpdate:value': (value: string | Dayjs) => {
            const val = value === null
              ? ''
              : (typeof value === 'string'
                  ? dayjs(value)
                  : value
                ).format(!props.hasTime ? 'YYYY-MM-DD': 'YYYY-MM-DD  HH:mm:ss')
            props['onUpdate:modelValue']?.(val)
          },
          disabledDate: props.disabledDate,
          disabled: props.disabled ?? false,
        })
    )
  }
})
