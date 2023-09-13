import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType, computed } from 'vue'
import { useModelValuePropsForInput } from '../../props/model'
import { useFieldProps } from '../../props'
import { defineComponent } from 'vue'
import { h } from 'vue'
import { NsInput } from './Input'
import isMobilePhone from 'validator/lib/isMobilePhone'

export const mobileInputProps = {
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
}

export interface MobileInputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type MobileInputProps = ExtractPublicPropTypes<typeof mobileInputProps>

const defaultProps = {
  type: 'numric',
  maxlength: 11,
  rules: [
    (value: string) => isMobilePhone(value, 'zh-CN')
  ]
}


/**
 * 手机号输入框 <ns-mobile-input>
 */
export const NsMobileInput = defineComponent({
  name: 'NsIdInput',
  props: mobileInputProps,
  setup: (props) => {
    const mergedProps = computed(() => ({
      ...defaultProps,
      ...props,
    }))
    return () => h(NsInput, mergedProps.value)
  }
})
