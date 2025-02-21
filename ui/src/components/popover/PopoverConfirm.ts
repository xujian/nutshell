import { ExtractPublicPropTypes, PropType, defineComponent, getCurrentInstance, h, onMounted, ref, watch } from 'vue'
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
    default: 'click',
  },
  onOk: Function,
  onCancel: Function
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
 *  气泡确认组件 <ns-popover-confirm>
 */
export const NsPopoverConfirm = defineComponent({
  name: 'NsPopoverConfirm',
  props: popoverConfirmProps,
  emits: popoverConfirmEmits,
  setup(props, { slots, emit }) {

    const contentRef = ref()
    let panel: any

    onMounted(() => {
      const vm = getCurrentInstance() as any
      panel = tippy(vm.parent.vnode.el, {
        content: contentRef.value,
        allowHTML: true,
        duration: 300,
        delay: [200, 20_000],
        trigger: props.trigger || 'click',
        interactive: true,
        offset: [0, 15],
        theme: 'light',
        placement: props.placement || 'top',
        onShow: () => {
          props['onUpdate:modelValue']?.(true)
        },
        onHide: () => {
          props['onUpdate:modelValue']?.(false)
        }
      })
    })

    watch(() => props.modelValue, () => {
      if (props.modelValue) {
        panel?.show()
      } else {
        panel?.hide()
      }
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
          variant: 'outlined',
          label: '取消',
          onClick: async () => {
            if (props?.onCancel) {
              await props?.onCancel()
            } else {
              emit('cancel')
            }
            panel?.hide()
          }
        }),
        h(NsButton, {
          class: ['button-ok'],
          size: 'xs',
          color: 'primary',
          label: '确定',
          onClick: async () => {
            if (props?.onOk) {
              await props?.onOk()
            } else {
              emit('ok')
            }
            panel?.hide()
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
      }),
      title = () => h('div', {
        class: [
          'ns-popover-title',
          'p-sm'
        ]
      }, {
        default: slots.title
          ? slots.title
          : () => props.title
      })

    const confirm = () => h('div', {
      class: [
        'confirm',
      ]
    }, [
      title(),
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

