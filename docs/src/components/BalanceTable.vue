<template>
  <h3>资金余额</h3>
  <p>&nbsp;</p>
  <ns-table :rows="balanceRows" :row-height="40">
      <ns-table-column field="科目名称" label="科目名称" width="180" />
      <ns-table-column field="科目类型" label="科目类型" width="180" />
      <ns-table-column field="科目编码" label="科目编码" width="180" />
      <ns-table-column field="科目级次" label="科目级次" width="180" />
      <ns-table-column-currency field="借方合计" label="借方合计" width="180" />
      <ns-table-column-currency field="贷方合计" label="贷方合计" width="180" />
      <ns-table-column-currency field="余额" label="余额" width="180" />
    </ns-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { NsTable, NsTableColumn, NsTableColumnNumber, NsTableColumnDatetime,
  NsTableColumnCurrency } from '@uxda/nutshell'

export type 科目余额 = {
  科目名称: string,
  科目类型: string,
  科目编码: string,
  科目级次: string,
  借方合计: number,
  贷方合计: number,
  余额: number,
}

const balanceRows = ref<科目余额[]>([])

function load () {
  axios.get<科目余额[]>('/json/balances.json').then(rsp => {
    balanceRows.value = rsp.data
  })
}

onMounted(() => {
  load()
})
</script>
