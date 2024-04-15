import { PropType } from 'vue'
import { Item } from '../shared/models'
import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'

const dataProps = {
  data: {
    type: Array as PropType<Item[]>,
    default: []
  }
}

export type DataProps = MakePropsType<typeof dataProps>

export const useDataProps = buildProps(dataProps)
