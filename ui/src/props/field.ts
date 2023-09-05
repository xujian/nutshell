import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { InputProps } from '../components/input'

const quickValidationMethods: string[] = [
  'required',
  'numeric',
  'email'
]

export type QuickValidationMethod = typeof quickValidationMethods[number]

const quickRuleMapping: Record<QuickValidationMethod, (v: string) => boolean> = {
  required: v => !!v,
  numeric: v => /^\d+$/.test(v)
}

export type FunctionValidationMethod = (value: string) => boolean
export type ValidationTrigger = 'blur' | 'change'

export type FullValidationRule = {
  name: QuickValidationMethod | 'function' | 'custom',
  method: QuickValidationMethod | FunctionValidationMethod,
  message?: string,
  trigger?: ValidationTrigger
}

/**
 * 折腾这么多 type 是为了使用的时候可以简写
 */
/**
 * 校验规则
 */
export type ValidationRule = FullValidationRule | FunctionValidationMethod | QuickValidationMethod

export type PropsWithLabel = {
  [x: string]: any,
  label: StringConstructor,
}

export type FormatRuleFunction = (rules: ValidationRule[] | undefined, props: PropsWithLabel) => FullValidationRule[]

export const formatRules: FormatRuleFunction = (rules, props) => {
  if (!rules) return []
  if (!Array.isArray(rules)) return []
  return rules.map(rule => {
    if (typeof rule === 'string' && quickValidationMethods.includes(rule)) {
      const method = quickRuleMapping[rule]
      return {
        name: rule, 
        method,
        message: `请输入${props.label}`,
        trigger: 'blur'
      }
    }
    if (typeof rule === 'function') {
      return {
        name: 'function',
        method: rule, 
        message: '格式错误',
        trigger: 'blur'
      }
    }
    if (typeof rule === 'object') {
      return {
        name: 'custom',
        ...rule
      }
    }
  })
}

/**
 * Usage:
 * // 简写形式
 * <ns-input label="客户姓名" :rules="['required']" />
 * <ns-input label="客户姓名" :rules="[v => v.length > 1]" />
 * // 全写
 * <ns-input label="客户姓名" :rules="[
 *   {method: 'required', message: '请输入客户姓名'},
 *   {method: v => v.length > 1, message: '客户姓名至少两个字'},
 * ]" />
 */

/**
 * 给输入框加上标题和校验规则
 */
export const useFieldProps = buildProps({
  /**
   * 标题
   */
  label: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  /**
   * 输入校验规则
   */
  rules: {
    type: Array as PropType<ValidationRule[]>
  }
})