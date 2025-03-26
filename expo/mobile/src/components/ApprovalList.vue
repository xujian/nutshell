<template>
  <ns-repeator :data="data" v-slot="item"
    class="approval-list"
    direction="column"
    justify="stretch"
    align="stretch"
    :gap="10">
    <ns-card fill="#fff">
      <template #header>
       <ns-chip :label="item.审批状态" fill="#FFC107" />
      </template>
      <template #footer>
        <ns-button variant="plain" size="sm" color="negtive">删除</ns-button>
        <div style="flex-grow: 1;"/>
        <ns-button variant="outlined" size="sm" color="neutral">管理授权</ns-button>
        <ns-button variant="outlined" size="sm" color="positive">再次查询</ns-button>
      </template>
    </ns-card>
  </ns-repeator>
</template>

<script lang="ts" setup>
import { UniDataItem } from '@uxda/nutshell/taro'
import { computed, PropType } from 'vue'

const props = defineProps({
  items: Array as PropType<UniDataItem[]>,
  default: []
})

const data = computed(() => (props.items || []).map(item => ({
  ...item,
  facts: transformFacts(item)
})))

const keys = [
  '申请人',
  '企业名称',
  '授权状态',
  '创建用户',
]

/**
 *
 * @param item
 */
const transformFacts = (item: UniDataItem) => {
  const result = Object.entries(item)
    .filter(([k]) => keys.includes(k))
    .map(([k, v]) => ({
      label: k,
      value: v
    }))
    result.sort((a, b) => keys.indexOf(a.label) - keys.indexOf(b.label))
  return result
}
</script>
