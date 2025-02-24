<template>
  <ns-pagination
    :current="pagination.page"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    :pageSizeOptions
    class="flex justify-end"
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

const pageSizeOptions = reactive(['10', '20', '30', '40', '50'])
</script>
