import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref, onMounted } from 'vue'
import { type MakePropsType } from '../../utils'
import { useDataProps } from '../../props'
import { Vendor } from '../../shared'

export const lineChartProps = {
  ...useDataProps(),
}

export type LineChartEmits = {
}

const lineChartEmits: LineChartEmits = {
}

export type LineChartSlots = {
  default: never,
}

export type LineChartProps = MakePropsType<typeof lineChartProps, LineChartEmits>

/**
 *  组件 <ns-line-chart>
 */
export const NsLineChart = defineComponent({
  name: 'NsLineChart',
  props: lineChartProps,
  emits: lineChartEmits,
  setup (props, ctx) {
    const canvas = ref<HTMLCanvasElement>()

    onMounted(() => {
      const vendor = new Vendor(canvas.value!, props)
      vendor.draw()
    })

    return () => h('canvas', {
      ref: canvas,
      class: ['ns-plot']
    })
  }
})

