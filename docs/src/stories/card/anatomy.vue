<template>
  <ns-card title="卡片" class="card-anatomy" fill="#fff" style="--ns-spacing: 20px">
    <template #corner>
      <ns-icon name="https://simple.shensi.tech/system-assets/icons/arrow-up-right.svg" />
    </template>
    自定义卡片内容
    <template #footer>
      <ns-button
        variant="outlined"
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
  .card-footer {
    justify-content: end;
  }
}
</style>
