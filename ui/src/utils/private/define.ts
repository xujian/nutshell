import { useProvider } from '../../shared'
import { ref, h } from 'vue'
import { ComponentOptions, EmitsOptions, RenderFunction, SetupContext, SlotsType,
  defineComponent } from 'vue'

/**
 * Our private defineComponent
 * 定义组件
 * @param setup 
 * @param options 
 */
export function define<
  Props extends Record<string, any>,
  E extends EmitsOptions = {}, 
  EE extends string = string, 
  S extends SlotsType = {}
> (
  setup: (
      props: Props,
      ctx: SetupContext<E, S>
    ) => any,
  options?: 
    Pick<ComponentOptions, 'name' | 'inheritAttrs'> 
      & {
        props?: (keyof Props)[];
        emits?: E | EE[];
        slots?: S;
      }
) {
  const setupWrapped = (
      props: Props, 
      ctx: SetupContext<E, S>
    ) => {
    // the real setup
    // console.log('define--------------------------------setupWrapped', {...props}, ctx)
    const providing  = useProvider()
    const setupResult = setup(props, ctx)
    const { slots } = ctx
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
      ...props
    }, defaultSlot)
  }
  const optionsSythesized = {
    inheritAttrs: true,
    ...options
  }
  return defineComponent<Props, E, EE, S>(setupWrapped, optionsSythesized)
}

