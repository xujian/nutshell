import { defineComponent, h, PropType, VNode } from 'vue'
import { useGapProps, buildGapStyles } from '../../props/gap'
import { useBoxProps, buildBoxStyles } from '../../props/box'
import { useDimensionProps, buildDimensionStyles } from '../../props/dimension'
import { useDesignProps, buildDesignStyles } from '../../props/design'
import { MakePropsType } from '../../utils/private/helpers'

// 用法
// <ns-grid :columns="12" :rows="12" gap>

const gridProps = {
  ...useGapProps(),
  ...useBoxProps(),
  ...useDimensionProps(),
  ...useDesignProps(),
  /**
   * grid-template-columns
   */
  columns: {
    type: [String, Number] as PropType<string | number>,
    default: undefined
  },
  /**
   * grid-template-rows
   */
  rows: {
    type: [String, Number] as PropType<string | number>,
    default: undefined
  },
  /**
   * grid-auto-flow
   */
  flow: {
    type: String as PropType<'row' | 'column' | 'dense' | 'row dense' | 'column dense'>,
    default: 'row'
  }
}

export type GridProps = MakePropsType<typeof gridProps>

/**
 * 实现 CSS Grid 结构
 * 与 <ns-row> 和 <ns-column> 互补
 * 方便控制列、行与间距
 */
export const NsGrid = defineComponent({
  name: 'NsGrid',
  props: gridProps,
  setup(props, { slots }) {
    
    const items = slots.default?.() as VNode[]

    /**
     * 用法
     * 1. <ns-grid :columns="2">
     *    => <div class="ns-grid" style="--columns: repeat(2, 1fr);">
     * 
     **/
    const columns = 
      props.columns
        ? typeof props.columns === 'number'
          ? `repeat(${props.columns}, 1fr)`
          : props.columns
        : undefined

    const rows = 
      props.rows
        ? typeof props.rows === 'number'
          ? `repeat(${props.rows}, 1fr)`
          : props.rows
        : props.columns
          ? typeof props.columns === 'number'
            // 根据子节点数量及列数计算行数
            // 可以省略 rows 属性
            ? `repeat(${Math.ceil(items.length / props.columns)}, 1fr)`
            : `repeat(2, 1fr)`
          : undefined

    return () => h('div', {
      class: [
        'ns-grid',
        // add more classes if needed
      ],
      style: {
        '--columns': columns,
        '--rows': rows,
        gridAutoFlow: props.flow,
        ...buildGapStyles(props),
        ...buildBoxStyles(props),
        ...buildDimensionStyles(props),
        ...buildDesignStyles(props),
      }
    }, items.map(item => h('div', {
      class: 'ns-grid-item',
    }, item)))
  }
})
  