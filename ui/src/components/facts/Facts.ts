import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { UniDataItem } from '../../shared'

export type FactsItem = {
  span?: number,
} & UniDataItem

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

export const factsItemProps = {
  label: {
    type: String,
  },
  span: {
    type: Number,
    default: 1,
  },
  value: {
    type: String,
  }
}

export type FactsItemSlots = {
  default: never,
}

export type FactsItemEmits = {
}

const factsItemEmits: FactsItemEmits = {
}

export type FactsItemProps = MakePropsType<typeof factsItemProps, FactsItemSlots>

export const NsFactsItem = define({
  name: 'NsFactsItem',
  props: factsItemProps,
  emits: factsItemEmits,
  setup (props, ctx) {
    return {
    }
  }
})
