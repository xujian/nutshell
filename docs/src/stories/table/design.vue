<template>
  <ns-table ref="tableRef"
    :rows="balanceRows"
    :row-height="28"
    fill="primary"
    borders="all"
    foreground="#ffffff"
    header-color="#00000055"
    :header-height="48"
    :border-radius="0"
    border-color="#014080"
    round>
    <ns-table-column field="科目名称" label="科目名称" width="720" align="left" />
    <ns-table-column field="科目类型" label="科目类型" width="120" hidden />
    <ns-table-column field="科目编码" label="科目编码" width="120" />
    <ns-table-column field="科目级次" label="科目级次" width="120" />
    <ns-table-column-currency field="借方合计" label="借方合计" align="right" width="120" />
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
