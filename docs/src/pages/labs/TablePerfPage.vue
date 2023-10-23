<template>
  <h1 class="my-lg">表格性能测试</h1>
  <ns-table :rows="tableData" :columns="columns" row-key="id">
  </ns-table>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'

const state = reactive({
  selected: []
})

const columns = [
  {
    type: 'checkbox',
    fixed: 'left',
    selection: state.selected
  },
  {
    title: '序号',
    width: 50,
    field: 'sort',
    align: 'right',
    fixed: 'left',
    haveShow: true,
  },
  {
    title: '点呼',
    width: 70,
    field: 'clickToCall',
    align: 'right',
    fixed: 'left',
    haveShow: true,
  },
  {
    title: '客户姓名',
    field: 'name',
    width: 150,
    fixed: 'left',
    haveShow: true,
  },
  { title: '手机号码', field: 'phone', width: 130, resizable: true },
  {
    title: '意向等级',
    field: 'grade',
    width: 160,
    resizable: true,
  },
  {
    title: '客户标签',
    field: 'label',
    width: 300,
    resizable: true,
  },
  {
    title: '客户阶段',
    field: 'stage',
    width: 120,
    haveShow: true,
    resizable: true,
  },
  {
    title: '身份证号码',
    field: 'certNo',
    width: 200,
    show: false,
    resizable: true,
  },
  {
    title: '婚姻状况',
    field: 'marital',
    width: 100,
    show: false,
    resizable: true,
  },
  {
    title: '意向产品',
    field: 'productIds',
    width: 150,
    show: false,
    resizable: true,
  },
  {
    title: '公众号',
    field: 'gzhFlag',
    width: 85,
    show: false,
    resizable: true,
  },
  {
    title: '认证现状',
    field: 'authFlag',
    width: 110,
    show: false,
    resizable: true,
  },
  {
    title: '关联订单数量',
    field: 'orderNum',
    width: 150,
    resizable: true,
  },
  {
    title: '关联订单收费',
    field: 'orderCharges',
    width: 150,
    resizable: true,
  },
  {
    title: '当前跟进用户',
    field: 'followerIdStr',
    width: 120,
    resizable: true,
  },
  {
    title: '最新跟进时间',
    field: 'followDate',
    width: 170,
    resizable: true,
  },
  {
    title: '更新时间',
    field: 'updateTime',
    width: 170,
    resizable: true,
  },
  {
    title: '分配/捞取时间',
    field: 'transDate',
    width: 170,
    resizable: true,
  },
  { title: '创建来源', field: 'from', width: 100, resizable: true },
  {
    title: '创建用户',
    field: 'userIdStr',
    width: 120,
    show: false,
    resizable: true,
  },
  {
    title: '创建时间',
    field: 'inputTime',
    width: 170,
    resizable: true,
  },
  {
    title: '协助谈单人员',
    field: 'helpUserIdStr',
    width: 200,
    resizable: true,
  },
  {
    title: '有效通话次数',
    field: 'callNum',
    align: 'right',
    width: 140,
    show: false,
    resizable: true,
  },
  {
    title: '末次通话状态',
    field: 'callResult',
    width: 140,
    show: false,
    resizable: true,
  },
  {
    name: 'opeColumns',
    width: 28,
    fixed: 'right',
    align: 'center',
  },
]

const tableData = ref<any[]>([])

function fetchTableData () {
  axios.get('/json/table-data-clients.json')
    .then(response => response.data)
    // pipes to translate keys to labels
    .then(data => data.map(
      (d: any, index: number) => ({
        ...d,
        no: index + 1,
        phone: JSON.parse(d.phone)?.['mask'] || '',
      })))
    .then(result => {
      console.log('.........then result', result)
      tableData.value = result
    })
}

onMounted(() => {
  fetchTableData()
})
</script>

<style lang="scss">

</style>