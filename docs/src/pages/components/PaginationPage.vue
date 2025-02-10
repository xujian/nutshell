

<template>
  <a-config-provider :locale="zhCN">
    <ns-page class="button-page">
      <ns-page-content>
        <h1>分页</h1>
        <p class="caption">&lt;ns-pagination&gt;</p>
        <p>&nbsp;</p>
        <note>采用分页的形式分隔长列表，每次只加载一个页面</note>
        <p>&nbsp;</p>
        <h2>基本用法</h2>
        <div class="flex flex-column mt-12px">
          <ns-table
            :loading="loading"
            :max-height="600"
            :rows="tableData">
            <ns-table-column type="number" label="序号" width="50" align="center" fixed="left"/>
            <ns-table-column field="name" label="姓名" sortable width="110" fixed="left"/>
            <ns-table-column-rating field="grade"
                                    color="#ff8400" label="客户等级" width="150"/>
            <ns-table-column field="userId" label="创建用户" width="120"/>
            <ns-table-column field="followerId" label="当前跟进用户" width="120"/>
            <ns-table-column-datetime field="inviteStart" label="邀约时间" width="170"/>
            <ns-table-column field="submitUserId" label="邀约提交人员" width="180"/>
            <ns-table-column-datetime field="inputDate" label="邀约提交时间" width="170"/>
            <ns-table-column field="userIds" label="协助谈单人员" width="180"/>
            <ns-table-column field="userIds" label="是否确认" width="180"/>
            <ns-table-column field="num" label="客户人数" width="100"/>
            <ns-table-column-datetime field="confirmStart" label="确定上门时间" width="200"/>
            <ns-table-column field="confirmUserId" label="确定提交人员" width="160"/>
            <ns-table-column-datetime field="confirmDate" label="确定提交时间" width="170"/>
            <ns-table-column-custom field="id" width="60px" fixed="right" label="操作">
              <template #content="row">
                <a href="javascript:void(0);" class="text-sm" v-if="row.stage === '线索'">删除</a>
              </template>
            </ns-table-column-custom>
          </ns-table>
          <ns-pagination
            v-model="pagination.page"
            :page-size="pagination.pageSize"
            :total="pagination.total"
            class="flex justify-end"
            @change="onPaginationChange"/>
        </div>
      </ns-page-content>
    </ns-page>
  </a-config-provider>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from 'vue'
// noinspection TypeScriptCheckImport
import axios from "axios";
import dayjs from "dayjs";
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const loading = ref(false)
const tableData = ref<any[]>([])

function formatDateTime(input: number | string) {
  if (!input) return ''
  const timeValue = dayjs(+input)
  return timeValue.format('YYYY-MM-DD HH:MM')
}

function formatRangedDateTime(input: number | string) {
  if (!input) return ''
  const timeValue = dayjs(+input),
    date = timeValue.format('YYYY-MM-DD'),
    hour = timeValue.hour()
  const time = hour === 9
    ? '09:00-10:00'
    : `${hour}:00-${hour + 2}:00`
  return `${date} ${time}`
}

async function translate(dict: string, source: any[], field: string) {
  const response = await axios.get(`/dicts/${dict}.json`),
    entries = response.data
  return source.map(s => {
    const word = s[field],
      meaning = entries.find((e: any) => e.value === word)
    s[field] = meaning?.label || word
    return s
  })
}

function fetchTableData() {
  loading.value = true
  axios.get('/json/table-data-visits.json')
    .then(response => response.data)
    // pipes to translate keys to labels
    .then(data => data.map(
      (d: any, index: number) => ({
        ...d,
        no: index + 1,
        inviteStart: formatRangedDateTime(d.inviteStart),
        inviteEnd: formatRangedDateTime(d.inviteEnd),
        confirmStart: formatRangedDateTime(d.confirmStart),
        confirmEnd: formatRangedDateTime(d.confirmEnd),
        confirmDate: formatDateTime(d.confirmDate),
        inputDate: formatDateTime(d.inputDate),
      })))
    .then(source => translate('stage', source, 'stage'))
    // 模拟分页
    .then(result => {
      pagination.total = result.length
      const start = (pagination.page - 1) * pagination.pageSize
      return result.slice(start, start + pagination.pageSize)
    })
    .then(result => {
      console.log('.........then result', result)
      tableData.value = result
      loading.value = false
    })
}

fetchTableData()

const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
})

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
  fetchTableData()
}

</script>

<style scoped lang="scss">
.switch-page {
}
</style>
