import { defineComponent, getCurrentInstance, h, inject, onMounted, provide, ref, Ref, SetupContext } from 'vue'
import { formProps, type FormProps, formEmits, } from '../../../../components'
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

    // @ts-ignore
    provide(NutuiFormSymbol, props.vendorRef)

    return () =>  h(NutForm, {
      ref: props.vendorRef,
      class: 'ns-form',
      modelValue: props.modelValue,
    }, slots)
  }
})
