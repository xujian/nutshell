import { HttpEndpoints } from '@uxda/nutshell'

const mappings = {
  name: '姓名',
  stage: '阶段',
  phone: '手机号',
  follower: '跟进人',
  inviteStart: '邀约时间起',
  inviteEnd: '邀约时间止',
  invitePlace: '邀约地点',
  inputDate: '录入时间',
  confirmDate: '确认时间',
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

const endpointsList: HttpEndpoints = {
  获取客户列表: {
    path: '/json/clients.json',
    translate: (data: any) => data,
    transform: (result: any) => {
      return result.map((d: any) => transformRow(d))
    }
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
