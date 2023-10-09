<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import { useNutshell } from '@uxda/nutshell'
import { onMounted } from 'vue'
import { reactive } from 'vue'

/**
 * Format table cell
 * 表格单元的格式器
 * 1. 字典查找
 * 2. API查找
 * 3. 时间格式化
 * 4. 手机号码脱敏
 * 5. chip/chips
 * 6. 条件样式
 * 7. 就是要格式化
 * 
 * 方案:
 * 1. 需要定义一组 <ns-table-cell />?
 * 2. 定义一组数据格式化函数?
 */

const form = ref()
const formData = reactive({
  client: '陈旭军',
  selectedCity: '110100',
  registerDate: '2023-09-01',
})
const dialogVisible = ref(false)
const registerDate = ref<string>('2023-09-01')
const $n = useNutshell()

const buttonLabel = ref('Press')
const cities = ref<any[]>([])

onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map(d => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
})

setTimeout(() => {
  buttonLabel.value = 'Press Me'
}, 5e3)
/**
 * 
 */
const onClick = (...args: any[]) => {
  dialogVisible.value = true
  console.log('ns-button-------onClick', args)
}

const onOpenDialogButtonClick = () => {
  $n.dialog({
    title: '客户',
  })
  $n.toast('客户信息已保存')
}

const onDialogClose = (value: boolean) => {
  console.log('closeDialog..............,', value)
}

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

const columns = [
  {
    title: '序号',
    width: 70,
    dataIndex: 'no',
    align: 'center',
    fixed: 'left',
  },
  { title: '姓名', dataIndex: 'name', width: 120, fixed: 'left' },
  { title: '手机号码', dataIndex: 'phone', width: 130 },
  { title: '呼叫', dataIndex: 'phone', width: 60 },
  { title: '跟进', dataIndex: 'id', width: 80 },
  { title: '客户等级', dataIndex: 'grade', width: 150 },
  {
    title: '创建用户',
    dataIndex: 'userId',
    width: 120,
  },
  {
    title: '当前跟进用户',
    dataIndex: 'followerId',
    width: 120,
  },
  { title: '客户阶段', dataIndex: 'stage', width: 90 },
  { title: '邀约上门时间', dataIndex: 'inviteStart', width: 200 },
  { title: '邀约提交人员', dataIndex: 'submitUserId', width: 120 },
  { title: '邀约提交时间', dataIndex: 'inputDate', width: 160 },
  { title: '协助谈单人员', dataIndex: 'userIds', width: 180 },
  { title: '是否确认', dataIndex: 'userIds', width: 120 },
  { title: '客户人数', dataIndex: 'num', width: 120 },
  { title: '确定上门时间', dataIndex: 'confirmStart', width: 200 },
  { title: '确定提交人员', dataIndex: 'confirmUserId', width: 160 },
  {
    title: '确定提交时间',
    dataIndex: 'confirmDate',
    width: 160,
  },
  {
    title: '操作',
    dataIndex: 'operation',
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
  <div class="welcome">
    <h1>Nutshell Desktop Expo</h1>
    <a-form ref="form" name="welcome" autocomplete="off"
      :model="formData">
      <ns-row gutter="0">
        <ns-col span="24">
          <ns-button
            size="sm"
            width="100"
            color="#ff9900"
            :label="buttonLabel" @click="onClick" />
          <ns-button
            size="sm"
            width="100"
            color="negtive"
            label="Open Dialog" @click="onOpenDialogButtonClick" />
          <ns-chip label="线索"></ns-chip>
          <ns-icon source="/icons/call.svg" />
        </ns-col>
        <ns-col span="24">
          <ns-input name="client" type="text" label="客户名称"
            placeholder="客户名称"
            v-model="formData.client"
            :rules="['required']" />
        </ns-col>
        <ns-col span="24">
          <ns-date-input name="registerDate" label="选择日期"
            v-model="registerDate"
            :rules="['required']" />
        </ns-col>
        <ns-col span="24">
          <ns-select name="registerLocation"
            :options="cities" label="注册地区" searchable
            v-model="formData.selectedCity"
            :rules="['required']"
          ></ns-select>
        </ns-col>
      </ns-row>
    </a-form>
    <ns-table :rows="tableData" :columns="columns">
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
    </ns-table>
    <h2>Now {{ formData.client }} [{{ formData.selectedCity }}]</h2>
    <ns-dialog v-model="dialogVisible" title="呼叫用户">
      <h2>Dialog</h2>
      <p>Dialog content</p>
    </ns-dialog>
  </div>
</template>

<style scoped>
</style>
