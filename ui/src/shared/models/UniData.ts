
// UniData 用于定义所有

import { NameValuePair } from './NameValuePair'

export type Series = {
  label: string,
  data: NameValuePair[],
}

/**
 * 标准数据格式
 */
export type UniData = {
  series: Series[],
  fields?: Fields,
}

