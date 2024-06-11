<template>
  <ns-tabbar class="basic-tabbar"
    :items="items">
  </ns-tabbar>
</template>
<script lang="ts" setup>
const items = [
  {
    label: '首页',
    icon: 'home'
  },
  {
    label: '账户',
    icon: 'account'
  },
]
</script>
<style lang="scss">
.basic-tabbar {
}
</style>
