import { defineComponent, h, provide } from 'vue'
import { formProps, formEmits } from '../../../../components'
import { marginProps } from '../../../../utils'
import { NutuiFormSymbol } from '../../utils'

export const Form = defineComponent({
  name: 'NutuiInput',
  props: {
    ...formProps,
    ...marginProps
  },
  emits: formEmits,
  setup (props, { slots }) {

    provide(NutuiFormSymbol, {
      props,
      // @ts-ignore
      vendor: props.vendorRef
    })

    return () =>  h(NutForm, {
      ref: props.vendorRef,
      class: 'ns-form',
      modelValue: props.modelValue,
    }, slots)
  }
})
