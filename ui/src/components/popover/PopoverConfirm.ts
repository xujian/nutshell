import { ExtractPublicPropTypes, PropType, defineComponent, getCurrentInstance, h, onMounted, ref } from 'vue'
import tippy, { type Placement } from 'tippy.js'
import { MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean } from '../../props'
import { NsButton } from '../button'

export const popoverConfirmProps = {
  ...useModelValuePropsForBoolean(),
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

export type PopoverConfirmEmits = {
  ok (): void,
  cancel (): void,
}

const popoverConfirmEmits: PopoverConfirmEmits = {
  ok () {},
  cancel () {}
}

export type PopoverConfirmSlots = {
  content: never
  title: never
}

export type PopoverConfirmProps = MakePropsType<typeof popoverConfirmProps, PopoverConfirmEmits>

/**
 *  组件 <ns-popover-confirm>
 */
export const NsPopoverConfirm = defineComponent({
  name: 'NsPopoverConfirm',
  props: popoverConfirmProps,
  emits: popoverConfirmEmits,
  setup(props, { slots, emit }) {

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

    const buttons = () => h('div', {
        class: [
          'row',
          'align-center',
          'justify-end',
          'buttons'
        ]
      }, [
        h(NsButton, {
          class: ['button-cancel'],
          size: 'xs',
          color: 'neutral',
          label: '取消',
          onClick () {
            emit('cancel')
          }
        }),
        h(NsButton, {
          class: ['button-ok'],
          size: 'xs',
          color: 'primary',
          label: '确定',
          onClick () {
            emit('ok')
          }
        })
      ]),
      content = () => h('div', {
        class: [
          'content',
          'p-sm'
        ]
      }, {
        default: slots.default
          ? slots.default
          : () => props.content
      })

    const confirm = () => h('div', {
      class: [
        'confirm',
      ]
    }, [
      content(),
      buttons()
    ])

    return () => h('div', {
      class: [
        'ns-popover-content',
        'ns-popover-confirm-content',
      ],
      ref: contentRef,
    }, [
      confirm()
    ])
  }
})

