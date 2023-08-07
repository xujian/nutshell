import { useProvider } from '../../shared'
import { ComponentObjectPropsOptions, ComponentOptionsMixin, 
  ComponentOptionsWithObjectProps, ComponentPropsOptions, 
  ComputedOptions, DefineComponent, 
  ExtractDefaultPropTypes, ExtractPropTypes, 
  MethodOptions, EmitsOptions, SetupContext, SlotsType, ObjectEmitsOptions } from 'vue'
import { ref, h } from 'vue'
import { defineComponent } from 'vue'

export type ComponentOptions<
  Props,
  Emits extends EmitsOptions = {},
  Slots extends SlotsType = {}
> = ComponentOptionsWithObjectProps<
  ComponentObjectPropsOptions<Props>, {}, {}, {}, {}, {}, {}, Emits, string, {}, string, Slots, Props
>

type EmitsToProps<T extends EmitsOptions> = T extends string[]
  ? {
    [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
  }
  : T extends ObjectEmitsOptions
      ? {
        [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
          ? T[Uncapitalize<C>] extends null
            ? (...args: any[]) => any
            : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any
              ? P
              : never
            ) => any : never;
        }
      : {}

type ResolveProps<PropsOrPropOptions, E extends EmitsOptions> = 
  Readonly<
    PropsOrPropOptions extends ComponentPropsOptions
      ? ExtractPropTypes<PropsOrPropOptions>
      : PropsOrPropOptions
    > & ({} extends E
        ? {} 
        : EmitsToProps<E>)
/**
 * 通用的组件定义
 */
export type NutshellComponent<
  Props,
  Emits extends EmitsOptions = {},
  Slots extends SlotsType = {}
> = DefineComponent<
  ComponentPropsOptions<Props>, 
  {}, // RawBindings
  {}, // D
  ComputedOptions,
  MethodOptions, 
  ComponentOptionsMixin, // Mixins
  ComponentOptionsMixin, // Extends
  Emits,
  string, // E
  ExtractDefaultPropTypes<Props>, // PublicProps
  ResolveProps<ComponentPropsOptions<Props>, Emits>, // PublicProps
  Slots
>

/**
 * Our private defineComponent
 * 定义组件
 * @param setup 
 * @param options 
 */
export function define<
  Props extends Record<string, any>,
  E extends EmitsOptions, 
  S extends SlotsType = {}
> (
  options: ComponentOptions<Props>
) {
  /*
   * 底层代码的所有努力，都是为了铺陈组件的时候
   * 1. 简洁 consice
   *    减少 boilerplace code
   * 2. 符合直觉 intuisive
   * 3. DX 对开发友好
   */
  const setup = (
      props: Props, 
      ctx: SetupContext<E, S>
    ) => {
    // the real setup
    // console.log('define--------------------------------setupWrapped', {...props}, ctx)
    const { setup } = options
    const providing  = useProvider()
    const setupResult = setup(props, ctx)
    const { slots, emit } = ctx
    const defaultSlot = slots.default || props.label
    const render = ref((props) => h('div'))
    if (providing instanceof Promise) {
      providing.then(({default: provider}) => {
        render.value = provider.render
      })
    } else {
      render.value = providing.render
    }
    return () => h(render.value, {
      ...setupResult,
      ...props,
      ...options.emits,
    }, defaultSlot)
  }

  const optionsSythesized = {
    inheritAttrs: true,
    name: options.name,
    props: options.props,
    setup,
  }

  return defineComponent<
    ComponentPropsOptions<Props>,
    {}, // RawBindings,
    {}, // D
    {}, // C
    {}, // M
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    E,
    string,
    S
  >(optionsSythesized)
}
