<template>
  <ns-row justify="start" align="stretch" :gap="10">
    <ns-card class="sample-card" title="卡片" fill="#fff" stroke="neutral">
      <lorem />
      <template #footer>
        <ns-row justify="end">
          <ns-button variant="outlined">取消</ns-button>
          <ns-button color="primary">保存</ns-button>
        </ns-row>
      </template>
    </ns-card>
    <ns-card class="sample-card" title="卡片" fill="positive">
      <lorem />
      <template #footer>
        <ns-row justify="end">
          <ns-button class="full-width" color="primary">升级</ns-button>
        </ns-row>
      </template>
    </ns-card>
    <ns-card class="sample-card" fill="#333" stroke="#fff" mesh="001" title="卡片"></ns-card>
  </ns-row>
</template>

<style lang="scss">
.sample-card {
  width: 320px;
}
</style>
