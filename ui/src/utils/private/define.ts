import { ComponentObjectPropsOptions, ComponentOptionsMixin, 
  ComponentOptionsWithObjectProps, DefineComponent, 
  SetupContext, SlotsType, ObjectEmitsOptions, PropType,
  Ref, ref, h, VNode,
  defineComponent, 
EmitsOptions, FunctionalComponent,
ComponentPropsOptions} from 'vue'
import { EmitsToProps, ExtractProps, ResolveProps } from './helpers'
import { VendorRenderFunction, useVendor } from '../../shared'

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
/**
 * 通用的组件定义
 */
// export type NutshellComponent< // This is overload 4
//   PropsOptions extends ComponentObjectPropsOptions,
//   Emits extends ObjectEmitsOptions = {},
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
 * let TS refers only Props, Emits, Slots
 */
// export type DefineFunctionOptions<
//   PropsOptions extends ComponentPropsOptions,
//   Emits extends ObjectEmitsOptions = {},
//   Slots extends SlotsType = {},
//   Props = ResolveProps<PropsOptions, Emits>
// > = Omit<ComponentOptionsWithObjectProps<
//       PropsOptions,
//       {},
//       {},
//       {},
//       {},
//       ComponentOptionsMixin, // Mixins
//       ComponentOptionsMixin, // Extends
//       Emits,
//       string,
//       {},
//       string,
//       Slots
//     >, 'setup'
//   > & {
//   // 改写 setup() 的定义
//   setup: (
//     this: void,
//     props: Props & MarginProps,
//     ctx: SetupContext<Emits, Slots>
//   ) => {
//     props?: Partial<Props>,
//     methods?: Record<string, any>,
//     vendorRef?: Ref,
//   }
// }

export type DefineFunctionOptions<
  PropsOptions extends ComponentObjectPropsOptions,
  Emits extends ObjectEmitsOptions = {},
  Slots extends SlotsType = {},
  Props = ExtractProps<PropsOptions, Emits>
> = {
  name: string,
  props: PropsOptions,
  emits?: Emits,
  slots?: Slots,
  setup: (props: Props, ctx: SetupContext) => {
    props?: Partial<Props>,
    methods?: Record<string, any>,
    vendorRef?: Ref
  }
}

// export type DefineFunction = (
//   options: DefineFunctionOptions
// ) => DefineComponent

/**
 * 传给 vendor 的属性里加了一些字段
 */
export type MarginProps = {
  classes: string[],
  vendorRef: Ref,
}

export type WithMarginProps<T = {}> = T & MarginProps

export const marginProps = {
  classes: {
    type: Array as PropType<String[]>,
    default: []
  }
}

const buildClasses = (props: any): string[] => {
  const { variant, color } = props
  const result: string[] = []
  if (variant) {
    result.push(`variant-${variant}`)
  }
  if (color) {
    result.push(`color-${color}`)
  }
  return result
}

/**
 * Our private defineComponent
 * 简化并专门化参数定义
 * 定义组件
 * @param options 
 */
export function define<
  /** 组件属性的定义 */
  PropsOptions extends ComponentObjectPropsOptions,
  /** 组件事件的定义 */
  Emits extends ObjectEmitsOptions = {}, 
  /** 组件 SLOT 的定义 */
  Slots extends SlotsType = {},
  // 从 PropsOptions 抽取组件的实际属性
  Props = ExtractProps<PropsOptions, Emits>
> (
  options: DefineFunctionOptions<PropsOptions, Emits, Slots>,
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
      props: Props,
      ctx: Omit<SetupContext<Emits, Slots>, 'expose'>
    ) {
    // the real setup
    const { setup: setupOriginal } = options
    const v = useVendor()
    const { props: extraProps, methods, vendorRef } = setupOriginal(props, ctx)
    const { slots, emit } = ctx
    const defaultSlot = slots.default
    const render: Ref<FunctionalComponent<Props, EmitsOptions, any>>
      = ref((props: Props, ctx: Omit<SetupContext, 'expose'>) => h('div'))

    if (v instanceof Promise) {
      v.then((vendor) => {
        render.value = vendor.render.bind(vendor)
      })
    } else {
      render.value = v.render.bind(v)
    }

    // const vm = getCurrentInstance() as any
    // vm.render = () => h(render.value, {
    return () => h(render.value, {
      ...props,
      ...extraProps,
      ...options.emits,
      classes: buildClasses(props),
      vendorRef,
    }, defaultSlot)
  }

  const optionsSyth: ComponentOptionsWithObjectProps<
    PropsOptions, {}, {}, {}, {}, 
    ComponentOptionsMixin, ComponentOptionsMixin,
    Emits, string, {}, string, Slots
  > = {
    inheritAttrs: true,
    name: options.name,
    props: options.props,
    setup,
  }

  /**
   * 用 Vue 原生的 defineComponent()
   * 使用 override (5)
   */
  return defineComponent<
    PropsOptions,
    {}, 
    {}, 
    {}, 
    {},
    ComponentOptionsMixin, ComponentOptionsMixin,
    Emits, // E extends EmitsOptions = {}, 
    string, // EE extends string = string, 
    Slots,
    {}, string
  >(optionsSyth)
}
