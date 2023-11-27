import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export type EmptyModeType =
  | 'data'
  | 'search'
  | 'notice'
  | 'record'
  | 'network'
  | 'loading'
  | 'permission'
  | '404'

export type EmptySizeType = 'sm' | 'md' | 'lg'

export const emptyProps = {
  mode: {
    type: String as PropType<EmptyModeType>,
    required: false,
    default: 'data'
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  size: {
    type: String as PropType<EmptySizeType>
  }
}

export type EmptyEmits = {}

const Emits: EmptyEmits = {}

export type EmptySlots = {
  /** 描述内容 **/
  description: never
  /** 图片 **/
  image: never
}

export type EmptyProps = MakePropsType<typeof emptyProps, EmptyEmits>

/**
 * Empty 组件 <ns-empty>
 */
export const NsEmpty = define({
  name: 'NsEmpty',
  props: emptyProps,
  emits: Emits,
  setup(props, ctx) {
    return {}
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
