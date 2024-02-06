<template>
  <div class="page account-page">
    <page-header
      color-mode="dark"
      class="recharge-header"
      title="大道云 Pro">
      <img
        class="caption-image"
        src="https://cdn.ddjf.com/static/images/appkit/recharge-title.png"
      />
      <view class="ribbon"></view>
    </page-header>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { PageHeader, useTabbar } from '@uxda/appkit-next'

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('account')
})
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
