import { Ref } from 'vue'
import { FormProps } from '../components'

export type FormValidateError = {
  message: string,
}

export type FormValidateResult = {
  valid: boolean,
  errors: FormValidateError[]
}

export type FormInstance = {
  validate (name?: string): FormValidateResult
}

export type FormProvided = {
  props: FormProps,
  vendor: Ref<FormInstance | undefined>
}
