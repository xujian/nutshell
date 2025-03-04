import { ref, computed, type PropType } from 'vue'
import { useNutshell } from '../types'
import { buildProps } from '../utils/private/props'
export const selectableProps = ({
  /**
   * Enable selection mode
   */
  selectable: {
    type: Boolean,
    default: false
  },
  /**
   * Selected items
   */
  selected: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

/**
 * Make a component selectable
 */
export const useSelectableProps = buildProps(selectableProps)

export type SelectableEmits = {
  'update:selected': (value: any[]) => void,
  'selection-change': (value: any[]) => void
}

export const selectableEmits: SelectableEmits = {
  'update:selected': (value) => Array.isArray(value),
  'selection-change': (value) => Array.isArray(value)
}

/**
 * Make a component selectable
 * @param props 
 * @param emit 
 * @returns 
 */
export function useSelectable (props: any, emit: any) {
  const $n = useNutshell()
  const selected = ref<any[]>(props.selected || [])
  
  const isSelecting = computed(() => props.selectable)

  const find = (what: any) => {
    if (what.id) {
      return selected.value.findIndex(item => what.id === item.id)
    } else {
      $n.toast('数据项没有 id 字段', {})
      return -1
    }
  }
  
  /**
   * Toggle selected item
   * @param item 
   */
  const toggleSelected = (item: any, index?: number) => {
    if (!props.selectable) return
    
    const found = find(item)
    if (found > -1) {
      selected.value.splice(found, 1)
    } else {
      selected.value.push({
        ...item,
        $_selectable_index: index
      })
    }

    emit('update:selected', selected.value)
    emit('selection-change', selected.value)
  }
  
  const isSelected = (item: any) => {
    return find(item) > -1
  }
  
  return {
    isSelecting,
    selected,
    toggleSelected,
    isSelected
  }
} 