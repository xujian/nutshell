<template>
  <div class="numbers row wrap">
    <ns-number
      header="上周营收"
      suffix="%"
      width="30%"
      hight="100"
      fill="#fff"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      :value="value3" />
    <ns-number
      header="本月活跃"
      suffix="%"
      width="30%"
      hight="100"
      fill="#fff"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      :value="value4" />
    <ns-number
      header="季度环比"
      suffix="%"
      width="30%"
      fill="#fff"
      hight="100"
      align="start"
      mainAlign="center"
      trend="down"
      :minimum-fraction-digits="2"
      tooltip="数据存在1-2天延迟"
      :value="value5" />
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
.numbers {
  gap: 10px;
}
</style>
