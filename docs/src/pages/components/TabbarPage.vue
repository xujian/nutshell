<template>
  <h1 class="my-lg">Tabbar &lt;ns-tabbar&gt;</h1>
  <h3>基本特性</h3>
  <p>&nbsp;</p>
  <ns-tabbar class="demo-tabbar"
    :items="items">
  </ns-tabbar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

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
.demo-tabbar {
}
</style>
