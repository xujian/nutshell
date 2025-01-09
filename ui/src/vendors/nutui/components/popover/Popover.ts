import { computed, defineComponent, h, onUnmounted, ref, SetupContext, useAttrs } from 'vue'
import { popoverProps, popoverEmits, type PopoverProps } from '../../../../components/popover'
import { buildDesignClasses, buildDesignStyles } from '../../../../props'
import { MarginProps, marginProps } from '../../../../utils'

export const Popover = defineComponent({
  name: 'NutuiPopover',
  props: {
    ...popoverProps,
    ...marginProps,
  },
  emits: popoverEmits,
  setup (props: PopoverProps & MarginProps, { slots, emit }: SetupContext) {
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
          ...open.value ? ['popover-open'] : [],
        ],
        onClick: (e) => {
          open.value = true
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      }, popup())
  }
})
