import { h, SetupContext } from 'vue'
import { Popover as AntdvPopover } from 'ant-design-vue'
import { PopoverProps } from '../../../../components'
import { useUpdateModelOpen } from '../../../../props/model'
import { NsList } from '../../../../components'

export const Popover = (props: PopoverProps, { slots }: SetupContext) => {
  // console.log('vendors/Popover', props)

  return h(
    AntdvPopover,
    {
      'overlay-class-name': 'ns-popover',
      content: props.content,
      title: props.title,
      trigger: props.trigger || 'hover',
      placement: props.placement,
      ...useUpdateModelOpen(props)
    },
    {
      default: slots.default,
      title: slots.title,
      content: !props.list ? slots.content : h(NsList, { data: props.list })
    }
  )
}
// + import => ./index.ts, ../components.ts
