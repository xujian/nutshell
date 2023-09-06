import { FullValidationRule } from '../../../../props/field'

export const transformRules = (rules: FullValidationRule[]) => {
  // 标准校验格式转换为 Antdv 格式
  if (!rules) return []
  const result = []
  rules.forEach(r => {
    if (r.name === 'required') {
      result.push({
        required: true,
        message: r.message,
        trigger: r.trigger ?? ['blur']
      })
    } else {
      result.push({
        validator: r.method,
        message: r.message,
        trigger: r.trigger ?? 'blur'
      })
    }
  })
  return result
}