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

    const form = ref()
    provide(NutuiFormSymbol, form)

    return () =>  h(NutForm, {
      ref: form,
      class: 'ns-form',
      modelValue: props.modelValue,
    }, slots)
  }
})
