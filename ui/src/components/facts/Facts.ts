import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { UnitDataItem } from '../../shared/models'

export type FactsItem = {
  span?: number,
} & UnitDataItem

export const factsProps = {
  items: Array as PropType<FactsItem[]>
}

export type FactsEmits = {
}

const factsEmits: FactsEmits = {
}

export type FactsSlots = {
  default: never,
}

export type FactsProps = MakePropsType<typeof factsProps, FactsEmits>

/**
 * 详情表 组件 <ns-facts>
 */
export const NsFacts = define({
  name: 'NsFacts',
  props: factsProps,
  emits: factsEmits,
  setup (props, ctx) {
    return {
    }
  }
})
