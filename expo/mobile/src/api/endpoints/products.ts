import { HttpEndpoints } from '@uxda/nutshell'

const mappings = {
  id: 'id',
  name: '名称',
  orgType: '机构类型',
  orgName: '机构名称',
  mortgageType: '信贷类型',
  fastestLoanTime: 3,
  interestRateLowerLimit: '最低年利率',
  dayInterestRateLowerLimit: '最低日利率',
  MonthInterestRateLowerLimit: '最低月利率'
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

const endpointsList: HttpEndpoints = {
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
      return result.map((d: any) => transformRow(d))
    }
  }
} as const

const keys = Object.keys(endpointsList as any)

type Keys = typeof keys[number]

const endpoints: Record<Keys, string> = Object.fromEntries(
  Object.entries(endpointsList).map(([name, def]) => [name, def.path])
)

const translates = Object.fromEntries(
  Object.entries(endpointsList).map(([, def]) => [def.path, def.translate])
)

const transforms = Object.fromEntries(
  Object.entries(endpointsList).map(([, def]) => [def.path, def.transform])
)

export {
  endpoints,
  translates,
  transforms,
}
