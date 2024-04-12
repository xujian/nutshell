import { h, SetupContext } from 'vue'
import { Steps as AntdvSteps } from 'ant-design-vue'
import { StepsProps, StepperStatus } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Stepper = (props: StepsProps & MarginProps, ctx: SetupContext, emits: any) => {
  const { emit } = ctx

  return h(AntdvSteps as any, {
    class: [
      `stepper-variant-${props.variant}`
    ],
    status: props.status ? props.status : ('process' as StepperStatus),
    size: props.size !== 'xs' ? 'default' : 'small',
    direction: props.direction === 'horizontal' ? 'horizontal' : 'vertical',
    labelPlacement: props.labelPlacement === 'horizontal' ? 'horizontal' : 'vertical',
    // @ts-ignore
    items: props.items || [],
    current: props.modelValue as number,
    'onUpdate:current': (value: number) => {
      props['onUpdate:modelValue']?.(value)
    },
    onChange: (value: number) => {
      emit('change', value)
    }
  })
}
// + import => ./index.ts, ../components.ts
