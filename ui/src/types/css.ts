// 处理 CSS 度量
// 例如 距离单位 px, %, em
// 用数字或字符串表示 CSS 的量
// 用来替代模糊的 number | string


/**
 * CSS 尺寸单位
 */
export type DimensionUnit = 'px' | '%' | 'em'

/**
 * CSS 长度值
 */
export type Dimension = number | `${number}${DimensionUnit}`

// 表示 padding
// const s: Dimension = 10 只用数字 =10px
// const s2: Dimension = '10px'
// const s3: Dimension = '10%'
const s4: Dimension = '0.5em'
