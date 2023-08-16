import { useProvider } from '../../shared'
import { ComponentObjectPropsOptions, ComponentOptionsMixin, 
  ComponentOptionsWithObjectProps, ComponentPropsOptions, 
  ComputedOptions, DefineComponent, 
  ExtractDefaultPropTypes, ExtractPropTypes, 
  MethodOptions, EmitsOptions, SetupContext, SlotsType, ObjectEmitsOptions, RenderFunction } from 'vue'
import { ref, h } from 'vue'
import { defineComponent } from 'vue'
import { EmitsToProps, Prettify } from './helpers'

/**
 * 通用的组件定义
 */
// export type NutshellComponent< // This is overload 4
//   PropsOptions extends ComponentObjectPropsOptions,
//   Emits extends EmitsOptions = {},
//   Slots extends SlotsType = {}
// > = DefineComponent<
//   ComponentPropsOptions<PropsOptions>, 
//   {}, // RawBindings
//   {}, // D
//   {},
//   {}, 
//   ComponentOptionsMixin, // Mixins
//   ComponentOptionsMixin, // Extends
//   Emits,
//   string, // E
//   Slots
// >

/**
 * define() 所需要的参数
 */
export type Options<
  PropsOptions extends ComponentObjectPropsOptions,
  Emits extends EmitsOptions = {},
  Slots extends SlotsType = {}
> = ComponentOptionsWithObjectProps<
  PropsOptions,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin, // Mixins
  ComponentOptionsMixin, // Extends
  Emits,
  string,
  {},
  string,
  Slots
>

/**
 * Our private defineComponent
 * 简化并专门化参数定义
 * 定义组件
 * @param options 
 */
export function define<
  /** 组件属性的定义 */
  PropsOptions extends Readonly<ComponentObjectPropsOptions>,
  /** 组件事件的定义 */
  Emits extends ObjectEmitsOptions = ObjectEmitsOptions, 
  /** 组件 SLOT 的定义 */
  Slots extends SlotsType = {},
  // 从 PropsOptions 抽取组件的实际属性
  // Props = Prettify<Readonly<ExtractPropTypes<PropsOptions> & EmitsToProps<Emits>>>
> (
  options: Options<PropsOptions, Emits, Slots>,
) {
  /*
   * 底层代码的所有努力，都是为了铺陈组件的时候
   * 1. 简洁 consice
   *    减少 boilerplace code
   * 2. 符合直觉 intuisive
   * 3. DX 对开发友好
   */
  const setup = function (
      this: void,
      props,
      ctx: SetupContext<Emits, Slots>
    ) {
    // the real setup
    // console.log('define--------------------------------setupWrapped', {...props}, ctx)
    const { setup: setupOriginal } = options
    const providing  = useProvider()
    const setupResult = setupOriginal(props, ctx)
    const { slots, emit } = ctx
    const defaultSlot = slots.default
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

  const optionsSythesized: Options<PropsOptions, Emits, Slots> = {
    inheritAttrs: true,
    name: options.name,
    props: options.props,
    setup
  }

  /**
   * 用 Vue 原生的 defineComponent()
   */
  return defineComponent<
    PropsOptions,
    {}, // RawBindings,
    {}, // D
    {}, // C
    {}, // M
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    Emits,
    string,
    Slots
  >(optionsSythesized)
}