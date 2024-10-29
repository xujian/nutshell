import { HttpEndpointGroup } from '@uxda/nutshell/taro'

const mappings = {
}

const transformRow = (row: any) => {
  return Object.fromEntries(
    Object.entries(row)
      .map(([k, v]) => [mappings[k] || k, v])
  )
}

export const endpoints: HttpEndpointGroup = {
  获取消息: {
    path: '/json/messages.json',
  },
} as const
