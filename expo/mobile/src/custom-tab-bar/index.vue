<template>
  <ns-tabbar class="basic-tabbar"
    :items="items">
  </ns-tabbar>
</template>
<script lang="ts" setup>
import './index.scss'

const items = [
  {
    label: '首页',
    icon: 'house'
  },
  {
    label: '账户',
    icon: 'gear'
  },
]
</script>
<style lang="scss">
.basic-tabbar {
  --font-size-sm: 14px;
  --icon-md: 16px;
  border-top: solid 1px #ddd;
  font-size: 12px;
  .ni-icon {
    --font-size-sm: 16px;
  }
}
</style>
