<template>
  <ns-page class="list-messages-page panel-page" fill="neutral">
    <ns-page-header title="订单" fill="#ffffff"
      :blur="40" has-back-button>
      <ns-row justify="stretch" gap>
        <ns-dropdown label="筛选" :items="filters"
          variant="plain"
          fill="#fff" v-model="filter" class="shrink" />
        <ns-search placeholder="搜索订单" color="#fff" variant="outlined" style="margin-right: 20px;" />
      </ns-row>
      <ns-tabs :items="tabs"
        :r="0"
        fill="#ffffff88"
        v-model="tab" />
      </ns-page-header>
    <ns-page-content>
      <ns-repeator class="demo-repeator"
        direction="column"
        :data
        :group-by
        align="stretch"
        gap
        v-slot="item">
          <ns-card :title="item.type"
            class="full-width"
            :caption="`进件时间: ${item.进件时间}`"
            fill="#ffffff"
            body-fill="#00000022"
            shadow>
            <ns-facts :items="toFact(item)" />
            <template #icon>
              <ns-avatar :fill="colors[item.type]" :edge="10" :src="images[item.type]" />
            </template>
            <template #corner>
              <h6>{{ item.status }}</h6>
            </template>
          </ns-card>
        </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = ref([
    { label: '待审核', value: '1', },
    { label: '待放款', value: '2', },
    { label: '已放款', value: '3', },
    { label: '已完结', value: '4', },
  ]),
  tab = ref('1')

const filters = ref([
    { label: '交易周转', value: '1', },
    { label: '房产抵押', value: '2', },
    { label: '车辆抵押', value: '3', },
    { label: '企业贷款', value: '4', },
  ]),
  filter = ref('1')

const groupBy = (item) => {
  const date = new Date(item.进件时间),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate()
  return `${year}-${month}-${day}`
}

const colors = {
  交易周转: 'primary',
  非交易周转: 'positive'
}

const images: Record<string, string> = {
  交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-JYZZ.png',
  非交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-FJYZZ.png'
}

const data = ref([
  {
    type: '交易周转',
    进件时间: '2025/10/08 10:32',
    客户姓名: '李华明',
    渠道经理: '王伟强',
    放款机构: '联银小贷',
    订单编号: 'SZS0420230220001',
    status: '待审核'
  },
  {
    type: '交易周转',
    进件时间: '2025/10/08 11:45',
    客户姓名: '张敏杰',
    渠道经理: '李娜丽',
    放款机构: '中信银行',
    订单编号: 'SZS0420230220002',
    status: '待审核'
  },
  {
    type: '非交易周转',
    进件时间: '2025/10/08 12:50',
    客户姓名: '王强军',
    渠道经理: '刘洋明',
    放款机构: '招商银行',
    订单编号: 'SZS0420230220003',
    status: '待审核'
  },
  {
    type: '交易周转',
    进件时间: '2025/10/11 09:20',
    客户姓名: '赵敏华',
    渠道经理: '陈刚强',
    放款机构: '建设银行',
    订单编号: 'SZS0420230220004',
    status: '待放款'
  },
  {
    type: '交易周转',
    进件时间: '2025/10/11 14:30',
    客户姓名: '孙丽华',
    渠道经理: '王磊明',
    放款机构: '农业银行',
    订单编号: 'SZS0420230220005',
    status: '待放款'
  },
  {
    type: '非交易周转',
    进件时间: '2025/10/13 15:45',
    客户姓名: '周杰明',
    渠道经理: '李强军',
    放款机构: '工商银行',
    订单编号: 'SZS0420230220006',
    status: '已放款'
  },
  {
    type: '非交易周转',
    进件时间: '2025/10/13 16:50',
    客户姓名: '吴敏杰',
    渠道经理: '张伟强',
    放款机构: '平安银行',
    订单编号: 'SZS0420230220007',
    status: '已放款'
  },
  {
    type: '非交易周转',
    进件时间: '2025/10/15 17:55',
    客户姓名: '郑伟强',
    渠道经理: '刘强军',
    放款机构: '光大银行',
    订单编号: 'SZS0420230220008',
    status: '已完结'
  },
  {
    type: '交易周转',
    进件时间: '2025/10/15 18:00',
    客户姓名: '冯丽华',
    渠道经理: '王敏杰',
    放款机构: '华夏银行',
    订单编号: 'SZS0420230220009',
    status: '已完结'
  },
  {
    type: '交易周转',
    进件时间: '2025/10/15 19:10',
    客户姓名: '陈伟明',
    渠道经理: '李磊明',
    放款机构: '民生银行',
    订单编号: 'SZS0420230220010',
    status: '已完结'
  }
])

const toFact = (item) => {
  return Object.keys(item).map(key => {
    return {
      label: key,
      value: item[key]
    }
  }).filter(f => !['type', 'status'].includes(f.label))
}
</script>

<style scoped>
</style>
