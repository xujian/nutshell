<template>
  <ns-page class="customer-list">
    <ns-card fill="#fff" r="10px" class="search-bar">
      <ns-input v-model="searchQuery" placeholder="请输入客户名称进行搜索" name="searchQuery" clearable />
      <ns-button style="margin-left: 12px" color="primary" @click="handleSearch">搜索</ns-button>
      <ns-button variant="outlined" @click="handleReset">重置</ns-button>
      <ns-button color="primary" variant="outlined" @click="handleExport">导出</ns-button>
    </ns-card>

    <ns-card fill="#fff" r="10px" class="table-bar">
      <ns-table
        :rows="tableData"
        class="no-border"
        borders="all"
        cache-columns="1"
        :hasPagination="false"
        has-column-control
        :filter-handler="filterHandler"
      >
        <ns-table-column-checkbox width="48" @change="onTableRowSelected" field="id" fixed="left" />
        <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
        <ns-table-column field="name" label="姓名" align="left" sortable width="110" fixed="left" />
        <ns-table-column-crypto
          :enabled="false"
          field="phone"
          label="手机号码"
          width="140"
          @decrypt="decryptPhoneNumber"
        />
        <ns-table-column-icon
          field="phone"
          label="呼叫"
          width="80"
          source="/icons/call.svg"
          description="有电话号码的可以直接呼叫"
          @click="onTableColumnIconClick"
        />
        <ns-table-column-button
          field="id"
          width="80"
          label="跟进"
          color="accent"
          size="xs"
          @click="onTableColumnButtonClick"
        />
        <ns-table-column-rating
          field="grade"
          @change="onRatingColumnChange"
          :filterable="gradeFilterableOptions"
          color="#ff8400"
          label="客户等级"
          width="150"
        />
        <ns-table-column field="userId" label="创建用户" width="120" />
        <ns-table-column-chips
          field="tags"
          :editable="{
            component: NsChips,
            options: allTags
          }"
          :overflow="false"
          @edit-complete="onColumnEditComplete"
          color="secondary"
          label="标签"
          width="300"
        />
        <ns-table-column editable field="followerId" label="当前跟进用户" width="140" />
        <ns-table-column-chip
          field="stage"
          width="100"
          label="客户阶段"
          :filterable="stageFilterableOptions"
          :extraStyle="(model: string) => getStageStyle(model)"
        />
        <ns-table-column-datetime
          field="inviteStart"
          label="邀约时间"
          width="170"
          :filterable="inviteFilterSettings"
          @change="onInviteFilterChange"
        />
        <ns-table-column field="submitUserId" label="邀约提交人员" width="180" />
        <ns-table-column-datetime field="inputDate" label="邀约提交时间" width="170" />
        <ns-table-column field="userIds" :hidden="true" label="协助谈单人员" width="180" />
        <ns-table-column field="userIds" label="是否确认" width="180" />
        <ns-table-column field="num" label="客户人数" width="100" />
        <ns-table-column-datetime field="confirmStart" label="确定上门时间" width="200" />
        <ns-table-column field="confirmUserId" label="确定提交人员" width="160" />
        <ns-table-column-datetime field="confirmDate" label="确定提交时间" width="170" />
        <ns-table-column-custom field="id" width="68" align="left" fixed="right" label="操作">
          <template #content="{ row }">
            <ns-button variant="plain" color="negtive" label="删除" v-if="row.stage === '线索'">
              <ns-popover-confirm v-model="row.popoverOpen"
                title="提示"
                trigger="click"
                @ok="handleDelete(row)">是否禁用?
                </ns-popover-confirm>
            </ns-button>
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
import { ref, reactive } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import {
  NsDateRangeInput,
  NsChips,
  type CryptoSecret,
  type TableFilterHandler
} from '@uxda/nutshell'

const searchQuery = ref('')
const tableData = ref<any[]>([])

const columnsOfUserId = ['followerId', 'userId', 'confirmUserId', 'submitUserId', 'userIds']

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
  const time = hour === 9 ? '09:00-10:00' : `${hour}:00-${hour + 2}:00`
  return `${date} ${time}`
}

async function translate(dict: string, source: any[], field: string) {
  const response = await axios.get(`/dicts/${dict}.json`),
    entries = response.data
  return source.map((s) => {
    const word = s[field],
      meaning = entries.find((e: any) => e.value === word)
    s[field] = meaning?.label || word
    return s
  })
}

const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
})

function fetchTableData() {
  axios
    .get('/json/table-data-visits.json')
    .then((response) => response.data)
    // pipes to translate keys to labels
    .then((data) =>
      data.map((d: any, index: number) => ({
        ...d,
        no: index + 1,
        inviteStart: formatRangedDateTime(d.inviteStart),
        inviteEnd: formatRangedDateTime(d.inviteEnd),
        confirmStart: formatRangedDateTime(d.confirmStart),
        confirmEnd: formatRangedDateTime(d.confirmEnd),
        confirmDate: formatDateTime(d.confirmDate),
        inputDate: formatDateTime(d.inputDate)
      })))
    .then((source) => translate('stage', source, 'stage'))
    .then((data) => lookupNamesFromId(data, columnsOfUserId))
    .then((result) => {
      pagination.total = result.length
      const start = (pagination.page - 1) * pagination.pageSize
      return result.slice(start, start + pagination.pageSize)
    })
    .then((result) => {
      console.log('.........then result', result)
      tableData.value = result
    })
}

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
  fetchTableData()
}
/**
 * 批量从 user id 反查姓名
 * @param source 原始数据
 * @param columns 要转译的字段组
 */
