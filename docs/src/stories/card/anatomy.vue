<template>
  <ns-card title="卡片" class="card-anatomy">
    <template #titleAfter>
      <ns-chip color="primary" label="实名" />
    </template>
    <template #corner>
      <ns-icon name="https://simple.shensi.tech/system-assets/icons/arrow-up-right.svg" />
    </template>
    <ns-number
      header="季度环比"
      suffix="%"
      width="30%"
      hight="100"
      align="start"
      mainAlign="center"
      trend="down"
      :padding="0"
      :minimum-fraction-digits="2"
      :value="1.25" />
      <template #footer>
        <ns-button
          fill="#fff"
          size="xs"
          round
          icon="http://simple.shensi.tech/icons/arrow-right.svg"
          icon-position="end">数据图表</ns-button>
      </template>
  </ns-card>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.card-anatomy {
  width: 400px;
  .note {
    color: #999;
    font-size: 10px;
  }
  .card-header {
    background: repeating-linear-gradient(
    -45deg,
    #00000022,
    #00000022 10px,
    #00000011 10px,
    #00000011 20px);
  }
  .card-body {
  }
  .card-footer {
    background: repeating-linear-gradient(
    -45deg,
    #00000022,
    #00000022 10px,
    #00000011 10px,
    #00000011 20px);
    justify-content: end;
  }
}
</style>
