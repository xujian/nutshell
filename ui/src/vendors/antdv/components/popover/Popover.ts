import { h, SetupContext } from 'vue'
import { Popover as AntdvPopover } from 'ant-design-vue'
import { PopoverProps } from '../../../../components'
import { NsList } from '../../../../components'

export const Popover = (props: PopoverProps, cxt: SetupContext) => {
  // console.log('vendors/Popover', props)

  return h(
    AntdvPopover,
    {
      'overlay-class-name': 'ns-popover',
      content: props.content,
      title: props.title,
      trigger: props.trigger || 'hover',
      placement: props.position || 'top',
      open: props.modelValue,
      'onUpdate:open': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      }
    },
    {
      default: cxt.slots.default,
      title: cxt.slots.title,
      content: !props.list ? cxt.slots.content : h(NsList, { data: props.list })
    }
  )
}
// + import => ./index.ts, ../components.ts
