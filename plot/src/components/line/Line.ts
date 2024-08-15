import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref, onMounted } from 'vue'
import { Color } from '@uxda/nutshell'
import { random, type MakePropsType } from '../../utils'
import { useDataProps } from '../../props'
import { Vendor } from '../../shared'

export const lineChartProps = {
  colors: {
    type: Array as PropType<Color[]>,
    default: [
      '#003f5c',
      '#ffa600',
      '#955196',
      '#dd5182',
      '#ff6e54',
      '#444e86',
    ]
  },
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
    const container = ref<HTMLDivElement>(),
      id = random()

    onMounted(() => {
      console.log('===canvas===', container.value)
      const vendor = new Vendor(container.value!, props)
      vendor.draw()
    })

    return () => h('div', {
        ref: container,
        class: [
          'ns-plot', 'fit'
        ],
        id: `line-chart-${id}`,
      },
      h('canvas', {
        class: ['canvas'],
        type: '2d',
        style: {
          heigh: '100%',
          width: '100%'
        }
      }
    ))
  }
})

