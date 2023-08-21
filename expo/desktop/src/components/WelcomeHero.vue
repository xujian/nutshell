<script setup lang="ts">
import type { TableColumnsType } from 'ant-design-vue'
import { ref } from 'vue'
import axios from 'axios'

const onClick = (...args: any[]) => {
  console.log('ns-button-------onClick', args)
}

const columns =[
  { title: '部门', dataIndex: 'deptName', width: '100px' },
  {
    title: '签单笔数',
    dataIndex: 'orderCount',
    width: '100px',
    align: 'right',
  },
  {
    title: '签单金额(万元)',
    dataIndex: 'preLoanAmountSum',
    width: '140px',
    align: 'right',
    type: 'decimal'
  },
  { title: '放款笔数', dataIndex: 'loanCount', width: '140px', align: 'right' },
  {
    title: '放款金额(万元)',
    dataIndex: 'realLoanAmountSum',
    width: '140px',
    align: 'right',
  },
  {
    title: '笔均放款金额(万元)',
    dataIndex: 'avgRealLoanAmount',
    width: '160px',
    align: 'right',
  },
  {
    title: '收入金额(元)',
    dataIndex: 'confirmedFeeIncomeSum',
    width: '140px',
    align: 'right',
  },
  {
    title: '支出金额(元)',
    dataIndex: 'confirmedFeeCostSum',
    width: '140px',
    align: 'right',
  },
  {
    title: '净收金额(元)',
    dataIndex: 'netReceivedAmount',
    width: '140px',
    align: 'right',
  },
  {
    title: '笔均净收金额(元)',
    dataIndex: 'avgNetReceivedAmount',
    width: '160px',
    align: 'right',
  },
  {
    title: '人均签单笔数',
    dataIndex: 'perOrderCount',
    width: '140px',
    align: 'right',
  },
  {
    title: '人均签单金额(万元)',
    dataIndex: 'perPreLoanAmount',
    width: '160px',
    align: 'right',
  },
  {
    title: '人均放款笔数',
    dataIndex: 'perLoanCount',
    width: '140px',
    align: 'right',
  },
  {
    title: '人均放款金额(万元)',
    dataIndex: 'perRealLoanAmount',
    width: '160px',
    align: 'right',
  },
  {
    title: '人均收入金额(元)',
    dataIndex: 'perConfirmedFeeIncome',
    width: '160px',
    align: 'right',
  },
  {
    title: '人均支出金额(元)',
    dataIndex: 'perConfirmedFeeCost',
    width: '160px',
    align: 'right',
  },
  {
    title: '人均净收金额(元)',
    dataIndex: 'perNetReceivedAmount',
    width: '160px',
    align: 'right',
  },
  {
    title: '',
    key: 'operation',
    fixed: 'right',
    width: 80,
  },
]

const tableData = ref([])

function fetchTableData () {
  axios.get('/json/table-data.json').then(response => {
    tableData.value = response.data
  })
}

fetchTableData()

</script>

<template>
  <div class="welcome">
    <h1>Nutshell Desktop Expo</h1>
    <ns-row :gutter="8">
      <ns-col span="12">
        <ns-button type="primary"
          size="sm"
          width="100"
          color="#ff9900"
          disabled
          label="Press" @click="onClick" />
      </ns-col>
      <ns-col span="12">
        <ns-input type="text" label="客户名称" placeholder="客户名称" />
      </ns-col>
      <ns-col span="12">
        <ns-date-input label="选择日期" />
      </ns-col>
    </ns-row>
    <ns-table :data-source="tableData" :columns="columns"></ns-table>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
