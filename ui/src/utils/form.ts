import { Ref } from 'vue'
import { FormProps } from '../components'
import { FormInstance } from 'ant-design-vue'

export type FormProvided = {
  props: FormProps,
  vendor: Ref<FormInstance | undefined>
}
