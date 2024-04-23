import { PropType } from 'vue'
import { UniDataItem } from '../shared'
import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'

const dataProps = {
  data: {
    type: Array as PropType<UniDataItem[]>,
    default: []
  }
}

export type DataProps = MakePropsType<typeof dataProps>

export const useDataProps = buildProps(dataProps)
