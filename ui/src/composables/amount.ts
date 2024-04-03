/**
 * 金额格式化
 */
export function amountFormatter(value: string) {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 金额解析
 */
export function amountParser(value: string) {
  return value.replace(/\$\s?|(,*)/g, '')
}

/**
 * 金额转为中文格式
 */
export function amountChinese(value: string | number) {
  const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'] // 汉字的数字
  const cnIntRadice = ['', '拾', '佰', '仟'] // 基本单位
  const cnIntUnits = ['', '万', '亿', '万亿'] // 对应整数部分扩展单位
  const cnDecUnits = ['角', '分', '毫', '厘'] // 对应小数部分单位
  const cnInteger = '整' // 整数金额时后面跟的字符
  const cnIntLast = '元' // 整数完以后的单位
  // 最大处理的数字
  const maxNum = 999999999999999.9999
  // 输出的中文金额字符串
  let chineseStr = ''
  let isNegative = false
  if (!Number(value)) {
    return ''
  }
  if (value === '-') {
    return '负'
  }
  if (Number(value) < 0) {
    isNegative = true
    value = Math.abs(Number(value))
  }

  value = parseFloat(value as any)
  if (value >= maxNum) {
    // 超出最大处理数字
    return '超出最大处理数字'
  }
  if (value == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 四舍五入保留两位小数,转换为字符串
  value = Math.round(value * 100).toString()
  const integerNum = value.substr(0, value.length - 2) // 金额整数部分
  const decimalNum = value.substr(value.length - 2) // 金额小数部分
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0
    const IntLen = integerNum.length
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1)
      const p = IntLen - i - 1
      const q = p / 4
      const m = p % 4
      if (n == '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum != '') {
    const decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substr(i, 1)
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum == '' || /^0*$/.test(decimalNum)) {
    chineseStr += cnInteger
  }

  return isNegative ? `负${chineseStr}` : chineseStr
}
