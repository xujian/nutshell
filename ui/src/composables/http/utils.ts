import { HttpEndpointGroup, MergedEndpoints } from './types'

export function extractEndpoints (list: HttpEndpointGroup) {
  const endpoints = Object.fromEntries(
    Object.entries(list).map(([name, def]) => [name, def.path])
  )

  const translates = Object.fromEntries(
    Object.entries(list).map(([, def]) => [def.path, def.translate])
  )

  const transforms = Object.fromEntries(
    Object.entries(list).map(([, def]) => [def.path, def.transform])
  )

  return { endpoints, translates, transforms }
}

/**
 * 将多个 endpoints 合并成 { endpoits, translates, transforms } 的形式
 * @param groups
 */
export function mergeEndpoints (groups: HttpEndpointGroup[]): MergedEndpoints {
  let { endpoints, translates, transforms }: MergedEndpoints =
    { endpoints: {}, translates: {}, transforms: {} }
  groups.forEach(group => {
    const extracted = extractEndpoints(group)
    endpoints = {
      ...endpoints,
      ...extracted.endpoints,
    }
    translates = {
      ...translates,
      ...extracted.translates,
    }
    transforms = {
      ...transforms,
      ...extracted.transforms,
    }
  })
  return { endpoints, translates, transforms }
}
