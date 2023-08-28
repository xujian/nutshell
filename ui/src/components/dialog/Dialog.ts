import { ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'
import { useDimensionProps, useModelValuePropsForBoolean } from '../../props'
import { EmitsToProps } from 'src/utils/private/helpers'

export const dialogProps = {
  title: {
    type: String,
  },
  ...useModelValuePropsForBoolean(),
  ...useDimensionProps(),
}

export interface DialogEmits extends ObjectEmitsOptions {
  'update:modelValue'?: (value: boolean) => void
}

const dialogEmits: DialogEmits = {
  'update:modelValue': undefined
}

export interface DialogSlots extends SlotsType {
  default: never,
}

export type DialogProps = ExtractPublicPropTypes<typeof dialogProps> & EmitsToProps<DialogEmits>

export const NsDialog = define({
  name: 'NsDialog',
  props: dialogProps,
  emits: dialogEmits,
  setup (props, ctx) {
    return {
    }
  }
})