<template>
  <h1 class="my-lg">连续平铺 &lt;ns-repeator&gt;</h1>
  <h3>基本特性</h3>
  <p>&nbsp;</p>
  <ns-repeator class="demo-repeator"
    :items="items"
    :gutter="10"
    wrap
    v-slot="item">
    <ns-card class="repeator-card" fill="primary">
      <h2 class="number">{{ item.count }}</h2>
      <h4>{{ item.name }}</h4>
    </ns-card>
  </ns-repeator>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const items = [
  {
    name: '总计客户',
    count: 64027
  },
  {
    name: '线索客户',
    count: 63933
  },
  {
    name: '意向客户',
    count: 72
  },
  {
    name: '上门客户',
    count: 12
  },
  {
    name: '签单客户',
    count: 1
  },
  {
    name: '放款客户',
    count: 3
  },
  {
    name: '结单客户',
    count: 3
  },
  {
    name: '总计订单数',
    count: 2
  },
  {
    name: '总计放款数',
    count: 2
  },
  {
    name: '总计放款金额/万元',
    count: 10200
  },
]
</script>

<style lang="scss">
.demo-repeator {
  width: 100%;
  .repeator-card {
    color: #ffffff;
  }
}
</style>
