import { SlotsType, defineComponent, h } from 'vue'
import { buildDesignClasses, buildDesignStyles, buildDimensionStyles, useDesignProps, useDimensionProps } from '../../props'
import { MakePropsType } from '../../utils'

export const imageProps = {
  src: {
    type: String,
    retuired: true
  },
  /**
   * 正方形
   */
  squared: {
    type: Boolean
  },
  aspectRatio: {
    type: String
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
      ...props.aspectRatio
        ? { '--aspect-ratio': props.aspectRatio }
        : {}
    }

    return () => h('div', {
      class: [
        'ns-image',
        ...buildDesignClasses(props),
        ...props.squared === true
          ? ['squared']
          : []
      ],
      style,
    })
  }
})
