<template>
  <ns-table ref="tableRef"
    :rows="balanceRows">
    <ns-table-column
      editable
      field="科目名称"
      label="科目名称"
      width="600"
      align="left" />
    <ns-table-column
      field="科目类型"
      label="科目类型"
      width="120"
      :editable="{
        component: 'select',
        options: 科目类型表,
        onChange: onKemuChange
      }" />
    <ns-table-column field="科目编码" label="科目编码" width="120" />
    <ns-table-column field="科目级次" label="科目级次" width="120" />
    <ns-table-column-currency
      field="借方合计"
      label="借方合计"
      align="right"
      width="120"
      editable="number-input"
      @change="onNumberInputChange" />
    <ns-table-column-currency field="贷方合计" label="贷方合计" align="right" width="120" />
    <ns-table-column-currency field="余额" label="余额" align="right" width="120" />
  </ns-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { NsTable, NsTableColumn, NsTableColumnNumber, NsTableColumnDatetime,
  NsTableColumnCurrency } from '@uxda/nutshell'

const tableRef = ref(null)

const 科目类型表 = [
  {
    label: '资产',
    value: '资产'
  },
  {
    label: '负债',
    value: '负债'
  },
  {
    label: '收入',
    value: '收入'
  },
  {
    label: '费用',
    value: '费用'
  },
]

export type 科目余额 = {
  科目名称: string,
  科目类型: string,
  科目编码: string,
  科目级次: string,
  借方合计: number,
  贷方合计: number,
  余额: number,
}

function onKemuChange ({row}) {
  console.log('===onKemuChange', row)
}

const balanceRows = ref<科目余额[]>([])

function load () {
  axios.get<科目余额[]>('/json/balances.json').then(rsp => {
    balanceRows.value = rsp.data
  })
}

function onNumberInputChange ({row, field, value}) {
  console.log('===onNumberInputChange row column value', row, field, value)
}

onMounted(() => {
  load()
})
</script>
