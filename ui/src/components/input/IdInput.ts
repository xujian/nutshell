import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType, computed } from 'vue'
import { useModelValuePropsForInput } from '../../props/model'
import { useFieldProps } from '../../props'
import { defineComponent } from 'vue'
import { h } from 'vue'
import { NsInput } from './Input'
import isIdentityCard from 'validator/lib/isIdentityCard'

export const idInputProps = {
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
}

export interface IdInputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type IdInputProps = ExtractPublicPropTypes<typeof idInputProps>

const defaultProps = {
  maxlength: 18,
  rules: [{
    method: (value: string) => isIdentityCard(value, 'zh-CN'),
    message: '格式不正确'
  }]
}


/**
 * 证件号输入框 <ns-id-input>
 */
export const NsIdInput = defineComponent({
  name: 'NsIdInput',
  props: idInputProps,
  setup: (props) => {
    const mergedProps = computed(() => ({
      ...defaultProps,
      ...props,
    }))
    console.log('--------NsIdInput.......', mergedProps.value)
    return () => h(NsInput, mergedProps.value)
  }
})
