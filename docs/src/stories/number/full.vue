<template>
  <div class="numbers row wrap">
    <ns-number
      prefix="2012年净利润"
      suffix="亿元人民币"
      width="48%"
      hight="400"
      justify="center"
      motion="001"
      :animated="true"
      :value="value1" />
    <ns-number
      header="比特币实时总市值"
      suffix="美元"
      width="48%"
      align="center"
      gradient="#e94057,#f27121/45"
      :padding="8"
      :main-height="100"
      main-justify="center"
      :animated="true"
      foreground="#fff"
      :value="value2">
      <template #footer>
        <div class="row align-center">
          <span>(刷新频率 1 分钟)</span>
          <i class="circle" v-tooltip="'带饭'">?</i>
        </div>
      </template>
      </ns-number>
  </div>
</template>

<script lang="ts" setup>
  const value1 = 8012.591
  const value2 = 1_390_767_963_266
</script>

<style lang="scss">
.numbers {
  gap: 10px;
}
</style>
