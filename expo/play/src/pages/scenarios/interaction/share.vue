<template>
  <ns-page class="share-page" fill="neutral">
    <ns-page-header title="分享" has-back-button />
    <ns-page-content>
      <ns-card  class="contract-card mb-md" fill="#ffffff">
        <template #header>合同</template>
        <ns-row justify="center">
          <h2 class="b">房屋抵押贷款合同</h2>
        </ns-row>
        <template #footer>
          <ns-row justify="end">
            <ns-button variant="outlined"
              size="xs"
              color="#000000" round @click="openShare">签合同</ns-button>
          </ns-row>
        </template>
      </ns-card>
      <ns-row justify="center">
        <ns-button color="#000000" round @click="openShare">发送给签署人</ns-button>
      </ns-row>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

const openShare = () => {
  console.log('分享')
}
</script>

<style lang="scss">
.share-page {
  .contract-card {
    margin: 16px;
  }
}
</style>
