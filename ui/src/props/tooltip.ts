import { PropType, VNode } from 'vue'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'
import { useTippy } from 'vue-tippy'


export type TooltipOptions = {
  content: string
}

const tooltipProps = {
  tooltip: {
    type: [String, Object] as PropType<string | TooltipOptions>
  }
}

export const useTooltipProps = buildProps(tooltipProps)

export type TooltipProps = MakePropsType<typeof tooltipProps>

/**
 * 在
 * @param el
 * @param props
 */
export const makeTooltip = (el: Element, props: TooltipProps) => {
  const options = typeof props.tooltip === 'string'
    ? { content: props.tooltip }
    : props.tooltip
  useTippy(el, options)
}
