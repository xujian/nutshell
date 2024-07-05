import { CascadingSelectOption, cascadingSelectProps } from '../../../../components/select'
import { computed, defineComponent, h, ref, watch } from 'vue'
import { renderFormItem } from '../../utils'

export type RangeItem = {
  id: string,
  name: string,
}

export const CascadingSelect = defineComponent({
  name: 'NutuiCascadingSelect',
  props: cascadingSelectProps,
  setup(props, ctx) {

    const range = ref<RangeItem[][]>([])
    const pickerValue = ref<number[]>(Array(props.columns).fill(0))

    const onChange = ({detail}: any) => {
      const idValue: string[] = detail.value.map((x: number, index: number) => range.value[index][x].id)
      props['onUpdate:modelValue']?.(idValue)
    }

    /**
     * 单列滑动时的处理
     * 需要更换右侧列的数据
     */
    const onColumnChange = ({ detail: { column, value} }: any) => {
      pickerValue.value[column] = value
      // 滑动列右侧的列都要归零
      Array(props.columns - column - 1).forEach((_, index) => {
          pickerValue.value[column + index + 1] = 0
        })
      console.log('===pickerValue', pickerValue.value)
      // 滑动的是最右侧列 什么也不干
      if (column === props.columns - 1) return
      // 从原始 options (树型结构) 取出当前子节点
      // 找到当前列选中值在树型结构对应的节点
      let node: CascadingSelectOption | undefined = props.options?.[pickerValue.value[0]]
      Array(column).forEach((_, index) => { // 按照路径寻址
        node = node?.children?.[pickerValue.value[index + 1]]
      })
      // a, b, c 三列
      // 计算下一列的新数据
      const current = range.value[column][value]!
      let result = [...range.value]
      // 右侧的列更换新数据 (有几个换几个)
      Array(props.columns - column - 1).fill('').forEach((_, index) => {
        // 下一列全换
        result.splice(column + index + 1, 1, map(node?.children || []))
        node = node?.children?.[index === 0 ? value : 0]
      })
      range.value = result
    }

    // 格式(字段)转换
    const map = (children: CascadingSelectOption[]) =>
      children.map(d => ({ id: `${d.value}`, name: `${d.label}` }))
    /**
     * 获得全体选项后计算出初始值
     */
    const initOptions = () => {
      const data = props.options
      // 从 props.options 树型结构计算出初始的二维数组结构
      // 列数基于树型结构的最大深度
      if (!data) return []
      let children: CascadingSelectOption[] = data
      const result: RangeItem[][] = [];
      [1, 2, 3, 4, 5, 6].forEach(t => {
        if (props.columns >= t) {
          result.push(map(children))
          let index = children.findIndex(item => item.value === props.modelValue[t - 1])
          if (index === -1) {
            index = 0
          }
          pickerValue.value[t - 1] = index
          children = children[index].children || []
        }
      })
      range.value = result
    }

    watch(() => props.options, initOptions)

    const display = computed(() =>
      range.value.map((column, index) =>
        column[pickerValue.value[index]].name).join('/')
    )

    return () => renderFormItem(props, ctx.slots,
      () =>
        h('picker', {
          class: ['multiple', 'picker'],
          mode: 'multiSelector',
          value: pickerValue.value,
          range: range.value,
          rangeKey: 'name',
          onChange: onChange,
          bindcolumnchange: onColumnChange,
          onColumnchange: onColumnChange
        },
        [
          h('div', {
            class: ['value-display', 'flex', 'align-center', 'justify-end']
          }, [
            h('div', {
              class: ['value']
            }, display.value || props.placeholder),
            h('i', { class: ['icon', 'ns-icon-up-down-arrow-head'] })
          ])
        ])
      )
  }
})
