<template>
  <ns-table ref="tableRef"
    :rows="balanceRows"
    :paging="paging"
    @page-change="onPageChange">
    <ns-table-column field="科目名称" label="科目名称" width="600" align="left" />
    <ns-table-column field="科目类型" label="科目类型" width="120" hidden />
    <ns-table-column field="科目编码" label="科目编码" width="120" />
    <ns-table-column field="科目级次" label="科目级次" width="120" />
    <ns-table-column-currency field="借方合计" label="借方合计" align="right" width="120" />
    <ns-table-column-currency field="贷方合计" label="贷方合计" align="right" width="120" />
    <ns-table-column-currency field="余额" label="余额" align="right" width="120" />
  </ns-table>
  <p>&nbsp;</p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { NsTable, NsTableColumn,
  NsTableColumnCurrency,
  usePaging,
  type Paging,
  type WithPaging} from '@uxda/nutshell'
import { useHttp } from '@/plugins'

const $http = useHttp()
const tableRef = ref(null)
const page = ref(1)
const paging = ref<Paging>()

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

async function 获取科目余额 (page: number) {
  const result = await $http.get<WithPaging<科目余额[]>>('/json/balances-paging.json', { page })
  balanceRows.value = result.data
  paging.value = result.paging
  return result
}

const { nextPage } = usePaging(获取科目余额)

function onPageChange (value: number) {
  page.value = 1
  nextPage(value)
}

onMounted(() => {
  nextPage(1)
})
</script>
