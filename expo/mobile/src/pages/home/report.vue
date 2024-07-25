<template>
  <ns-page class="report-page">
    <ns-page-header title="运营日报" reveal
      fill="#ffffff99" :blur="20"
      has-back-button></ns-page-header>
    <ns-page-content>
      <ns-date-select v-model="date" />
      <ns-button-group class="my-sm"
        round
        v-model="realm"
        fill="primary"
        :options="realms"
        variant="outlined" />
      <h2 class="h2">客户数据</h2>
      <ns-repeator class="numbers"
        :items="clientData"
        wrap
        v-slot="item"
        :gap="10">
        <ns-number
          :value="item.value"
          :footer="item.title"
          justify="center"
          fill="primary"
          stroke="#fff"
          foreground="#fff" />
      </ns-repeator>
      <h2 class="h2">通话数据</h2>
      <ns-repeator class="numbers"
        :items="callData"
        wrap
        v-slot="item"
        :gap="10">
        <ns-number
          :value="item.value"
          :footer="item.title"
          :suffix="item.suffix"
          justify="center"
          stroke="#fff"
          gradient="#08AEEA,#2AF598/180"
          texture="https://simple.shensi.tech/textures/wave.svg"
          repeat
          foreground="#fff" />
      </ns-repeator>
      <h2 class="h2">签单数据</h2>
      <ns-repeator class="numbers"
        :items="salesData"
        wrap
        v-slot="item"
        :gap="10">
        <ns-number
          :value="item.value"
          :footer="item.title"
          :suffix="item.suffix"
          justify="center"
          fill="#fff"
          foreground="#333" />
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const date = ref('2024-07-01'),
  realm = ref('1')

const realms = [
  { label: '个人', value: '1' },
  { label: '团队', value: '2' },
  { label: '公司', value: '3' },
]

const clientData = [
    { title: '新增客户', value: 123 },
    { title: '跟进客户数', value: 30 },
    { title: '新邀约', value: 12 },
    { title: '新上门客户', value: 4 },
    { title: '新签单', value: 18 },
    { title: '新放款', value: 8 },
    { title: '无星客户', value: 400 },
    { title: '一星客户', value: 205 },
    { title: '二星客户', value: 170 },
    { title: '三星客户', value: 20 },
    { title: '四星客户', value: 44 },
    { title: '五星客户', value: 86 },
  ],
  callData = [
    { title: '拨打', value: 265 },
    { title: '接通', value: 89 },
    { title: '接通率', value: 33.0, suffix: '%' },
  ],
  salesData = [
    { title: '订单', value: 13 },
    { title: '签单金额', value: 1900, siffix: '万' },
    { title: '收入', value: 14.5, suffix: '万' },
    { title: '支出', value: 0.4, suffix: '万' },
    { title: '净收', value: 14.1, suffix: '万' },
    { title: '放款数', value: 3 },
    { title: '放款金额', value: 1800, suffix: '万' },
  ]
</script>

<style lang="scss">
.report-page {
  .numbers {
    .flex-item {
      width: calc(33.333% - 7px);
      flex-grow: 0;
    }
  }
}
</style>
