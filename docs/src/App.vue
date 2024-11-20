<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useHead } from 'unhead'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://artifacts.shensi.tech/gradients/web.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://artifacts.shensi.tech/gradients/built-in.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://artifacts.shensi.tech/gradients/mesh.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://artifacts.shensi.tech/motions/motions.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://artifacts.shensi.tech/patterns/patterns.css'
    }
  ]
})
</script>

<template>
  <a-config-provider :locale="zhCN">
    <ns-app>
      <RouterView />
    </ns-app>
  </a-config-provider>
</template>

<style scoped>
.ns-app {
}
</style>
