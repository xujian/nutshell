import { Rule } from 'ant-design-vue/es/form'
import { FullValidationRule } from '../../../../props/field'

// 标准校验格式转换为 Antdv 格式
export const transformRules = (rules: FullValidationRule[]) => {
  if (!rules) return []
  const result: Rule[] = []
  rules.forEach(r => {
    if (r.name === 'required') {
      result.push({
        required: true,
        message: r.message,
        trigger: r.trigger ?? ['blur']
      })
    } else {
      result.push({
        validator (rule: any, value: string | string[]) {
          if (!r?.required) {
            if (typeof value === 'object' && !value.length) {
              return Promise.resolve()
            } else if (!value) {
              return Promise.resolve()
            }
          }
          if (!r.method?.(value)) {
            return Promise.reject(r.message)
          }
          return Promise.resolve()
        },
        message: r.message,
        trigger: r.trigger ?? 'blur',
        required: r?.required,
      })
    }
  })
  return result
}
