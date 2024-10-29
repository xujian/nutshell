import { UniDataItem } from '@uxda/nutshell/taro'

export type Product = {
  id?: string,
  名称?: string,
  机构名称?: string,
  bannerUrl?: string,
  最快放款时长?: number,
  tags?: string[],
  流程?: UniDataItem[],
  还款方式?: string[],
}
