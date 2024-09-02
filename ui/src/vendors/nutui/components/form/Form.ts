import { defineComponent, getCurrentInstance, h, inject, onMounted, provide, ref, Ref, SetupContext } from 'vue'
import { formProps, type FormProps, formEmits, } from '../../../../components'
import { marginProps } from '../../../../utils'
import { NutuiFormSymbol } from '../../utils'
import { FormInstance } from 'ant-design-vue'

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
