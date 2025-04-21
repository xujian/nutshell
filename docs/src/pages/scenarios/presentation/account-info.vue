<template>
  <ns-page class="account-info">
    <ns-card title="数据概览" fill="#fff" style="padding: 10px;">
      <ns-row :gap="20" justify="start">
        <ns-card fill="#F5F8FF" :r="5" class="account-card">
          <ns-row justify="start" :gap="5">
            <img style="width: 20px; height: 20px;" src="https://cdn.ddjf.com/static/images/CRM/money.png" alt="">
            <div>云豆余额</div>
          </ns-row>
          <ns-row justify="start">
            <ns-number :value="567288" :fontSize="20" header="" prefix="" suffix=""> </ns-number>
            <ns-button color="primary" size="xs">充值</ns-button>
          </ns-row>
        </ns-card>
        <ns-card fill="#F9F9F9" :r="5" class="account-card">
          <ns-row justify="start" :gap="5">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: #0CC991;"></div>
            <div>企业风险查询报告</div>
          </ns-row>
          <ns-row align="end" justify="start">
            <ns-number :value="567288" :fontSize="20" prefix="" suffix="笔" style="padding: 0;">
              <template #header>
                <ns-chip variant="soft" style="width: fit-content; margin-bottom: 5px">企明星</ns-chip>
              </template>
            </ns-number>
            <ns-button variant="plain" color="primary" size="xs">调整</ns-button>
          </ns-row>
        </ns-card>
        <ns-card fill="#F9F9F9" :r="5" class="account-card">
          <ns-row justify="start" :gap="5">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: #0CC991;"></div>
            <div>风险查询-初审</div>
          </ns-row>
          <ns-row align="end" justify="start">
            <ns-number :value="567288" :fontSize="20" prefix="" suffix="笔" style="padding: 0;">
              <template #header>
                <ns-chip variant="soft" style="width: fit-content; margin-bottom: 5px">AI审批</ns-chip>
              </template>
            </ns-number>
            <ns-button variant="plain" color="primary" size="xs">调整</ns-button>
          </ns-row>
        </ns-card>
        <ns-card fill="#F9F9F9" :r="5" class="account-card">
          <ns-row justify="start" :gap="5">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: #0CC991;"></div>
            <div>风险查询-终审</div>
          </ns-row>
          <ns-row align="end" justify="start">
            <ns-number :value="81" :fontSize="20" prefix="" suffix="笔" style="padding: 0;">
              <template #header>
                <ns-chip variant="soft" style="width: fit-content; margin-bottom: 5px">AI审批</ns-chip>
              </template>
            </ns-number>
            <ns-button variant="plain" color="primary" size="xs">调整</ns-button>
          </ns-row>
        </ns-card>
        <ns-card fill="#F9F9F9" :r="5" class="account-card">
          <ns-row justify="start" :gap="5">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: #0CC991;"></div>
            <div>风险查询-核婚</div>
          </ns-row>
          <ns-row align="end" justify="start">
            <ns-number :value="81" :fontSize="20" prefix="" suffix="笔" style="padding: 0;">
              <template #header>
                <ns-chip variant="soft" style="width: fit-content; margin-bottom: 5px">AI审批</ns-chip>
              </template>
            </ns-number>
            <ns-button variant="plain" color="primary" size="xs">调整</ns-button>
          </ns-row>
        </ns-card>
      </ns-row>
    </ns-card>

    <ns-card style="margin-top: 20px; --ns-spacing: 20px; background: #fff; flex: 1" class="table-bar">
      <ns-form ref="formRef" v-model="formData" class="flex-row wrap">
        <ns-input variant="solid" label="订单编号" v-model="formData.orderId" name="orderId" placeholder="请输入订单编号" />
        <ns-select variant="solid" label="产品名称" v-model="formData.productName" name="productName" :options="productOptions" placeholder="请选择产品名称" />
        <ns-select variant="solid" label="市场团队" v-model="formData.marketTeam" name="marketTeam" :options="marketTeamOptions" placeholder="请选择市场团队" />
        <ns-select variant="solid" label="业务员" v-model="formData.salesman" name="salesman" :options="salesmanOptions" placeholder="请选择业务员" />
        <ns-date-range-input variant="solid" label="订单创建时间" name="dateRange" v-model="formData.dateRange" />
        <ns-button variant="outlined" @click="handleReset">重置</ns-button>
        <ns-button color="primary">搜索</ns-button>
      </ns-form>

      <ns-table :rows="tableData" :hasPagination="false" :tooltipMethod="tooltipMethod">
        <ns-table-column field="category" label="权益类目" />
        <ns-table-column field="priceType" label="定价类型" />
        <ns-table-column field="price" label="定价" />
        <ns-table-column field="balance" label="精选账户余额" />
        <ns-table-column-custom label="操作">
          <template #content="{ row }">
            <ns-button variant="plain" color="primary" @click="handlePriceSetting(row)">定价设置</ns-button>
            <ns-button variant="plain" color="primary" @click="handleAccountSetting(row)">账户设置</ns-button>
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

const formRef = ref()
const formData = ref({
  orderId: '',
  productName: null,
  marketTeam: null,
  salesman: null,
  dateRange: []
})

const productOptions = ref([
  { label: '消费贷', value: 'consumer_loan' },
  { label: '经营贷', value: 'business_loan' },
  { label: '房抵贷', value: 'mortgage_loan' },
  { label: '车抵贷', value: 'car_loan' }
])

const marketTeamOptions = ref([
  { label: '团队A', value: 'team_a' },
  { label: '团队B', value: 'team_b' },
  { label: '团队C', value: 'team_c' },
  { label: '团队D', value: 'team_d' }
])

const salesmanOptions = ref([
  { label: '张三', value: 'zhangsan' },
  { label: '李四', value: 'lisi' },
  { label: '王五', value: 'wangwu' },
  { label: '赵六', value: 'zhaoliu' }
])
const tableData = ref([
  {
    category: '放款额度',
    priceType: '费率/%',
    price: '0.54, 0.53, 0.52',
    balance: 100000,
  },
  {
    category: '转账',
    priceType: '费率/%',
    price: '5.00',
    balance: 300000
  },
  {
    category: '放款',
    priceType: '费率/%',
    price: '5.00',
    balance: 0
  },
  {
    category: '提现',
    priceType: '费率/%',
    price: '5.00',
    balance: 100000
  }
])

const handlePriceSetting = (row: any) => {
  console.log('定价设置', row)
}

const handleAccountSetting = (row: any) => {
  console.log('账户设置', row)
}

const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 4,
})

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
}

const handleReset = () => {
  formData.value = {
    orderId: '',
    productName: null,
    marketTeam: null,
    salesman: null,
    dateRange: []
  }
}

function tooltipMethod(row: any) {
 return ['操作'].includes(row.column.id) ? '' : null
}
</script>

<style scoped lang="scss">
.account-info {
  .account-card {
    width: 190px;
    height: 88px;
    .card-body {
      padding: 10px 12px;
    }
  }
}
</style>
