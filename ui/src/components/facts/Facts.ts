import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { UniDataItem } from '../../shared'
import { useDesignProps, useFlexProps, useVariantProps } from '../../props'

export type FactsItem = {
  span?: number,
} & UniDataItem

export const factsProps = {
  items: {
    type: Array as PropType<FactsItem[]>,
  },
  /**
   * 纵向
   */
  vertical: {
    type: Boolean,
  },
  /**
   * 横排列数
   */
  columns: {
    type: Number,
  },
  /**
   * 字体大小
   */
  fontSize: {
    type: String
  },
  ...useVariantProps(),
  ...useDesignProps(),
  ...useFlexProps(),
}

export type FactsEmits = {
}

const factsEmits: FactsEmits = {
}

export type FactsSlots = {
  default: never,
  item: never
  fontSize: String
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
  },
  fontSize: {
    type: String
  },
  ...useFlexProps(),
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
      props: {
      }
    }
  }
})
