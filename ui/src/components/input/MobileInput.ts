import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType, computed, reactive } from 'vue'
import { useModelValuePropsForInput } from '../../props/model'
import { useFieldProps } from '../../props'
import { defineComponent } from 'vue'
import { h } from 'vue'
import { InputProps, NsInput, inputProps } from './Input'
import mergeWith from 'lodash/mergeWith'

export interface MobileInputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

const defaultProps = {
  type: 'numric',
  maxlength: 11,
  rules: ['mobile']
}


/**
 * 手机号输入框 <ns-mobile-input>
 */
export const NsMobileInput = defineComponent({
  name: 'NsMobileInput',
  props: inputProps,
  setup: (props) => {
    const mergedProps = computed({
      get: () => mergeWith(
        defaultProps,
        props, (to, from) => {
          console.log('mergeWith---', to, from)
          return from ?? to
        }),
      set (newValue: InputProps) {
        console.log('()()()()()()', newValue.modelValue)
        props['onUpdate:modelValue']?.(newValue.modelValue)
      }
    })
    console.log('+++', mergedProps.value)
    return () => h(NsInput, mergedProps.value)
  }
})
