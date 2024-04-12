import { h, onUpdated, ref, SetupContext } from 'vue'
import { Popover as AntdvPopover } from 'ant-design-vue'
import { PopoverProps } from '../../../../components'
import { NsMenu } from '../../../../components'
import { MenuInfo } from 'ant-design-vue/es/menu/src/interface'

export const Popover = (props: PopoverProps, cxt: SetupContext) => {

  return h(
    AntdvPopover,
    {
      'overlay-class-name': ['ns-popover', props.className].join(' '),
      content: props.content,
      title: props.title,
      trigger: props.trigger || 'hover',
      placement: props.position || 'top',
      open: props.modelValue,
      'onUpdate:open': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      },
      // onMouseenter: () => {
      //   if (props.trigger === 'hover' && !props['onUpdate:modelValue']) {
      //     props.modelValue = true
      //   }
      // },
    },
    {
      default: cxt.slots.default,
      title: cxt.slots.title,
      content: !props.items
        ? cxt.slots.content
        : h(NsMenu, {
            items: props.items,
            onClick: (e: MenuInfo) => {
              cxt.emit('item-click', e)
            }
          })
    }
  )
}
// + import => ./index.ts, ../components.ts
