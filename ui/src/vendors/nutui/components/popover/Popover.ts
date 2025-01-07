import { computed, defineComponent, h, onUnmounted, ref } from 'vue'
import { popoverEmits, popoverProps } from '../../../../components'
import { buildDesignClasses, buildDesignStyles } from '../../../../props'

export const Popover = defineComponent({
  name: 'NutuiPopover',
  props: popoverProps,
  emits: popoverEmits,
  setup (props, { slots, emit }) {
    console.log('===popover1 props', props)
    const open = ref(false)
    const parent = usePopoverHost()
    const $bus = useBus()

    parent.classes.push('has-popover')

    const classes = computed(() => [
      ...buildDesignClasses(props),
      ])

    const popup = () => h('div', {
      class: [
        'popup',
        ...classes.value,
      ],
      style: {
        ...buildDesignStyles(props),
      }
    }, slots)

    const onPageClick = () => {
      open.value = false
    }

    onUnmounted(() => {
      $bus.off('page.click', onPageClick)
    })

    $bus.on('page.click', onPageClick)

    return () => h('div', {
        class: [
          ...open.value ? ['popover-open'] : []
        ],
        onClick: (e) => {
          open.value = true
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      }, popup())
    }
})

