<template>
  <ns-repeator class="demo-repeator"
    :data="data"
    :gap="10"
    align="stretch"
    wrap
    v-slot="item">
    <ns-number
      :value="item.count"
      :footer="item.name"
      variant="outlined"
      justify="center"
      foreground="#fff"
      gradient="#e94057,#f27121/45" />
  </ns-repeator>
</template>

<script lang="ts" setup>
const data = [
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
