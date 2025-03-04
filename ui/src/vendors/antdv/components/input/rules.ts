import { Rule } from 'ant-design-vue/es/form'
import { FullValidationRule } from '../../../../props/field'

// 标准校验格式转换为 Antdv 格式
export const transformRules = (rules: FullValidationRule[]) => {
  if (!rules) return []
  const result: Rule[] = []
  rules.forEach(r => {
    // NsInput 的校验规则与 Ant Design Vue 不一样
    // 必填('required')是一个单独规则项
    if (r.name === 'required') {
      result.push({
        required: true,
        message: r.message,
        trigger: r.trigger
      })
    } else {
      result.push({
        validator (rule: any, value: string | string[] | number) {
          // 未填写 不继续校验
          if (!value && value !== 0) {
            return Promise.resolve()
          }
          if (!r.method?.(value as string)) {
            return Promise.reject(r.message)
          }
          return Promise.resolve()
        },
        message: r.message,
        trigger: r.trigger ?? 'change',
      })
    }
  })
  return result
}
