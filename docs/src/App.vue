<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from 'unhead'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://simple.shensi.tech/system-assets/gradients/web.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://simple.shensi.tech/system-assets/gradients/built-in.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://simple.shensi.tech/system-assets/motions/motions.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://simple.shensi.tech/system-assets/patterns/patterns.css'
    }
  ]
})
</script>

<template>
  <ns-app>
    <RouterView />
  </ns-app>
</template>

<style scoped>
.ns-app {
  --ns-border-radius: 16px;
}
</style>