async function lookupNamesFromId(source: any[], columns: string[]) {
  const nameServiceUrl = '/cas/sysUser/getFullNameById'
  // 汇总所有字段的 user id
  // 去重后发送到后端接口查询
  const fields = columns.map((column) => ({
    name: column,
    ids: source.map((row) => row[column]?.split(',') || []).reduce((a, b) => [...a, ...b])
  }))
  const flatIds = fields.map((field) => field.ids).reduce((a, b) => [...a, ...b]),
    distinctIds = Array.from(new Set(flatIds)).filter((a) => !!a)
  // return await axios.post(nameServiceUrl, distinctIds)
  return axios
    .get('/json/name-service.json')
    .then((response) => response.data)
    .then((result) =>
      source.map((row) => ({
        ...row,
        ...columns
          .map((column) => ({
            // 用查询到的LABEL覆盖掉原有的ID
            [column]: row[column] // 有逗号分隔的ID
              ?.split(',')
              .map((id: string) => result[id] ?? '')
              .join(',')
          }))
          .reduce((a, b) => ({ ...a, ...b }))
      }))
    )
}

function getStageStyle(value: string) {
  const styles: Record<string, string> = {
    线索: 'color: #2dab49;background: rgba(45, 171, 73, 0.1);',
    上门: 'color: #4185e1;background: rgba(65, 133, 225, 0.1);',
    submitOrder: 'color: #efc50d;background: rgba(242, 205, 43, 0.1);',
    confirmOrder: 'color: #7734d3;background: rgba(198, 162, 248, 0.1);',
    loan: 'color: #f96188;background: rgba(252, 149, 176, 0.1);',
    finishOrder: 'color: #fd6433;background: rgba(255, 169, 142, 0.1);',
    终止: 'color: #767676;background: rgba(205, 205, 205, 0.1);',
    结单: 'color: #1AC095;background: rgba(44, 192, 154, 0.1);'
  }
  return styles[value] ?? styles.intention
}

const onTableColumnIconClick = (props: any) => {
  console.log('*******onTableColumnIconClick.........model:', props)
}

const onTableColumnButtonClick = (props: any) => {
  console.log('*******onTableColumnButtonClick.........model:', props)
}

fetchTableData()

const decryptPhoneNumber = async (data: CryptoSecret) => {
  return Promise.resolve('18618477654')
  // 调用远端接口解密手机号
}

const stageFilterableOptions = {
  data: [
    {
      label: '线索',
      value: '线索'
    },
    {
      label: '上门',
      value: '上门'
    },
    {
      label: '终止',
      value: '终止'
    }
  ]
}

const gradeFilterableOptions = {
  data: [
    {
      label: '1',
      value: 1
    },
    {
      label: '2',
      value: 2
    },
    {
      label: '3',
      value: 3
    },
    {
      label: '4',
      value: 4
    },
    {
      label: '5',
      value: 5
    }
  ]
}

const allTags = [
  {
    label: '微信',
    value: 'WX'
  },
  {
    label: '有车',
    value: 'YC'
  },
  {
    label: '有房',
    value: 'YF'
  },
  {
    label: '本市户口',
    value: 'BSHK'
  }
]

const selectedRows = ref<any[]>([])

const onTableRowSelected = (selected: any[]) => {
  selectedRows.value = selected
}

/**
 * 执行远端筛选
 * 提交参数给后端接口
 * 重新查询数据
 */
const filterHandler: TableFilterHandler = (queries: any[]) => {
  console.log('===filterHandler queries:', queries)
  fetchTableData()
}

const onColumnEditComplete = ({ field, value }) => {
  console.log('===field', field, value)
}

const onRatingColumnChange = (value: number, row) => {
  row.grade = value
  console.log('===ComplexTable.vue onRatingColumnChange', value, row)
}

// 邀约时间
const inviteFiltersValue = ref()

/**
 * 邀约时间的自定义筛选
 */
const inviteFilterSettings = {
  component: NsDateRangeInput,
  props: {
    inside: true,
    variant: 'plain'
  },
  // v-model 对应的 ref 单独传入
  model: inviteFiltersValue
}

// * 邀约时间的筛选处理
const onInviteFilterChange = (value: string[]) => {
  console.log('===onInviteFilterChange value', value)
}
// 搜索按钮触发的方法
const handleSearch = () => {
  console.log('执行搜索操作')
}

// 重置按钮触发的方法
const handleReset = () => {
  searchQuery.value = ''
  console.log('重置搜索条件')
}

// 导出按钮触发的方法
const handleExport = () => {
  console.log('导出数据')
}

// 删除
const handleDelete = (row) => {
  console.log(row)
}
</script>

<style scoped lang="scss">
.customer-list {
}
</style>
