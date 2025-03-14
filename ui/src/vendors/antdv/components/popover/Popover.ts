import { defineComponent, getCurrentInstance, h, onMounted, ref, SetupContext } from 'vue'
import { popoverProps, PopoverProps } from '../../../../components'
import tippy, { type Placement } from 'tippy.js'

export const Popover = defineComponent({
  name: 'AntdvPopover',
  props: popoverProps,
  setup (props: PopoverProps, { slots }: SetupContext) {

    const contentRef = ref()

    onMounted(() => {
      const vm = getCurrentInstance() as any,
        parent = vm.parent.parent.parent
      const panel = tippy(parent.vnode.el, {
        content: contentRef.value,
        allowHTML: true,
        duration: 300,
        delay: [200, 20_000],
        trigger: props.trigger || 'mouseenter',
        interactive: true,
        theme: props.light ? 'light' : 'dark',
        // @ts-ignore
        placement: props.placement || 'top' as Placement,
        appendTo: document.body,
        popperOptions: {
          strategy: 'fixed'
        }
      })
    })

    return () => h('div', {
      class: ['ns-popover-content'],
      ref: contentRef,
    }, [
      h('div', {
        class: ['ns-popover-title'],
      }, props.title),
      slots.default?.()
    ])
  }
})
