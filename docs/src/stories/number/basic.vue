<template>
  <div class="number-page row wrap">
    <ns-number
      prefix="2012年净利润"
      suffix="亿元人民币"
      width="48%"
      hight="400"
      justify="center"
      border-color="secondary"
      v-model="value1" />
    <ns-number
      header="比特币实时总市值"
      footer="(刷新频率 1 分钟)"
      suffix="美元"
      width="48%"
      align="center"
      gradient="#e94057,#f27121/45"
      :padding="8"
      :main-height="100"
      main-justify="end"
      v-model="value2" />
    <ns-number
      header="上周营收"
      suffix="%"
      width="30%"
      hight="100"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      v-model="value3" />
    <ns-number
      header="本月活跃"
      suffix="%"
      width="30%"
      hight="100"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      v-model="value4" />
    <ns-number
      header="季度环比"
      suffix="%"
      width="30%"
      hight="100"
      align="start"
      mainAlign="center"
      trend="down"
      :minimum-fraction-digits="2"
      v-model="value5" />
  </div>
</template>

<script lang="ts" setup>
  const value1 = 8012.591
  const value2 = 1_390_767_963_266
  const value3 = -12.08
  const value4 = 1.65
  const value5 = 0.13
</script>

<style lang="scss">
.number-page {
  gap: 10px;
}
</style>
