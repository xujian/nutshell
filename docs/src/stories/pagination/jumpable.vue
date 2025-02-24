<template>
  <ns-pagination
    :current="pagination.page"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    :jumpable="false"
    class="flex justify-end"
    @change="onPaginationChange"/>

  <ns-pagination
    :current="pagination.page"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    disabled
    class="flex justify-end"
    style="margin-top: 10px"
    @change="onPaginationChange"/>
</template>
<script lang="ts" setup>
import {reactive} from 'vue'

const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 30,
})

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
}
</script>
