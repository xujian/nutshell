import { AllowedComponentProps, ComponentObjectPropsOptions,
  ExtractPropTypes, ExtractPublicPropTypes,
  ObjectEmitsOptions, PropType, Ref } from 'vue'

export type StyleObject = Record<string, string | number>
/**
 * 传给 vendor 的属性里加了一些字段
 */
export type MarginProps = {
  classes?: string[],
  styles?: StyleObject,
  structured?: boolean,
  vendorRef?: Ref,
}

export type WithMarginProps<T = {}> = T & MarginProps

export const marginProps = {
  classes: {
    type: Array as PropType<string[]>,
    default: []
  },
  styles: {
    type: Object as PropType<StyleObject>,
  },
  vendorRef: {
    type: Object as PropType<Ref>,
  },
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
