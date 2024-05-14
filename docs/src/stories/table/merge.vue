<template>
  <ns-table :rows="records"
    :row-height="28"
    borders="all"
    :mergingCells
    :mergingCellsMaster
    :row-hoverable="false">
    <ns-table-column field="流水号" label="流水号" width="120" />
    <ns-table-column-datetime field="记账日期" label="记账日期" width="140" format="YYYY-MM-DD" />
    <ns-table-column field="记账凭证号" label="记账凭证号" width="120" />
    <ns-table-column field="科目编码" label="科目编码" width="120" />
    <ns-table-column field="科目名称" label="科目名称" width="120" />
    <ns-table-column-currency field="借方发生额" label="借方发生额" width="120" />
    <ns-table-column-currency field="贷方发生额" label="贷方发生额" width="120" />
    <ns-table-column field="制单人" width="100" label="制单人" />
    <ns-table-column field="复核人" width="100" label="复核人" />
    <ns-table-column field="记账人" width="100" label="记账人" />
  </ns-table>
  <div class="row">
    <ns-button color="primary" @click="mergeByValue">按数值合并行</ns-button>
    <ns-button color="primary" @click="mergeByMaster">按主列合并行</ns-button>
    <ns-button color="negtive" @click="dontMerge">不合并</ns-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import axios from 'axios'
import { NsTable, NsTableColumn,
  NsTableColumnCurrency } from '@uxda/nutshell'

const records: Ref<any[]> = ref([])

const mergingCellsColumns = ['流水号', '记账日期', '记账凭证号', '制单人', '复核人', '记账人']

const mergingCells = ref(mergingCellsColumns),
  mergingCellsMaster = ref()



function mergeByValue () {
  mergingCellsMaster.value = void 0
  mergingCells.value = mergingCellsColumns
}

function mergeByMaster () {
  mergingCellsMaster.value = '流水号'
  mergingCells.value = mergingCellsColumns
}

function dontMerge () {
  mergingCells.value = []
}

function load () {
  axios.get('/json/accounting-records.json').then(rsp => {
    records.value = rsp.data
  })
}

onMounted(() => {
  load()
})
</script>
