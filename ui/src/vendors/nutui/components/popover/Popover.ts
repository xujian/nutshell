import { computed, defineComponent, h, onUnmounted, ref, SetupContext } from 'vue'
import { PopoverProps } from '../../../../components'
import { buildDesignClasses, buildDesignStyles } from '../../../../props'

export const Popover = defineComponent({
  setup: (
    props: PopoverProps,
    { slots, emit }: SetupContext
  ) => {

    const open = ref(false)
    const parent = usePopoverHost()
    const $bus = useBus()

    parent.classes.push('has-popover')

    const classes = computed(() => [
      ...buildDesignClasses(props),
        'ns-popover-place-holder',
        ...open.value ? ['popover-open'] : []
      ])

    const popup = () => h('div', {
      class: [
        'popup'
      ]
    }, slots)

    const onPageClick = () => {
      open.value = false
    }

    onUnmounted(() => {
      $bus.off('page.click', onPageClick)
    })

    $bus.on('page.click', onPageClick)

    return () => h('div', {
        class: classes.value,
        style: buildDesignStyles(props),
        onClick: (e) => {
          open.value = true
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      }, popup())
    }
})

