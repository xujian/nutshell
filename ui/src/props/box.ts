import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { isSize, Size } from './size'
import { Dimension } from '../types'
import { MakePropsType } from '../utils'

/**
 * <ns-card padding="xl" ...
 * <ns-card padding="1" ...
 */

const boxProps = {
  padding: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
  paddingInline: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
  paddingBlock: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
  margin: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
  marginInline: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
  marginBlock: {
    type: [Number, String] as PropType<Size | Dimension>,
  },
}

export type BoxProps = MakePropsType<typeof boxProps>

export function buildLength (length: string | number) {
  return typeof length === 'number'
    ? `${length}px`
    : length
}

export const useBoxProps = buildProps(boxProps)

export function buildBoxClasses (props: BoxProps) {
  return [
    ...(props.padding !== void 0 && isSize(props.padding))
      ? [
        `p-${props.padding}`
        ]
      : [],
    ...(props.paddingInline !== void 0 && isSize(props.paddingInline))
      ? [
        `px-${props.paddingInline}`
        ]
      : [],
    ...(props.paddingBlock !== void 0 && isSize(props.paddingBlock))
      ? [
          `py-${props.paddingBlock}`
        ]
      : [],
    ...(props.margin !== void 0 && isSize(props.margin))
      ? [
          `m-${props.margin}`
        ]
      : [],
    ...(props.marginInline !== void 0 && isSize(props.marginInline))
      ? [
          `mx-${props.marginInline}`
        ]
      : [],
    ...(props.marginBlock !== void 0 && isSize(props.marginBlock))
      ? [
          `my-${props.marginBlock}`
        ]
      : [],
  ]
}


export function buildBoxStyles (props: BoxProps) {
  return {
    ...(props.padding !== void 0 && !isSize(props.padding)) && {
      padding: buildLength(props.padding)
    },
    ...(props.paddingInline !== void 0 && !isSize(props.paddingInline)) && {
      paddingInline: buildLength(props.paddingInline)
    },
    ...(props.paddingBlock !== void 0 && !isSize(props.paddingBlock)) && {
      paddingBlock: buildLength(props.paddingBlock)
    },
    ...(props.margin !== void 0 && !isSize(props.margin)) && {
      margin: buildLength(props.margin)
    },
    ...(props.marginInline !== void 0 && !isSize(props.marginInline)) && {
      marginInline: buildLength(props.marginInline)
    },
    ...(props.marginBlock !== void 0 && !isSize(props.marginBlock)) && {
      marginBlock: buildLength(props.marginBlock)
    },
  }
}
