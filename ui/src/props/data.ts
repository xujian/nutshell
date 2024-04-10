import { PropType } from 'vue'
import { NameValuePair } from '../shared/models'
import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'

const dataProps = {
  data: {
    type: Array as PropType<NameValuePair[]>,
    default: []
  }
}

export type DataProps = MakePropsType<typeof dataProps>

export const useDataProps = buildProps(dataProps)
