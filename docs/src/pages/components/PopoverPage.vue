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
  <ns-popover v-model="popover1" :list="list" title="Title">
    气泡
  </ns-popover>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const popover = ref(false)
const popover1 = ref(false)

const list = [

  {
    title: '列表组件',
  },
  {
    caption: '<ns-popover>'
  },
]
</script>

<style lang="scss">
</style>
