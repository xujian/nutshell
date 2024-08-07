import { PropType } from 'vue'
import { buildProps } from '../utils/props'
import { UniData } from '../shared/UniData'
import { MakePropsType } from '../utils'

const dataProps = {
  data: {
    type: Array as PropType<UniData[]>,
    default: []
  }
}

export type DataProps = MakePropsType<typeof dataProps>

export const useDataProps = buildProps(dataProps)
