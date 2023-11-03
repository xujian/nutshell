import { h, SetupContext } from 'vue'
import { Steps as AntdvSteps } from 'ant-design-vue'
import { StepsProps } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Stepper = (props: StepsProps & MarginProps, ctx: SetupContext, emits: any) => {
  const { slots } = ctx
  console.log(slots, 222)

  return h(AntdvSteps, {
    class: ['ns-stepper'],
    status: props.status ? props.status : 'process',
    size: props.size === 'default' ? 'default' : 'small',
    direction: props.direction === 'horizontal' ? 'horizontal' : 'vertical',
    labelPlacement: props.labelPlacement === 'horizontal' ? 'horizontal' : 'vertical',
    // @ts-ignore
    items: props.items || [],
    current: props.modelValue as number,
    'onUpdate:current': (value: number) => {
      props['onUpdate:modelValue']?.(value)
    }
  }, slots)
}
// + import => ./index.ts, ../components.ts
