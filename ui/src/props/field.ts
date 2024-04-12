import { PropType, h, ref, withDirectives } from 'vue'
import { buildProps } from '../utils/private/props'
import { isIdentityCard, isMobilePhone } from 'validator'
import { Color } from '../composables/theme'
import { MakePropsType } from '../utils'
import { useTippy } from 'vue-tippy'
import { TooltipProps } from './tooltip'

const quickValidationMethods: string[] = [
  'required',
  'numeric',
  'email',
  /**
   * 身份证号
   */
  'id',
  /**
   * 手机号
   */
  'mobile'
]

export type QuickValidationMethod = typeof quickValidationMethods[number]

const quickRuleMapping: Record<QuickValidationMethod, (v: string) => boolean> = {
  required: v => !!v,
  numeric: v => /^\d+$/.test(v),
    // 假值不调用具体校验方法
  id: v => !!v && isIdentityCard(v, 'zh-CN'),
  mobile: v => !!v && isMobilePhone(v, 'zh-CN'),
}

export type FunctionValidationMethod = (value: string | string[]) => boolean
export type ValidationTrigger = 'blur' | 'change'

export type FullValidationRule = {
  name: QuickValidationMethod | 'function' | 'custom',
  method: FunctionValidationMethod,
  message?: string,
  trigger?: ValidationTrigger
  required?: boolean
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
  label?: string,
}

export type FormatRuleFunction = (
  rules: ValidationRule[] | undefined,
  props: PropsWithLabel
) => FullValidationRule[]

export const formatRules: FormatRuleFunction = (rules, props) => {
  if (!rules) return []
  if (!Array.isArray(rules)) return []
  const result: FullValidationRule[] = []
  rules.forEach(rule => {
    if (typeof rule === 'string' && quickValidationMethods.includes(rule)) {
      const method = quickRuleMapping[rule]
      result.push({
        name: rule,
        method,
        message: rule === 'required'
          ? props.placeholder || `请输入${props.label || ''}`
          : '格式错误',
        trigger: 'blur'
      })
    }
    if (typeof rule === 'function') {
      result.push({
        name: 'function',
        method: rule,
        message: '格式错误',
        trigger: 'blur'
      })
    }
    if (typeof rule === 'object') {
      result.push({
        ...rule,
        name: 'custom',
      })
    }
  })
  return result
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
 * 表单项的 name 属性
 * string[]? when validating form item whithin array/v-for
 * :name="[<form model field>, index, <child field>]"
 */
export type FormItemName = string | [string, number, string]

/**
 * 表单项共用属性
 */
const fieldProps = {
  /**
   * 标题
   */
  label: {
    type: String,
  },
  name: {
    type: [String, Array] as PropType<FormItemName>,
  },
  /**
   * 输入校验规则
   */
  rules: {
    type: Array as PropType<ValidationRule[]>
  },
  placeholder: {
    type: String,
  },
  fill: {
    type: String as PropType<Color>,
  },
  disabled: {
    type: Boolean,
  },
  /**
   * 提示词
   */
  hint: {
    type: String
  }
}

/**
 * 给输入框加上标题和校验规则
 */
export const useFieldProps = buildProps(fieldProps)

export type FieldProps = MakePropsType<typeof fieldProps>

export const buildStyles = (props: FieldProps) => {
  const style = {
    ...props.fill && { '--ns-fill': props.fill }
  }
  return style
}

const tippy = {
  mounted (el: HTMLDivElement) {
    makeFieldHint(el)
  }
}

/**
 * 输出输入框提示(问号)
 * @param props
 * @returns
 */
export const buildFieldHint = (props: FieldProps) => {

  const hint = () => h('i', {
    class: [
      'circle',
      'icon-hint',
    ],
    'data-hint': props.hint,
    ref: ref,
  }, '?')
  return withDirectives(h('div', {
      class: 'form-label row align-center'
    }, [
      h('label', {}, props.label),
      hint(),
    ]), [
      [tippy]
  ])
}

/**
 *
 * @param el
 * @param props
 */
export const makeFieldHint = (el: Element) => {
  const mark = el.querySelector('.icon-hint')
  if (mark) {
    const hint = mark.getAttribute('data-hint') || ''
    useTippy(mark, {
      content: hint
    })
  }
}
