import { h, VNode } from 'vue'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

export const titleProps = {
  /**
   * 大标题
   */
  title: {
    type: String,
  },
  /**
   * 副标题
   */
  caption: {
    type: String,
  },
}

/**
 * 大标题及副标题
 */
export type TitleProps = MakePropsType<typeof titleProps>

/**
 * 给组件加上标题属性
 */
export const useTitleProps = buildProps(titleProps)

export type UseTitleFunction = (props: TitleProps) => () => VNode

/**
 * 给实现了 useTItleProps 的组件加上一致的标题结构
 * 一致的 .title>.h5结构
 * @param props
 * @returns
 */
export const useTitle: UseTitleFunction = (props: TitleProps) => {
  return () => {
    return h('div', {
        class: ['title', 'column'],
      }, [
        props.title
          ? h('h5', {
              class: ['h5'],
            }, props.title)
          : null,
        props.caption
          ? h('h6', {
              class: ['caption', 'h6'],
            }, props.caption)
          : null
      ]
    )
  }
}
