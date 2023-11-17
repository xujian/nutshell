import { h, SetupContext } from 'vue'
import { Empty as AntdvEmpty } from 'ant-design-vue'
import { EmptyModeType, EmptyProps } from '../../../../components'

const modeMap = {
  data: {
    description: '暂无数据',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-data.png'
  },
  search: {
    description: '没有找到相关内容',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-search.png'
  },
  notice: {
    description: '暂无消息噢',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-notice.png'
  },
  record: {
    description: '暂无记录',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-record.png'
  },
  network: {
    description: '网络不给力 请重试',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-network.png'
  },
  loading: {
    description: '正在加载 请稍候',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-loading.png'
  },
  permission: {
    description: '暂无权限',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-permission.png'
  },
  404: {
    description: '',
    image: 'https://cdn.ddjf.com/static/images/nutshell/empty-404.png'
  }
}
const sizeMap = {
  sm: { width: 396, height: 220 },
  md: { width: 288, height: 160 },
  lg: { width: 180, height: 100 }
}

function getDescription(props: EmptyProps) {
  if (props.description) {
    return props.description
  } else {
    return modeMap[props?.mode as EmptyModeType].description
  }
}
function getImage(props: EmptyProps) {
  if (props.image) {
    return props.image
  } else {
    return modeMap[props?.mode as EmptyModeType].image
  }
}

export const Empty = (props: EmptyProps, { slots }: SetupContext) => {
  return h(
    AntdvEmpty,
    {
      class: 'ns-empty',
      description: getDescription(props),
      image: getImage(props)
    },
    slots
  )
}
// + import => ./index.ts, ../components.ts
