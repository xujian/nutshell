<template>
  <ns-page class="file-list">
    <ns-card fill="#fff" r="10px" class="table-bar">
      <ns-table
        :rows="tableData"
        class="no-border"
        cache-columns="1"
        :hasPagination="false"
        has-column-control
        :filter-handler="filterHandler"
      >
        <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
        <ns-table-column field="name" label="登录名" align="left" />
        <ns-table-column field="userName" label="姓名" align="left"  />
        <ns-table-column field="phone" label="手机" align="left"  />
        <ns-table-column field="role" label="角色" width="180" align="left"  />
        <ns-table-column field="status" label="状态" align="left" />
        <ns-table-column field="createTime" label="创建时间" align="left" />
        <ns-table-column field="updateTime" label="最后更新时间" align="left" />
        <ns-table-column-custom field="id"  align="left" fixed="right" label="操作">
          <template #content="{ row }">
            <ns-button variant="plain">编辑</ns-button>
            <ns-button variant="plain">禁用</ns-button>
            <ns-button variant="plain" color="negtive">删除</ns-button>
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
    .get('/json/table-data-user.json')
    .then((response) => response.data)
    // pipes to translate keys to labels
    .then((result) => {
      pagination.total = result.result.total
      tableData.value = result.result.list
    })
}
fetchTableData()
</script>

<style scoped lang="scss">
.file-list {
}
</style>
