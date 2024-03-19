<script setup lang="ts">
import { reactive, ref } from 'vue'

const items = [
  {
    label: '账户',
    value: 'account',
  },
  {
    label: '选项',
    value: 'settings',
    children: [
      {
        label: '色彩模式',
        value: 'theme',
      },
      {
        label: '语言',
        value: 'language'
      }
    ]
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
</script>

<template>
  <div class="menu-page">
    <h1 class="my-lg">选单 &lt;ns-menu&gt;</h1>
    <h2 class="my-md">Menu</h2>
    <p></p>
    <ns-menu fill="primary" :items="items" />
  </div>
</template>

<style scoped lang="scss">
.menu-page {
}
</style>
