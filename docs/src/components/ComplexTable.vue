<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'

const columns = [
  {
    type: 'checkbox'
  },
  {
    title: '序号',
    width: 70,
    field: 'no',
    align: 'center',
    fixed: 'left',
  },
  { title: '姓名', field: 'name', width: 110, fixed: 'left' },
  { title: '手机号码', field: 'phone', width: 130 },
  { title: '呼叫', field: 'phone', width: 60 },
  { title: '跟进', field: 'id', width: 80 },
  { title: '客户等级', field: 'grade', width: 150 },
  {
    title: '创建用户',
    field: 'userId',
    width: 120,
  },
  {
    title: '当前跟进用户',
    field: 'followerId',
    width: 120,
  },
  { title: '客户阶段', field: 'stage', width: 90 },
  { title: '邀约上门时间', field: 'inviteStart', width: 200 },
  { title: '邀约提交人员', field: 'submitUserId', width: 120 },
  { title: '邀约提交时间', field: 'inputDate', width: 160 },
  { title: '协助谈单人员', field: 'userIds', width: 180 },
  { title: '是否确认', field: 'userIds', width: 120 },
  { title: '客户人数', field: 'num', width: 120 },
  { title: '确定上门时间', field: 'confirmStart', width: 200 },
  { title: '确定提交人员', field: 'confirmUserId', width: 160 },
  {
    title: '确定提交时间',
    field: 'confirmDate',
    width: 160,
  },
  {
    title: '操作',
    field: 'operation',
    fixed: 'right',
    width: 80,
  },
]

const tableData = ref<any[]>([])

const columnsOfUserId = [
  'followerId',
  'userId',
  'confirmUserId',
  'submitUserId',
  'userIds'
]

function formatDateTime (input: number | string) {
  if (!input) return ''
  const timeValue = dayjs(+input)
  return timeValue.format('YYYY-MM-DD HH:MM')
}

function formatRangedDateTime (input: number | string) {
  if (!input) return ''
  const timeValue = dayjs(+input),
    date = timeValue.format('YYYY-MM-DD'),
    hour = timeValue.hour()
  const time = hour === 9
    ? '09:00-10:00'
    : `${hour}:00-${hour + 2}:00`
  return `${date} ${time}`
}

async function translate (dict: string, source: any[], field: string) {
  const response = await axios.get(`/dicts/${dict}.json`),
    entries = response.data
  return source.map(s => {
    const word = s[field],
      meaning = entries.find((e: any) => e.value === word)
    s[field] = meaning?.label || word
    return s
  })
}

function fetchTableData () {
  axios.get('/json/table-data-visits.json')
    .then(response => response.data)
    // pipes to translate keys to labels
    .then(data => data.map(
      (d: any, index: number) => ({
        ...d,
        no: index + 1,
        phone: JSON.parse(d.phone)?.['mask'] || '',
        inviteStart: formatRangedDateTime(d.inviteStart),
        inviteEnd: formatRangedDateTime(d.inviteEnd),
        confirmStart: formatRangedDateTime(d.confirmStart),
        confirmEnd: formatRangedDateTime(d.confirmEnd),
        confirmDate: formatDateTime(d.confirmDate),
        inputDate: formatDateTime(d.inputDate),
      })))
    .then(source => translate('stage', source, 'stage'))
    .then(data => lookupNamesFromId(data, columnsOfUserId))
    .then(result => {
      console.log('.........then result', result)
      tableData.value = result
    })
}

/**
 * 批量从 user id 反查姓名
 * @param source 原始数据
 * @param columns 要转译的字段组
 */
async function lookupNamesFromId (source: any[], columns: string[]) {
  const nameServiceUrl = '/cas/sysUser/getFullNameById'
  // 汇总所有字段的 user id
  // 去重后发送到后端接口查询
  const fields = columns.map(column => ({
    name: column,
    ids: source.map(row => row[column]
      ?.split(',') || [])
      .reduce((a, b) => [...a, ...b]),
  }))
  const flatIds = fields.map(field => field.ids)
      .reduce((a, b) => [...a, ...b]),
    distinctIds = Array.from(new Set(flatIds))
      .filter(a => !!a)
  // return await axios.post(nameServiceUrl, distinctIds)
  return axios.get('/json/name-service.json')
    .then(response => response.data)
    .then(result => source.map(row => ({
      ...row,
      ...columns.map(column => ({ // 用查询到的LABEL覆盖掉原有的ID
          [column]: row[column] // 有逗号分隔的ID
            ?.split(',')
            .map((id: string) => result[id] ?? '')
            .join(',')
          })
        ).reduce((a, b) => ({...a, ...b}))
    })))
}

function getStageStyle (value: string) {
  const styles: Record<string, string> = {
    线索: 'color: #2dab49;background: rgba(45, 171, 73, 0.1);',
    上门: 'color: #4185e1;background: rgba(65, 133, 225, 0.1);',
    submitOrder: 'color: #efc50d;background: rgba(242, 205, 43, 0.1);',
    confirmOrder: 'color: #7734d3;background: rgba(198, 162, 248, 0.1);',
    loan: 'color: #f96188;background: rgba(252, 149, 176, 0.1);',
    finishOrder: 'color: #fd6433;background: rgba(255, 169, 142, 0.1);',
    终止: 'color: #767676;background: rgba(205, 205, 205, 0.1);',
    结单: 'color: #1AC095;background: rgba(44, 192, 154, 0.1);',
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
</script>
<template>
  <ns-table :rows="tableData" :columns="columns" class="no-border">
    <ns-table-column-icon
      source="/icons/call.svg"
      color="accent"
      match="呼叫"
      @click="onTableColumnIconClick" />
    <ns-table-column-chip
      match="客户阶段"
      :extraStyle="(model: string) => getStageStyle(model)" />
    <ns-table-column-rating
      color="#ff8400"
      match="客户等级" />
    <ns-table-column-button
      match="跟进"
      label="跟进"
      color="accent"
      size="xs"
      @click="onTableColumnButtonClick"
    />
    <ns-table-column-custom match="操作">
      <template #content="record">
        <a href="javascript:void(0);" v-if="record.stage === '线索'">删除</a>
      </template>
    </ns-table-column-custom>
  </ns-table>
</template>