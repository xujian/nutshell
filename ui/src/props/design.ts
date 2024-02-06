import { PropType } from 'vue'
import { Color, GradientString, buildFillStyle, buildGradientStyle } from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  /**
   * 渐变
   */
  gradient: {
    type: String as PropType<GradientString>,
  },
}

export type DesignProps = MakePropsType<typeof designProps>

const buildDesignStyles = (props: DesignProps) => {
  const style = {
    ...props.fill ? buildFillStyle(props.fill) : {},
    ...buildGradientStyle(props.gradient)
  }
  return style
}

const useDesignProps = buildProps(designProps)

export {
  buildDesignStyles,
  useDesignProps,
}
