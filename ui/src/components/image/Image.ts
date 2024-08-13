import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, computed } from 'vue'
import { buildFillStyle, buildGradientStyle, Color } from '../../composables/theme'
import { buildDesignClasses, buildDesignStyles, buildDesignVariables, buildDimensionStyles, useDesignProps, useDimensionProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'

export const imageProps = {
  src: {
    type: String,
    retuired: true
  },
  ...useDimensionProps(),
  ...useDesignProps(),
}

export type ImageEmits = {
}

const emits: ImageEmits = {
}

export type ImageSlots = {
}

const imageSlots: SlotsType<ImageSlots> = {
}

export type ImageProps = MakePropsType<typeof imageProps, ImageEmits>

/**
 * 图片组件 <ns-image>
 */
export const NsImage = defineComponent({
  name: 'NsImage',
  props: imageProps,
  slots: imageSlots,
  setup (props, { slots }) {

    const style = {
      backgroundImage: `url(${props.src})`,
      ...buildDimensionStyles(props),
      ...buildDesignStyles(props),
    }

    return () => h('div', {
      class: [
        'ns-image',
        ...buildDesignClasses(props),
      ],
      style,
    })
  }
})
