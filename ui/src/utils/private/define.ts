import { ComponentObjectPropsOptions, ComponentOptionsMixin, 
  ComponentOptionsWithObjectProps, 
  SetupContext, SlotsType, ObjectEmitsOptions, PropType,
  Ref, ref, h,
  defineComponent,
  EmitsOptions, FunctionalComponent,
  getCurrentInstance} from 'vue'
import { LooseRequired } from '@vue/shared'
import { MakePropsType } from './helpers'
import { useVendor } from '../../shared'

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
  Emits extends ObjectEmitsOptions, 
  /** 组件 SLOT 的定义 */
  Slots extends SlotsType = {},
  // 从 PropsOptions 抽取组件的实际属性
  Props = MakePropsType<PropsOptions, Emits>
> (
  options: {
    name: string,
    props: PropsOptions,
    emits?: Emits,
    slots?: Slots,
    setup: (
      props: Props,
      ctx: Omit<SetupContext, 'expose'>
    ) => {
      props?: Partial<Props>,
      methods?: Record<string, any>,
      vendorRef?: Ref
    }
  },
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
      props: LooseRequired<Props>,
      ctx: Omit<SetupContext, 'expose'>
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

    const vm = getCurrentInstance() as any
    vm.render = () => h(render.value, {
    // return () => h(render.value, {
      ...props,
      ...extraProps,
      classes: buildClasses(props),
      vendorRef,
    }, defaultSlot)

    /**
     * 使组件可执行 method (expose)
     */
    return {
      ...methods
    }
  }

  const optionsSyth: ComponentOptionsWithObjectProps<
    PropsOptions, {}, {}, {}, {}, 
    ComponentOptionsMixin, ComponentOptionsMixin,
    Emits, string, {}, string, Slots
  > = {
    inheritAttrs: true,
    name: options.name,
    props: options.props,
    // emits: options.emits, // TODO: 加上就无法触发 onChange
    // @ts-ignore
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
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    Emits, // E extends EmitsOptions = {}, 
    string, // EE extends string = string, 
    Slots,
    {}, string
  >(optionsSyth)
}
