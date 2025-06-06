import { h, ref, defineComponent, computed, ComputedRef } from 'vue'
import { RangePicker } from 'ant-design-vue'
import { monthRangeInputEmits, monthRangeInputProps } from '../../../../components'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { renderFormItem } from '../../utils'

type DateValue = string | Dayjs

/**
 * 使用 ant-designv-vue 实现日期区间输入框
 */
export const MonthRangeInput = defineComponent({
  name: 'MonthRangeInput',
  props: monthRangeInputProps,
  emits: monthRangeInputEmits,
  setup: (props, { emit, slots }) => {
    dayjs.locale('zh-cn')
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }

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

    const formItem = ref(null)

    return () => renderFormItem(props, slots, () => h(RangePicker, {
        ref: formItem,
        picker: 'month',
        visible: visible.value,
        onClose: close,
        // @ts-ignore
        value: value.value,
        'onUpdate:value': (value: DateValue[]) => {
          const val: [string | undefined, string | undefined] = value
            ?  value.map(v => {
                return (typeof v === 'string' ? dayjs(v) : v).format('YYYY-MM-DD')
              }) as [string, string]
            : [undefined, undefined]
          props['onUpdate:modelValue']?.(val)
          emit('change', val)
        },
        disabled: props.disabled ?? false,
        ...props.inside
           ? {
              // @ts-ignore
              getPopupContainer: (element) => {
                return element.parentElement
              }
            }
          : {}
      })
    )
  }
})
