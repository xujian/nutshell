import { h, SetupContext } from 'vue'
import { type StepsProps, type StepperStatus, NsIcon } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Stepper = (props: StepsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {

  const buildIcon = (name: string) => `http://simple.shensi.tech/icons/${name}.svg`,
    value = +(props.modelValue || 1) - 1

    console.log('===value', value)

  const items = () => props.items?.map((item, index) => h(NutStep, {
      title: item.title,
    }, {
      icon: () => h(NsIcon, {
        name: buildIcon(
          index < value
            ? 'check'
            : index === value
              ? 'run'
              : 'wait'
          )
      })
    }))

  return h(NutSteps, {
      class: [
        `stepper-variant-${props.variant}`
      ],
      status: props.status ? props.status : ('process' as StepperStatus),
      size: props.size !== 'xs' ? 'default' : 'small',
      direction: props.direction === 'horizontal' ? 'horizontal' : 'vertical',
      labelPlacement: props.labelPlacement === 'horizontal' ? 'horizontal' : 'vertical',
      current: props.modelValue as number,
      'onUpdate:current': (value: number) => {
        if (!props.clickable) return
        props['onUpdate:modelValue']?.(value)
      },
      onChange: (value: number) => {
      }
    }, items())
}
