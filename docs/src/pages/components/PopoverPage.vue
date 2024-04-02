<template>
  <h1 class="my-lg">气泡卡片 ns-popover</h1>
  <h4 class="my-lg">基本用法</h4>
  <ns-popover v-model="popover" title="Title">
    <template #content>
      content
    </template>
    气泡
  </ns-popover>

  <h4 class="my-lg">content list用法</h4>
  <ns-popover v-model="popover1" :items="items" title="Title" @item-click="onItemClick">
    气泡
  </ns-popover>

  <h4 class="my-lg">trigger click用法</h4>
  <ns-popover v-model="popover2" :items="items" title="Title" trigger="click" @item-click="onItemClick">
    气泡
  </ns-popover>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const popover = ref(false)
const popover1 = ref(false)
const popover2 = ref(false)

const items = [
{
    label: '账户',
    value: 'account',
  },
  {
    label: '退出登录',
    value: 'logout',
  },
  {
    label: '用户手册',
    value: 'help',
  },
]
function onItemClick(e) {
  console.log(e)
}
</script>

<style lang="scss">
</style>
