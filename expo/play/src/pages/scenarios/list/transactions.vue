<template>
  <ns-page class="list-transactions-page panel-page" fill="#f1f2f4">
    <ns-page-header title="消费记录" fill="#ffffff"
      :blur="40" has-back-button>
      <ns-tabs :items="tabs"
        :r="0"
        fill="#ffffff88"
        size="lg"
        v-model="tab" />
      </ns-page-header>
    <ns-page-content>
      <ns-list class="demo-list"
        :data
        item-fill="#fff"
        direction="column"
        captionfontSize= "font-xs"
        titleFontSize = "font-lg"
        align="stretch"
        gap>
        <template #prepend="item">
          <ns-avatar :src="item.type" color="negtive" />
        </template>
      </ns-list>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = ref([
    { label: '待处理', value: '1', },
    { label: '处理中', value: '2', },
    { label: '已完成', value: '3', },
    { label: '已取消', value: '4', },
  ]),
  tab = ref('1')

const data = ref([
  {
    type: '消耗',
    caption: '2022/10/08 10:32',
    value: -1,
    交易编号: 'TX0420230220001',
    status: '待处理',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/09 11:45',
    value: -2,
    交易编号: 'TX0420230220002',
    status: '处理中',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/10 12:50',
    value: -3,
    交易编号: 'TX0420230220003',
    status: '已完成',
    title: '充值'
  },
  {
    type: '消耗',
    caption: '2022/10/11 09:20',
    value: -2,
    交易编号: 'TX0420230220004',
    status: '已取消',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/12 14:30',
    value: -4,
    交易编号: 'TX0420230220005',
    status: '待处理',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/13 15:45',
    value: -1,
    交易编号: 'TX0420230220006',
    status: '处理中',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/14 16:50',
    value: -2,
    交易编号: 'TX0420230220007',
    status: '已完成',
    title: '权益'
  },
  {
    type: '充值',
    caption: '2022/10/15 17:55',
    value: 1000,
    交易编号: 'TX0420230220008',
    status: '已取消',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/16 18:00',
    value: -4,
    交易编号: 'TX0420230220009',
    status: '待处理',
    title: '权益'
  },
  {
    type: '消耗',
    caption: '2022/10/17 19:10',
    value: -5,
    交易编号: 'TX0420230220010',
    status: '处理中',
    title: '权益'
  }
])

</script>

<style scoped>
</style>
