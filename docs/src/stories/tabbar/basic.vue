<template>
  <ns-tabbar class="basic-tabbar"
    :items="items">
  </ns-tabbar>
</template>
<script lang="ts" setup>
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
}
</style>
