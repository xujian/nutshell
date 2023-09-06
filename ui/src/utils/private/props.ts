import type { ComponentObjectPropsOptions, Prop, PropType } from 'vue'

/**
 * 组件的属性
 * 拷的 from vuetify/propsFactory()
 */
export function buildProps<
  PropsOptions extends ComponentObjectPropsOptions
> (props: PropsOptions) {
  return <Defaults extends PartialPropValues<PropsOptions> = {}>(   
    defaults?: Defaults
  ): PropsOptions => {
    return Object.keys(props).reduce<any>((result, name) => {
      const definition = props[name]
      if (defaults && name in defaults) {
        result[name] = {
          ...definition,
          default: defaults[name],
        }
      } else {
        result[name] = definition
      }
      return result
    }, {})
  }
}

type PartialPropValues<T extends ComponentObjectPropsOptions> = {
  [P in keyof T]?: PropType<T[P]>
}