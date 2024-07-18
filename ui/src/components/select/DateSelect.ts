import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref, onMounted, computed } from 'vue'
import dayjs from 'dayjs'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, useDesignProps, useModelValuePropsForString } from '../../props'
import { NsCard } from '../card'
import { NsRow } from '../flex'

export const dateSelectProps = {
  label: {
    type: String
  },
  ...useModelValuePropsForString(),
  ...useDesignProps(),
}

export type DateSelectEmits = {
}

const dateSelectEmits: DateSelectEmits = {
}

export type DateSelectSlots = {
  default: never,
}

export type DateSelectProps = MakePropsType<typeof dateSelectProps, DateSelectEmits>

export type DateItem = {
  value: dayjs.Dayjs,
  formated: string
 }

/**
 * 日期选择 组件 <ns-date-select>
 */
export const NsDateSelect = defineComponent({
  name: 'NsDateSelect',
  props: dateSelectProps,
  emits: dateSelectEmits,
  setup (props, ctx) {

    const weekdays = '日一二三四五六';
      const scroll = ref<HTMLElement>()

    const previousDays = 30,
      afterDays = 0,
      today: dayjs.Dayjs = dayjs(),
      dates: DateItem[] = []
    let count = 0, stone: dayjs.Dayjs = today
    while (count < previousDays) {
      dates.unshift({
        value: stone,
        formated: stone.format('YYYY-MM-DD')
      })
      stone = stone.subtract(1, 'day')
      count ++
    }

    const onItemClick = (d: DateItem, index: number) => {
      props['onUpdate:modelValue']?.(d.formated)
      if (scroll.value) {
        scroll.value.scrollLeft = (54 + 5) * index
      }
    }

    const selectedIndex = computed(() =>
      dates.findIndex(d => d.formated === props.modelValue) || dates.length - 1
    )

    const items = () => dates.map((d, index) => h(NsCard, {
        class: [
          'item',
          ...[0, 6].includes(d.value.day()) ? ['weekend'] : [],
          props.modelValue === d.formated ? ['active'] : [],
          ...buildDesignClasses(props),
        ],
        fill: '#00000033',
        style: {
          ...buildDesignStyles(props),
        },
        onClick: () => onItemClick(d, index)
      }, {
          default: () => [
            d.value === today ? h('div', {class: ['today']}, '今日') : null,
            h('div', {class: ['date']}, d.value.format('MM-DD')),
            h('div', {class: ['weekday']}, weekdays[d.value.get('day')])
          ]
        }
      )
    )

    const scrollView = () => h('scroll-view', {
      ref: scroll,
      'scroll-x': true,
      'scroll-with-animation': true,
      scrollLeft: selectedIndex.value * (54 + 5),
      class: [
        'date-select-scroll-view',
      ],
    }, h(NsRow, {
          class: [
            'scroll-view-content'
          ],
          gap: 5
        }, {
          default: items
        })
    )

    onMounted(() => {
    })

    return () => h('div', {
      class: [
        'ns-date-select',
      ]
    }, scrollView())
  }
})
