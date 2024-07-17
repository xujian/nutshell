import { HttpEndpoints } from '@uxda/nutshell'

const mappings = {
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

const endpointsList: HttpEndpoints = {
  获取消息: {
    path: '/json/messages.json',
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
