import { ComponentObjectPropsOptions,
  SetupContext, SlotsType, ObjectEmitsOptions,
  Ref, ref, h,
  defineComponent,
  EmitsOptions, FunctionalComponent,
  unref,
  isRef,
  computed} from 'vue'
import { useVendor } from '../../shared/vendor'
import { kebabCase } from '../text'
import { buildDesignClasses, buildDesignStyles, hasDesignProps } from '../../props'
import { MakePropsType } from './helpers'

const buildClasses = (props: any): string[] => {
  if (!props) return []
  const { variant } = props
  const result: string[] = []
  if (variant) {
    result.push(`variant-${variant}`)
  }
  if (!props.classes) return result
  if (isRef(props.classes)) {
    result.push(...unref(props.classes || []))
  } else {
    result.push(...props.classes)
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
  Props = MakePropsType<PropsOptions, Emits>
> (
  options: {
    name: string,
    props: PropsOptions,
    emits?: Emits,
    slots?: Slots,
    setup: (
      props: Props,
      ctx: SetupContext<Emits, Slots>
    ) => {
      props?: Props,
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
      props: Props,
      ctx: SetupContext<Emits, Slots>
    ) {
    // the real setup
    // const { setup: setupOriginal } = options
    const v = useVendor()
    const { props: extraProps, methods, vendorRef, structured} = options.setup(props, ctx)
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
      classes = hasDesignProps(props)
        ? computed(() => buildDesignClasses(props))
        : computed(() => []),
      styles = hasDesignProps(props)
        ? computed(() => buildDesignStyles(props))
        : computed(() => ({}))

    ctx.expose({
      ...methods
    })

    return () => h(render.value, {
      ...props,
      ...extraProps,
      class: [
        className,
        ...structured ? [] : classes.value,
      ],
      ...structured ? {} : { style: styles.value },
      // 用特定的名称返回计算好的 classes/styles
      ...structured ? { classes: classes.value } : {},
      ...structured ? { styles: styles.value } : {},
      vendorRef,
    }, ctx.slots)
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
      inheritAttrs: true,
      name: options.name,
      props: options.props,
    }
  )
}
