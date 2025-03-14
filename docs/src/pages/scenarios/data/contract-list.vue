<template>
  <ns-page class="file-list">
    <ns-card fill="#fff" r="10px" class="table-bar">
      <div style="display: flex; justify-content: end; margin-bottom: 12px;">
        <ns-button color="primary">刷新状态</ns-button>
        <ns-button color="primary" variant="outlined">批量下载</ns-button>
      </div>
      <ns-table
        :rows="tableData"
        class="no-border"
        cache-columns="1"
        :hasPagination="false"
        has-column-control
        :filter-handler="filterHandler"
      >
        <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
        <ns-table-column field="contractNo" label="合同编号" align="left" />
        <ns-table-column field="name" label="合同名称" align="left"  />
        <ns-table-column field="contractType" label="合同签署类型" align="left"  />
        <ns-table-column field="signers" label="签署方名称" width="180" align="left"  />
        <ns-table-column field="contractStatus" label="合同状态" align="left" />
        <ns-table-column field="stateDate" label="状态更新时间" align="left" />
        <ns-table-column field="createTime" label="创建时间" align="left" />
        <ns-table-column field="createBy" label="创建用户" align="left" />
        <ns-table-column field="fromByCode" label="创建来源" align="left" />
        <ns-table-column-custom field="id"  align="left" width="250" fixed="right" label="操作">
          <template #content="{ row }">
            <ns-button variant="plain" color="primary">预览</ns-button>
            <ns-button variant="plain" color="primary">推送签约</ns-button>
            <ns-button variant="plain" color="negtive">取消签署</ns-button>
          </template>
        </ns-table-column-custom>
      </ns-table>
      <ns-pagination
        :current="pagination.page"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        class="flex justify-end"
        @change="onPaginationChange"/>
    </ns-card>
  </ns-page>
</template>

<script setup lang="ts">
import type { TableFilterHandler } from '@uxda/nutshell'
import { ref, reactive } from 'vue'
import axios from 'axios'
const tableData = ref<any[]>([])
const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
})


const filterHandler: TableFilterHandler = (queries: any[]) => {
  fetchTableData()
}

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
  fetchTableData()
}

function fetchTableData(){
  axios
    .get('/json/table-data-contract.json')
    .then((response) => response.data)
    // pipes to translate keys to labels
    .then((result) => {
      pagination.total = result.result.total
      tableData.value = result.result.list.map((it, index) => {
        return {...it, no: index + 1}
      })

      console.log(tableData.value)
    })
}
fetchTableData()
</script>

<style scoped lang="scss">
</style>
