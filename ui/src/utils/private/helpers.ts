import { AllowedComponentProps, ComponentObjectPropsOptions, ComponentPropsOptions, EmitsOptions, ExtractPropTypes, ExtractPublicPropTypes, ObjectEmitsOptions, PropType, Ref } from 'vue'
import { Prettify, LooseRequired } from '@vue/shared'

export type StyleObject = Record<string, string | number>
/**
 * 传给 vendor 的属性里加了一些字段
 */
export type MarginProps = {
  classes?: string[],
  style?: StyleObject,
  vendorRef?: Ref,
}

export type WithMarginProps<T = {}> = T & MarginProps

export const marginProps = {
  classes: {
    type: Array as PropType<string[]>,
    default: []
  },
  vendorRef: null,
}

export type EmitsToProps<T extends ObjectEmitsOptions> = {
  [K in `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
    ? T[Uncapitalize<C>] extends null
      ? (...args: any[]) => any
      : (...args:  // extract args from given function
          T[Uncapitalize<C>] extends (...args: infer P) => any
            ? P
            : any
        ) => any
    : never
}

export type ResolveProps<
  PropsOrPropOptions,
  Emits extends ObjectEmitsOptions
> = Readonly<
    PropsOrPropOptions extends ComponentObjectPropsOptions
      ? ExtractPropTypes<PropsOrPropOptions>
      : PropsOrPropOptions
  > & (
    {} extends Emits
      ? {}
      : EmitsToProps<Emits>
  )


  /**
   * 将 PropsOptions 转换为组件属性的 type
   * 并加上 Emits 事件属性
   * 以及组件的通用属性
   */
  export type MakePropsType<
    PropsOptions extends ComponentObjectPropsOptions,
    Emits extends ObjectEmitsOptions = {}
  > = ExtractPublicPropTypes<PropsOptions>
      & EmitsToProps<Emits>
      & AllowedComponentProps
      & MarginProps
