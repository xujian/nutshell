import { PropType, SlotsType, defineComponent, h } from 'vue'
import { buildDesignClasses, buildDesignStyles, buildDimensionStyles, useDesignProps, useDimensionProps } from '../../props'
import { MakePropsType } from '../../utils'

/**
 * 图片填充方式
 */
export type ImageFit = 'contain' | 'cover'
/**
 * 图片垂直方向浮动
 */
export type ImageFloat = 'top' | 'center' | 'bottom'
/**
 * 图片水平方向浮动
 */
export type ImageDrift = 'left' | 'center' | 'right'

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
    type: [Number, String]
  },
  fit : {
    type: String as PropType<ImageFit>,
  },
  float: {
    type: String as PropType<ImageFloat>
  },
  drift: {
    type: String as PropType<ImageDrift>
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

/*
 * 图片组件用 background-image 实现
 * 可以方便地控制图片的尺寸、比例、viewport
 * /

/**
 * 图片组件 <ns-image>
 */
export const NsImage = defineComponent({
  name: 'NsImage',
  props: imageProps,
  slots: imageSlots,
  setup (props, { slots }) {

    const style = () => ({
      backgroundImage: `url(${props.src})`,
      ...buildDimensionStyles(props),
      ...buildDesignStyles(props),
      ...props.aspectRatio
        ? { '--aspect-ratio': props.aspectRatio }
        : {},
      backgroundSize: props.fit || 'cover',
      backgroundPosition: `${props.drift || 'center'} ${props.float || 'center'}`
    })

    return () => h('div', {
      class: [
        'ns-image',
        ...buildDesignClasses(props),
        ...props.squared === true
          ? ['squared']
          : []
      ],
      style: style(),
    })
  }
})
