<template>
  <h3>资金余额</h3>
  <p>&nbsp;</p>
  <ns-table ref="tableRef"
    :rows="balanceRows" :row-height="40"
    :hidden-columns="hiddenColumns">
    <ns-table-column field="科目名称" label="科目名称" width="180" />
    <ns-table-column field="科目类型" label="科目类型" width="180" hidden />
    <ns-table-column field="科目编码" label="科目编码" width="180" />
    <ns-table-column field="科目级次" label="科目级次" width="180" />
    <ns-table-column-currency field="借方合计" label="借方合计" width="180" />
    <ns-table-column-currency field="贷方合计" label="贷方合计" width="180" />
    <ns-table-column-currency field="余额" label="余额" width="180" />
  </ns-table>
  <p>&nbsp;</p>
  <ns-button color="primary" @click="onHideButtonClick">隐藏科目类型</ns-button>
  <ns-button color="primary" @click="onShowButtonClick">显示科目类型</ns-button>
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

// 三种方法设置 显示/隐藏列
// 1. 使用 visibleColumns 白名单
// 2. 使用 hiddenColumns 黑名单
// 3. 使用 <ns-table-column hidden />
//    列依旧输出只是初始状态隐藏
// 4. 使用 tableRef.value.hideColumns() / showClumns() 方法

const visibleColumns = [
  '科目名称',
  '科目类型',
  '科目编码',
  '科目级次',
  '借方合计',
  '余额',
]

const hiddenColumns = [
  '科目级次'
]

const balanceRows = ref<科目余额[]>([])

function load () {
  axios.get<科目余额[]>('/json/balances.json').then(rsp => {
    balanceRows.value = rsp.data
  })
}

function onHideButtonClick () {
  tableRef.value.hideColumns(['科目类型'])
}

function onShowButtonClick () {
  tableRef.value.showColumns(['科目类型'])
}


onMounted(() => {
  load()
})
</script>
