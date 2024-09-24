<template>
  <ns-page class="client-detail-page">
    <ns-page-header title="客户详情"
      colorMode="dark"
      fill="#000"
      has-back-button
      reveal>
    </ns-page-header>
    <ns-page-content>
      <div class="hero cover row align-end breakout sticky">
        <h1 class="name h1 text-gradient">{{ client.姓名 }}</h1>
      </div>
      <ns-card class="stage-card overlap" fill="#ffffff55" :blur="50">
        <ns-stepper :items="steps" :model-value="stage" />
      </ns-card>
      <ns-tabs v-model="tab"
        class="my-md"
        fill="#ffffff44"
        :blur="10"
        :items="tabs" />
      <h2 class="h2">意向</h2>
      <ns-facts>
        <ns-facts-item label="意向等级">
          <ns-rating :value="3" />
        </ns-facts-item>
        <ns-facts-item label="业务意向">
          抵押类
        </ns-facts-item>
        <ns-facts-item label="客户标签" direction="column">
          <ns-chips :items="tags" color="#ff9800" justify="end" />
        </ns-facts-item>
        <ns-facts-item label="客户来源">
          直营
        </ns-facts-item>
        <ns-facts-item label="意向产品" direction="column">
          <ns-chips :items="intrests" color="#ff9800" justify="end" />
        </ns-facts-item>
      </ns-facts>
      <h2 class="h2">提醒记录</h2>
      <h2 class="h2">跟进记录</h2>
      <div class="follow-records"></div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Client } from '../../models'

const client = ref<Client>({
    id: '1',
    姓名: '王长城'
  }),
  tab = ref('1')

const stage = ref(2)

const steps = [
    { title: '线索', value: 'lead' },
    { title: '意向', value: 'opportunity' },
    { title: '上门', value: 'visit' },
    { title: '签单', value: 'open' },
    { title: '做单', value: 'deal' },
    { title: '放款', value: 'payment' },
    { title: '结单', value: 'done' },
  ],
  tabs = [
    {
      value: '1',
      label: '基本资料'
    },
    {
      value: '2',
      label: '跟进记录'
    },
    {
      value: '3',
      label: '关联订单'
    },
    {
      value: '4',
      label: '影像资料'
    }
  ],
  tags = [
    { label: '经营企业', value: '1' },
    { label: '房地产', value: '2' },
    { label: '海外资产', value: '3' },
    { label: '互联网', value: '4' },
    { label: '金融', value: '5' },
    { label: '高管', value: '6' },
  ],
  intrests = [
    { label: '支付宝', value: '1' },
    { label: '提放宝', value: '2' },
  ]
</script>

<style lang="scss">
.client-detail-page {
  background-image: url(http://simple.shensi.tech/images/background.jpeg);
  color: #fff;
  --text: #fff;
  .hero {
    position: sticky;
    top: calc(var(--status) + var(--nav));
    height: 240px;
    background-image: url(http://simple.shensi.tech/upload/asimo.jpg);
    padding: 2em 1em;
    transition: height 1s;
    box-sizing: border-box;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
  }
  .follow-records {
    height: 800px;
  }
  &.scrolled {
    .hero {
      height: calc(var(--status) + var(--nav));
    }
  }
}
</style>
