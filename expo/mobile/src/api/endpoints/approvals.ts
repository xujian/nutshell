import { HttpEndpoints } from '@uxda/nutshell'

const mappings = {
  id: 'id',
  applyNo: 'DDYKSP24051166169',
  mainCustomerName: '申请人',
  applyStatusName: '审批状态',
  noPowerNum: 1,
  powerNum: 0,
  applyTime: '申请时间',
  userName: '创建用户',
  type: 'newMini',
  companyName: '企业名称',
  currentScene: 'ZS,HH'
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

const endpointsList: HttpEndpoints = {
  获取审批列表: {
    path: '/json/approvals.json',
    translate: (data: any) => data,
    transform: (result: any) => result.data.map((d: any) => transformRow(d))
  },
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
