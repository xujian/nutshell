import { PropType, defineComponent, getCurrentInstance, h, onMounted, ref } from 'vue'
import tippy, { type Placement } from 'tippy.js'
import { MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useTriggerProps } from '../../props'

export const popoverProps = {
  ...useModelValuePropsForBoolean(),
  ...useTriggerProps(),
  title: {
    type: String,
    require: false
  },
  content: {
    type: String,
    require: false
  },
  placement: {
    type: String as PropType<Placement>,
    require: false
  },
  trigger: {
    type: String,
    default: 'mouseenter',
  },
}

export type PopoverEmits = {
  mouseleave (): void,
  mouseenter (): void,
  click (): void,
}

const popoverEmits: PopoverEmits = {
  mouseleave () {},
  mouseenter () {},
  click () {},
}

export type PopoverSlots = {
  content: never
  title: never
}

export type PopoverProps = MakePropsType<typeof popoverProps, PopoverEmits>

/**
 *  气泡卡片组件 <ns-popover>
 */
export const NsPopover = defineComponent({
  name: 'NsPopover',
  props: popoverProps,
  emits: popoverEmits,
  setup(props, { slots }) {

    const contentRef = ref()

    onMounted(() => {
      const vm = getCurrentInstance() as any
      const panel = tippy(vm.parent.vnode.el, {
        content: contentRef.value,
        allowHTML: true,
        duration: 300,
        delay: [200, 20_000],
        trigger: props.trigger || 'mouseenter',
        interactive: true,
        theme: 'light',
        placement: props.placement || 'top',
      })
    })

    return () => h('div', {
      class: ['ns-popover-content'],
      ref: contentRef,
    }, {
      default: slots.default
    })
  }
})
