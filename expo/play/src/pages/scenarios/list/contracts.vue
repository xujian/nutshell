<template>
  <ns-page class="contracts-page panel-page" fill="neutral">
    <ns-page-header title="合同" fill="#ffffff"
      :blur="40" has-back-button>
      <ns-row justify="stretch" gap>
        <ns-dropdown label="筛选" :items="filters"
          variant="plain"
          fill="#fff" v-model="filter" class="shrink" />
        <ns-search placeholder="搜索合同" color="#fff" variant="outlined" />
      </ns-row>
      <ns-tabs :items="tabs"
        :r="0"
        fill="#ffffff88"
        v-model="tab" />
      </ns-page-header>
    <ns-page-content>
      <ns-repeator class="contracts-repeator"
        direction="column"
        :data="data"
        :group-by
        align="stretch"
        gap>
        <template #default="item">
          <ns-card
            class="contract-card full-width"
            :title="item.合同类型"
            :caption="`${item.签订日期}`"
            fill="#ffffff" body-fill="#00000022"
            :edge="5"
            shadow>
            <ns-facts :items="toFact(item)" />
            <template #corner>
              <h6>{{ item.状态 }}</h6>
            </template>
            <template #footer>
              <ns-row gap justify="end">
                <ns-button variant="outlined"
                  round
                  size="xs"
                  color="primary"
                  :label="`推送签约`" />
                <ns-button variant="solid"
                  color="primary"
                  round
                  size="xs"
                  :label="`确认签署`" />
              </ns-row>
            </template>
          </ns-card>
        </template>
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = ref([
    { label: '全部', value: 'all', },
    { label: '待签署', value: 'pending', },
    { label: '已签署', value: 'signed', },
    { label: '已过期', value: 'expired', },
  ]),
  tab = ref('all')

const filters = ref([
    { label: '贷款合同', value: 'loan', },
    { label: '抵押合同', value: 'mortgage', },
    { label: '服务合同', value: 'service', },
    { label: '其他合同', value: 'other', },
  ]),
  filter = ref('loan')

const groupBy = (item) => {
  const date = new Date(item.签订日期),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate()
  return `${year}-${month}-${day}`
}

const data = ref([
  {
    合同类型: '贷款合同',
    合同编号: 'HT2023001',
    签订日期: '2023/10/15 09:30',
    客户姓名: '张文明',
    贷款金额: '¥500,000',
    贷款期限: '36个月',
    利率: '4.5%',
    状态: '已签署'
  },
  {
    合同类型: '贷款合同',
    合同编号: 'HT2023002',
    签订日期: '2023/10/15 11:45',
    客户姓名: '李华东',
    贷款金额: '¥300,000',
    贷款期限: '24个月',
    利率: '4.2%',
    状态: '已签署'
  },
  {
    合同类型: '抵押合同',
    合同编号: 'HT2023003',
    签订日期: '2023/10/16 14:20',
    客户姓名: '王建强',
    抵押物: '房产',
    抵押物价值: '¥1,200,000',
    抵押期限: '60个月',
    状态: '已签署'
  },
  {
    合同类型: '服务合同',
    合同编号: 'HT2023004',
    签订日期: '2023/10/18 10:15',
    客户姓名: '赵敏华',
    服务内容: '财务顾问',
    服务费用: '¥20,000',
    服务期限: '12个月',
    状态: '待签署'
  },
  {
    合同类型: '贷款合同',
    合同编号: 'HT2023005',
    签订日期: '2023/10/20 16:30',
    客户姓名: '刘伟东',
    贷款金额: '¥800,000',
    贷款期限: '48个月',
    利率: '4.8%',
    状态: '待签署'
  },
  {
    合同类型: '抵押合同',
    合同编号: 'HT2023006',
    签订日期: '2023/10/22 09:45',
    客户姓名: '陈静怡',
    抵押物: '车辆',
    抵押物价值: '¥350,000',
    抵押期限: '36个月',
    状态: '待签署'
  },
  {
    合同类型: '服务合同',
    合同编号: 'HT2023007',
    签订日期: '2023/10/25 14:50',
    客户姓名: '周明华',
    服务内容: '法律咨询',
    服务费用: '¥15,000',
    服务期限: '6个月',
    状态: '已过期'
  },
  {
    合同类型: '贷款合同',
    合同编号: 'HT2023008',
    签订日期: '2023/10/28 11:20',
    客户姓名: '吴芳菲',
    贷款金额: '¥250,000',
    贷款期限: '18个月',
    利率: '4.0%',
    状态: '已过期'
  },
  {
    合同类型: '抵押合同',
    合同编号: 'HT2023009',
    签订日期: '2023/10/30 15:40',
    客户姓名: '郑建强',
    抵押物: '房产',
    抵押物价值: '¥950,000',
    抵押期限: '48个月',
    状态: '已签署'
  },
  {
    合同类型: '服务合同',
    合同编号: 'HT2023010',
    签订日期: '2023/11/02 10:30',
    客户姓名: '孙明亮',
    服务内容: '投资顾问',
    服务费用: '¥30,000',
    服务期限: '24个月',
    状态: '待签署'
  }
])

const toFact = (item) => {
  return Object.keys(item).map(key => {
    return {
      label: key,
      value: item[key]
    }
  }).filter(f => !['合同类型', '状态'].includes(f.label))
}
</script>

<style lang="scss">
.contracts-page {
  .contracts-repeator {
    padding-bottom: 20px;
  }
}
</style>
