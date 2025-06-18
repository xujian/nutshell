import { defineComponent, h, Ref, ref } from 'vue'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useSelectable } from '../../../../props'
import { NsEmpty } from '../../../../components/empty'
import { repeatorEmits, repeatorProps } from '../../../../components/repeator'
import { useGrouping } from '../../../../props'
/**
 * 连续平铺组件 <ns-repeator>
 */
export const Repeator = defineComponent({
  name: 'NutuiRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots, emit }) {

    const { groups, hasGroups } = useGrouping(props.data, props.groupBy)
    const { isSelecting, selected, toggleSelected, isSelected } = 
      useSelectable(props, emit)

    const refs: Ref[] = props.data.map((item) => ref())

    const classes = [
      'ns-repeator-item',
      'selectable-item',
      'flex-item',
      'align-center',
      ...buildDesignClasses(props),
    ]

    const onOpen = (index: number) => {
      refs.forEach((r, i) => {
        if (i !== index) {
          r.value?.close()
        }
      })
    }

    const swipe = (data: any, index: number) => h('div', {
        class: [
          'row', 'repeator-swipe'
        ],
        style: buildDesignStyles(props),
        key: data.id || index
      }, h(NutSwipe, {
            class: ['swipe'],
            ref: refs[index],
            disabled: data.swipable === false,
            onOpen: () => {
              onOpen(index)
            }
          }, {
            default: () => slots.default?.(data),
            right: () => slots.swipe?.(data)
          })
      )
    
    const item = (data: any, key: string, index: number) => h('div', {
      class: [
        ...classes,
        isSelected(data)
          ? ['selected']
          : []
      ],
      style: {
        ...buildDesignStyles(props),
      },
      key: data.id || index,
      onClick: () => {
        toggleSelected(data)
      }
    }, slots.default?.(data))
    
    const row = (data: any, key: string, index: number) => 
      props.swipable !== false
        ? swipe(data, index)
        : item(data, key, index)

    const content = () => hasGroups.value
      ? groups?.value?.map(
        ({ name, items }, index: number) => [
          h('div', { 
            class: ['group-header'],
          }, name),
          ...items.map((item, i) => row(item, `${index}-${i}`, index))
        ])
      : props.data.map((item, index) => row(item, `${index}`, index))


    return () => h('div', {
      class: [
        'ns-repeator',
        'ns-selectable',
        ...isSelecting.value ? ['selecting'] : [],
        `select-type-${props.selectType}`,
        props.direction === 'row' ? 'row' : 'column',
        ...props.divides ? ['has-divides'] : [],
        ...buildFlexClasses(props),
        ...props.swipable ? ['swipable'] : [],
        ...props.seperator
          ? ['has-seperator']
          : [],
      ],
      style: {
        ...buildFlexStyles(props),
        '--divides': props.divides,
        ...props.seperator
          ? {
            '--seperator': typeof props.seperator === 'boolean'
              ? 'var(--ns-stroke)'
              : makeColor(props.seperator)
          }
          : {},
      }
    }, {
      default: () => props?.data?.length
        ? content()
        : h(NsEmpty)
    })
  }
})
