import { CascadingSelectOption, cascadingSelectProps } from '../../../../components/select'
import { defineComponent, h, ref, watch } from 'vue'
import { renderFormItem } from '../../utils'

export type RangeItem = {
  id: string,
  name: string,
}

export const CascadingSelect = defineComponent({
  name: 'NutuiCascadingSelect',
  props: cascadingSelectProps,
  setup (props, ctx) {
    const range = ref<RangeItem[][]>([])
    const picked = ref<number[]>(Array(props.columns).fill(0)),
      // 临时选中状态
      picking = ref<number[]>(Array(props.columns).fill(0))
    const display = ref('')

    const onChange = ({detail}: any) => {
      picked.value = picking.value
      updateDisplay()
      const idValue: string[] = detail.value.map(
        (x: number, index: number) => range.value[index][x].id
      )
      props['onUpdate:modelValue']?.(idValue)
    }

    /**
     * 单列滑动时的处理
     * 需要更换右侧列的数据
     */
    const onColumnchange = ({ detail: { column, value} }: any) => {
      const pickingValue = [...picking.value]
      pickingValue[column] = value
      pickingValue.splice( // 右侧所有列都归零
        column + 1,
        props.columns - column - 1,
        ...Array(props.columns - column - 1).fill(0))
      picking.value = pickingValue
      if (column === props.columns - 1) return
      // 从原始 options (树型结构) 取出当前子节点
      // 找到当前列选中值在树型结构对应的节点
      let node: CascadingSelectOption | undefined = props.options?.[pickingValue[0]]
      Array(column).fill(0).forEach((_, index) => { // 按照路径寻址
        node = node?.children?.[pickingValue[index + 1]]
      })
      const result = [...range.value]
      // 右侧的列更换新数据 (有几个换几个)
      Array(props.columns - column - 1).fill(0).forEach((_, index) => {
        result[column + index + 1] = map(node?.children || [])
        node = node?.children?.[0]
      })
      range.value = result
    }

    const onCancel = () => {
      picking.value = picked.value
      initOptions()
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
      let pickedValue = picked.value
      const result: RangeItem[][] = [];
      [1, 2, 3, 4, 5, 6].forEach(t => {
        if (props.columns >= t) {
          result.push(map(children))
          let index = children.findIndex(item => item.value === props.modelValue[t - 1])
          if (index === -1) {
            index = 0
          }
          pickedValue[t - 1] = index
          children = children[index].children || []
        }
      })
      picking.value = picked.value = pickedValue
      range.value = result
      updateDisplay()
    }

    watch(() => props.options, initOptions)

    const updateDisplay = () => {
      let names = range.value.map(
          (column, index) => column[picked.value[index]].name
        ),
        length = names.reduce((l, item) => l + item.length, 0)
        // 超长处理
        if (length > 13) {
          names = names.map(n => n.length > 5
              ? n.slice(0, 2) + '...'
              : n
          )
        }
      display.value = names.join('/')
    }

    return () => renderFormItem(props, ctx.slots,
      () =>
        h('picker', {
          class: ['multiple', 'picker'],
          mode: 'multiSelector',
          value: picking.value,
          range: range.value,
          rangeKey: 'name',
          onChange,
          onColumnchange,
          onCancel
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
