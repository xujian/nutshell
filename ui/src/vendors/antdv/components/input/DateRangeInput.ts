import {h, ref, defineComponent, Ref, computed, toRaw, ComputedRef} from 'vue'
import { FormItem as AntFormItem, RangePicker } from 'ant-design-vue'
import 'dayjs/locale/zh-cn'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { DateRangeInputProps, dataRangeInputEmits, dateRangeInputProps } from '../../../../components'
import { transformRules } from './rules'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { FullValidationRule } from '../../../../props/field'

dayjs.locale('zh-cn')
type DateValue = string | Dayjs

/**
 * 使用 ant-designv-vue 实现日期区间输入框
 */
export const DateRangeInput = defineComponent({
  name: 'DateRangeInput',
  props: dateRangeInputProps,
  emits: dataRangeInputEmits,
  setup: (props, { emit }) => {
    console.log('===DateRangeInput props', props.modelValue)
    const classes = [
      'ns-date-range-input',
    ].join(' ')
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }

    const rules = transformRules(props.rules as FullValidationRule[])

    const value: ComputedRef<[DateValue | undefined, DateValue | undefined]> = computed(() => {
      const [from, to] = props.modelValue || []
      return [
        from
          ? dayjs(from) || dayjs()
          : undefined,
        to
          ? dayjs(to) || dayjs()
          : undefined,
        ]
    })

    return () => h(AntFormItem, {
      name: props.name,
      class: 'ns-form-item',
      label: props.label,
      rules,
    }, () => h(RangePicker, {
        class: classes,
        visible: visible.value,
        onClose: close,
        locale,
        // @ts-ignore
        value: value.value,
        'onUpdate:value': (value: DateValue[]) => {
          const val: string[] = value
            ?  value.map(v => {
              return (typeof v === 'string' ? dayjs(v) : v).format('YYYY-MM-DD')
            })
            : []
          console.log('===onUpdate:value', val, props.onChange)
          props['onUpdate:modelValue']?.(val)
          emit('change', val)
        },
        disabled: props.disabled ?? false,
      })
    )
  }
})
