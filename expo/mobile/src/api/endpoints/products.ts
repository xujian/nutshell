import { HttpEndpointGroup } from '@uxda/nutshell'

const mappings = {
  id: 'id',
  name: '名称',
  orgType: '机构类型',
  orgName: '机构名称',
  mortgageType: '信贷类型',
  interestRateLowerLimit: '最低年利率',
  dayInterestRateLowerLimit: '最低日利率',
  MonthInterestRateLowerLimit: '最低月利率',
  fastestLoanTime: '最快放款时长',
  flowStatus: '流程',
  repayment: '还款方式'
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

export const endpoints: HttpEndpointGroup = {
  获取产品列表: {
    path: '/json/products.json',
    translate: (data: any) => data,
    transform: (result: any) => {
      return result.map((d: any) => transformRow(d))
    }
  },
  获取产品详情: {
    path: '/json/product-details.json',
    translate: (data: any) => data,
    transform: (result: any) => {
      return transformRow(result)
    }
  }
} as const
