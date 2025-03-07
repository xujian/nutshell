import {
  ComponentObjectPropsOptions,
  SetupContext, SlotsType, ObjectEmitsOptions,
  Ref, ref, h,
  defineComponent,
  EmitsOptions, FunctionalComponent, isRef,
  computed
} from 'vue'
import { kebabCase } from '../text'
import { buildDesignClasses, buildDesignStyles, hasDesignProps, hasVariantProps } from '../../props'
import { MakePropsType, MarginProps, StyleObject } from './helpers'
import { useVendor } from '../../shared/vendor'

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
  Props = MakePropsType<PropsOptions, Emits>
> (
  options: {
    name: string,
    props: PropsOptions,
    emits?: Emits,
    slots?: Slots,
    setup: (
      props: Props & MarginProps,
      ctx: SetupContext<Emits, Slots>
    ) => {
      props?: Props & MarginProps,
      methods?: Record<string, any>,
      // style?: StyleObject,
      // classes?: string[],
      vendorRef?: Ref,
      structured?: boolean,
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
      props: Props & MarginProps,
      ctx: SetupContext<Emits, Slots>
    ) {
    // the real setup
    // const { setup: setupOriginal } = options
    const v = useVendor()
    const { props: extraProps, methods, vendorRef, structured } = options.setup(props, ctx)
    // console.log('===define===classes', extraProps?.classes)
    const render: Ref<FunctionalComponent<Props, EmitsOptions, any>>
      = ref((props: Props, ctx: Omit<SetupContext, 'expose'>) => h('div'))

    if (v instanceof Promise) {
      v.then((vendor) => {
        render.value = vendor.render.bind(vendor)
      })
    } else {
      render.value = v.render.bind(v)
    }

    const className = kebabCase(options.name),
      // 自动处理 design props 产生的 class / style
      // 唯有当 发现参数 structured 的时候
      // 前端要求将 classes/styles 独立返回
      classes = computed(() => [
        ...hasDesignProps(props) ? buildDesignClasses(props) : [],
        ...hasVariantProps(props)
          ? Reflect.get(props, 'variant')
            ? [`variant-${Reflect.get(props, 'variant')}`]
            : []
          : [],
        ])
      const getExtraClasses: () => string[] = () => extraProps?.classes
        ? isRef(extraProps?.classes)
          ? extraProps?.classes.value
          : extraProps?.classes
        : []
      const getExtraStyles: () => StyleObject = () => extraProps?.styles
        ? isRef(extraProps?.styles)
          ? extraProps?.styles.value
          : extraProps?.styles
        : {},
      styles = hasDesignProps(props)
        ? computed(() => ({
          ...buildDesignStyles(props),
          ...getExtraStyles(),
        }))
        : computed(() => ({}))
    // @ts-ignore
    // console.log('===extraClasses', extraProps?.classes?.value, extraClasses)
    ctx.expose({
      ...methods
    })

    return () => render.value({
      ...props,
      ...extraProps,
      class: [
        className,
        ...getExtraClasses(),
        ...structured ? [] : classes.value,
      ],
      style: {
        ...getExtraStyles(),
      },
      ...structured ? {} : { style: styles.value },
      // 用特定的名称返回计算好的 classes/styles
      ...structured ? { classes: classes.value } : {},
      ...structured ? { styles: styles.value } : {},
      vendorRef,
    }, ctx)
  }

  /**
   * 用 Vue 原生的 defineComponent()
   * 使用 overrides (2)
   */
  return defineComponent<
    // @ts-ignore
    Props,
    Emits, // E extends EmitsOptions = {},
    string, // EE extends string = string,
    Slots
  >(
    setup, {
      name: options.name,
      props: options.props,
      // emits: options.emits,
      slots: options.slots,
    }
  )
}
